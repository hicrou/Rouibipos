-- =====================================================
-- RouibiPOS Full Schema Migration (for fresh databases)
-- Compatible with Neon, Supabase, Railway, Render, etc.
-- =====================================================

-- === TENANTS ===
CREATE TABLE IF NOT EXISTS tenants (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        VARCHAR(50) UNIQUE NOT NULL,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    phone       VARCHAR(50),
    address     TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- === LICENSES ===
CREATE TABLE IF NOT EXISTS licenses (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id       UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    license_key     VARCHAR(64) UNIQUE NOT NULL,
    plan            VARCHAR(20) NOT NULL DEFAULT 'basic' CHECK (plan IN ('basic', 'pro')),
    status          VARCHAR(20) NOT NULL DEFAULT 'trial' CHECK (status IN ('trial', 'active', 'expired', 'suspended')),
    max_users       INTEGER NOT NULL DEFAULT 3,
    max_products    INTEGER NOT NULL DEFAULT 200,
    trial_ends_at   TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days'),
    expires_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- === USERS ===
CREATE SEQUENCE IF NOT EXISTS users_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS users (
    id              INTEGER PRIMARY KEY DEFAULT nextval('users_id_seq'),
    username        VARCHAR(100) NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    full_name       VARCHAR(255),
    role            VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'manager', 'cashier')),
    active          BOOLEAN DEFAULT true,
    card_number     VARCHAR(100) UNIQUE,
    card_access     BOOLEAN DEFAULT false,
    tenant_id       UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT users_username_tenant_unique UNIQUE (username, tenant_id)
);

-- === CATEGORIES ===
CREATE SEQUENCE IF NOT EXISTS categories_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS categories (
    id          INTEGER PRIMARY KEY DEFAULT nextval('categories_id_seq'),
    name        VARCHAR(255) NOT NULL,
    name_ar     VARCHAR(255),
    name_fr     VARCHAR(255),
    name_es     VARCHAR(255),
    active      BOOLEAN DEFAULT true,
    tenant_id   UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE
);

-- === PRODUCTS ===
CREATE SEQUENCE IF NOT EXISTS products_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS products (
    id          INTEGER PRIMARY KEY DEFAULT nextval('products_id_seq'),
    name        VARCHAR(255) NOT NULL,
    name_ar     VARCHAR(255),
    name_fr     VARCHAR(255),
    name_es     VARCHAR(255),
    price       NUMERIC(10,2) NOT NULL,
    category    VARCHAR(100),
    stock       INTEGER NOT NULL,
    min_stock   INTEGER,
    max_stock   INTEGER,
    barcode     VARCHAR(255) UNIQUE,
    supplier    VARCHAR(255),
    cost        NUMERIC(10,2),
    active      BOOLEAN DEFAULT true,
    image       VARCHAR(1024),
    expiry_date DATE,
    tenant_id   UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE
);

-- === CLIENTS ===
CREATE SEQUENCE IF NOT EXISTS clients_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS clients (
    id          INTEGER PRIMARY KEY DEFAULT nextval('clients_id_seq'),
    name        VARCHAR(255) NOT NULL,
    phone       VARCHAR(50),
    address     TEXT,
    tenant_id   UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE
);

-- === SUPPLIERS ===
CREATE SEQUENCE IF NOT EXISTS suppliers_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS suppliers (
    id              INTEGER PRIMARY KEY DEFAULT nextval('suppliers_id_seq'),
    name            VARCHAR(255) NOT NULL,
    contact_person  VARCHAR(255),
    phone           VARCHAR(50),
    email           VARCHAR(255),
    address         TEXT,
    tenant_id       UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE
);

-- === SALES ===
CREATE SEQUENCE IF NOT EXISTS sales_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS sales (
    id              INTEGER PRIMARY KEY DEFAULT nextval('sales_id_seq'),
    sale_date       TIMESTAMPTZ DEFAULT NOW(),
    user_id         INTEGER REFERENCES users(id),
    client_id       INTEGER REFERENCES clients(id),
    subtotal        NUMERIC(10,2) NOT NULL,
    tax             NUMERIC(10,2) NOT NULL,
    total           NUMERIC(10,2) NOT NULL,
    payment_method  VARCHAR(50),
    payment_status  VARCHAR(50) CHECK (payment_status IN ('paid', 'unpaid')),
    currency        VARCHAR(10),
    tenant_id       UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE
);

-- === SALE ITEMS ===
CREATE SEQUENCE IF NOT EXISTS sale_items_id_seq START WITH 1 INCREMENT BY 1;
CREATE TABLE IF NOT EXISTS sale_items (
    id              INTEGER PRIMARY KEY DEFAULT nextval('sale_items_id_seq'),
    sale_id         INTEGER NOT NULL REFERENCES sales(id) ON DELETE CASCADE,
    product_id      INTEGER NOT NULL REFERENCES products(id),
    quantity        INTEGER NOT NULL,
    price_at_sale   NUMERIC(10,2) NOT NULL,
    cost_at_sale    NUMERIC(10,2)
);

-- === INDEXES ===
CREATE INDEX IF NOT EXISTS idx_products_tenant   ON products(tenant_id);
CREATE INDEX IF NOT EXISTS idx_categories_tenant ON categories(tenant_id);
CREATE INDEX IF NOT EXISTS idx_users_tenant      ON users(tenant_id);
CREATE INDEX IF NOT EXISTS idx_clients_tenant    ON clients(tenant_id);
CREATE INDEX IF NOT EXISTS idx_suppliers_tenant  ON suppliers(tenant_id);
CREATE INDEX IF NOT EXISTS idx_sales_tenant      ON sales(tenant_id);
CREATE INDEX IF NOT EXISTS idx_licenses_tenant   ON licenses(tenant_id);
CREATE INDEX IF NOT EXISTS idx_licenses_key      ON licenses(license_key);

-- === SEED: DEFAULT SUPER-ADMIN TENANT ===
INSERT INTO tenants (id, slug, name, email)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'superadmin',
    'RouibiPOS Administration',
    'admin@rouibipos.dz'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO licenses (tenant_id, license_key, plan, status, max_users, max_products, trial_ends_at, expires_at)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'SUPER-ADMIN-MASTER-KEY-0000000000000001',
    'pro',
    'active',
    9999,
    9999999,
    NULL,
    NULL
) ON CONFLICT (license_key) DO NOTHING;

-- === SEED: DEFAULT ADMIN USER (password: admin123) ===
INSERT INTO users (username, password_hash, full_name, role, active, tenant_id)
VALUES (
    'admin',
    '$2a$10$YycB6BKLulIeY8Q7RpGzTuEJrNriO4JXwGtAZ55RnrafVRCFhogc.', -- password: admin123
    'Administrator',
    'admin',
    true,
    '00000000-0000-0000-0000-000000000001'
) ON CONFLICT DO NOTHING;
