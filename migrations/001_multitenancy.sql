-- =====================================================
-- RouibiPOS Multitenant Migration
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

-- === ADD tenant_id TO EXISTING TABLES ===
ALTER TABLE products   ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE categories ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE users      ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE clients    ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE suppliers  ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE sales      ADD COLUMN IF NOT EXISTS tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;

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

-- === BACKFILL EXISTING DATA TO SUPERADMIN TENANT ===
UPDATE products   SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;
UPDATE categories SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;
UPDATE users      SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;
UPDATE clients    SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;
UPDATE suppliers  SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;
UPDATE sales      SET tenant_id = '00000000-0000-0000-0000-000000000001' WHERE tenant_id IS NULL;

-- === NOT NULL AFTER BACKFILL ===
ALTER TABLE products   ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE categories ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE users      ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE clients    ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE suppliers  ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE sales      ALTER COLUMN tenant_id SET NOT NULL;

-- === FIX UNIQUE CONSTRAINT FOR USERNAME (per tenant) ===
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_username_key;
ALTER TABLE users ADD CONSTRAINT IF NOT EXISTS users_username_tenant_unique UNIQUE (username, tenant_id);
