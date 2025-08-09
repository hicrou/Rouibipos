-- Drop the table if it already exists to start fresh
-- Drop tables in the correct order to handle foreign key constraints
DROP TABLE IF EXISTS sale_items;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS suppliers;

-- === PRODUCTS ===

-- Create the products table with a structure that matches your data
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    name_fr VARCHAR(255),
    name_es VARCHAR(255),
    price NUMERIC(10, 2) NOT NULL,
    category VARCHAR(100),
    stock INTEGER NOT NULL,
    min_stock INTEGER,
    max_stock INTEGER,
    barcode VARCHAR(255) UNIQUE,
    supplier VARCHAR(255),
    cost NUMERIC(10, 2),
    active BOOLEAN DEFAULT true,
    image VARCHAR(1024),
    expiry_date DATE
);

-- Insert all your product data into the new table
INSERT INTO products (id, name, name_ar, name_fr, name_es, price, category, stock, min_stock, max_stock, barcode, supplier, cost, active, image, expiry_date) VALUES
(1, 'Hammer', 'مطرقة', 'Marteau', 'Martillo', 1250, 'tools', 25, 5, 100, '2001001001', 'Algeria Tools Co', 850, true, 'https://placehold.co/100x100/8B4513/FFF?text=🔨', null),
(2, 'Screwdriver Set', 'مجموعة مفكات', 'Jeu de Tournevis', 'Juego de Destornilladores', 850, 'tools', 40, 10, 150, '2001001002', 'Algeria Tools Co', 580, true, 'https://placehold.co/100x100/4690E7/FFF?text=🪛', null),
(3, 'Wrench Set', 'مجموعة مفاتيح ربط', 'Jeu de Clés', 'Juego de Llaves', 1450, 'tools', 30, 8, 120, '2001001003', 'Algeria Tools Co', 980, true, 'https://placehold.co/100x100/6C757D/FFF?text=🔧', null),
(4, 'Drill Bits Set', 'مجموعة لقم الحفر', 'Jeu de Forets', 'Juego de Brocas', 750, 'tools', 50, 15, 200, '2001001004', 'Algeria Tools Co', 480, true, 'https://placehold.co/100x100/34495E/FFF?text=🪚', null),
(5, 'Measuring Tape', 'شريط قياس', 'Mètre Ruban', 'Cinta Métrica', 450, 'tools', 60, 20, 250, '2001001005', 'Algeria Tools Co', 280, true, 'https://placehold.co/100x100/FFD700/000?text=📏', null),
(6, 'Wood Screws 4x50mm (100pcs)', 'براغي خشب 4×50مم (100 قطعة)', 'Vis à Bois 4x50mm (100pcs)', 'Tornillos para Madera 4x50mm (100pcs)', 320, 'hardware', 200, 50, 1000, '2002001001', 'Algerian Hardware Supply', 180, true, 'https://placehold.co/100x100/A0522D/FFF?text=🔩', null),
(7, 'Metal Bolts M8x40mm (50pcs)', 'براغي معدنية M8×40مم (50 قطعة)', 'Boulons Métal M8x40mm (50pcs)', 'Pernos de Metal M8x40mm (50pcs)', 580, 'hardware', 150, 30, 800, '2002001002', 'Algerian Hardware Supply', 350, true, 'https://placehold.co/100x100/495057/FFF?text=⚙️', null),
(8, 'Nails 3 inch (1kg)', 'مسامير 3 بوصة (1 كيلو)', 'Clous 3 pouces (1kg)', 'Clavos 3 pulgadas (1kg)', 420, 'hardware', 80, 20, 400, '2002001003', 'Algerian Hardware Supply', 250, true, 'https://placehold.co/100x100/8B4513/FFF?text=📌', null),
(9, 'Washers Assorted (200pcs)', 'حلقات معدنية متنوعة (200 قطعة)', 'Rondelles Assorties (200pcs)', 'Arandelas Surtidas (200pcs)', 280, 'hardware', 120, 25, 600, '2002001004', 'Algerian Hardware Supply', 160, true, 'https://placehold.co/100x100/6C757D/FFF?text=⭕', null),
(10, 'Hinges 3 inch (pair)', 'مفصلات 3 بوصة (زوج)', 'Charnières 3 pouces (paire)', 'Bisagras 3 pulgadas (par)', 650, 'hardware', 45, 10, 200, '2002001005', 'Algerian Hardware Supply', 420, true, 'https://placehold.co/100x100/495057/FFF?text=🚪', null),
(23, 'Cement 50kg Bag', 'كيس إسمنت 50 كيلو', 'Sac de Ciment 50kg', 'Bolsa de Cemento 50kg', 850, 'construction', 100, 20, 500, '2003001001', 'Algeria Construction Materials', 650, true, 'https://placehold.co/100x100/6C757D/FFF?text=🏗️', null),
(24, 'Sand 25kg Bag', 'كيس رمل 25 كيلو', 'Sac de Sable 25kg', 'Bolsa de Arena 25kg', 320, 'construction', 150, 30, 800, '2003001002', 'Algeria Construction Materials', 220, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjRBNDYwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🏖️</dGV4dD4KPC9zdmc+', null),
(25, 'Bricks (per piece)', 'طوب (القطعة)', 'Briques (à l''unité)', 'Ladrillos (por pieza)', 45, 'construction', 500, 100, 2000, '2003001003', 'Algeria Construction Materials', 28, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQ0Q1QzVDIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🧱</dGV4dD4KPC9zdmc+', null),
(26, 'Steel Rebar 12mm (6m)', 'حديد تسليح 12مم (6 متر)', 'Fer à Béton 12mm (6m)', 'Varilla de Acero 12mm (6m)', 1850, 'construction', 80, 15, 300, '2003001004', 'Algeria Steel Co', 1420, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNDk1MDU3Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🔗</dGV4dD4KPC9zdmc+', null),
(27, 'Electrical Wire 2.5mm (100m)', 'سلك كهربائي 2.5مم (100 متر)', 'Fil Électrique 2.5mm (100m)', 'Cable Eléctrico 2.5mm (100m)', 2850, 'electrical', 35, 8, 150, '2004001001', 'Algeria Electric Supply', 2100, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+⚡</dGV4dD4KPC9zdmc+', null),
(28, 'Light Switch', 'مفتاح إضاءة', 'Interrupteur', 'Interruptor de Luz', 180, 'electrical', 120, 25, 500, '2004001002', 'Algeria Electric Supply', 110, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+💡</dGV4dD4KPC9zdmc+', null),
(29, 'Power Outlet', 'مقبس كهربائي', 'Prise Électrique', 'Toma de Corriente', 220, 'electrical', 90, 20, 400, '2004001003', 'Algeria Electric Supply', 140, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🔌</dGV4dD4KPC9zdmc+', null),
(30, 'PVC Pipe 32mm (3m)', 'أنبوب PVC 32مم (3 متر)', 'Tuyau PVC 32mm (3m)', 'Tubo PVC 32mm (3m)', 380, 'plumbing', 75, 15, 300, '2005001001', 'Algeria Plumbing Co', 250, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🚰</dGV4dD4KPC9zdmc+', null),
(31, 'Pipe Fittings Set', 'مجموعة وصلات الأنابيب', 'Jeu de Raccords', 'Juego de Accesorios', 650, 'plumbing', 55, 12, 250, '2005001002', 'Algeria Plumbing Co', 420, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNkM3NTdEIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🔧</dGV4dD4KPC9zdmc+', null),
(32, 'Faucet Standard', 'صنبور عادي', 'Robinet Standard', 'Grifo Estándar', 1250, 'plumbing', 25, 5, 100, '2005001003', 'Algeria Plumbing Co', 850, true, 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNEZBNEZGIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🚿</dGV4dD4KPC9zdmc+', null);

-- Reset the sequence for the id column so new products start from the correct number
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));

-- === CATEGORIES ===

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    name_fr VARCHAR(255),
    name_es VARCHAR(255),
    active BOOLEAN DEFAULT true
);

INSERT INTO categories (id, name, name_ar, name_fr, name_es, active) VALUES
(1, 'Food', 'طعام', 'Nourriture', 'Comida', true),
(2, 'Drinks', 'مشروبات', 'Boissons', 'Bebidas', true),
(3, 'Snacks', 'وجبات خفيفة', 'Collations', 'Aperitivos', true),
(4, 'Tools', 'أدوات', 'Outils', 'Herramientas', true),
(5, 'Hardware', 'أجهزة', 'Quincaillerie', 'Ferretería', true),
(6, 'Construction', 'بناء', 'Construction', 'Construcción', true),
(7, 'Electrical', 'كهربائي', 'Électrique', 'Eléctrico', true),
(8, 'Plumbing', 'سباكة', 'Plomberie', 'Fontanería', true);

SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));

-- === USERS ===

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'manager', 'cashier')),
    active BOOLEAN DEFAULT true,
    card_number VARCHAR(100) UNIQUE,
    card_access BOOLEAN DEFAULT false
);

-- Passwords are 'admin123', 'manager123', 'cashier123' hashed with bcrypt
INSERT INTO users (id, username, password_hash, full_name, role, active, card_number, card_access) VALUES
(1, 'admin', '$2a$10$fowG/r6ylmTCYI81m22s5.TjKzLzY1f.qN.pGZc8kX.kYc8kYc8kY', 'Administrator', 'admin', true, '1001', true),
(2, 'manager', '$2a$10$fowG/r6ylmTCYI81m22s5.TjKzLzY1f.qN.pGZc8kX.kYc8kYc8kY', 'Store Manager', 'manager', true, '1002', true),
(3, 'cashier1', '$2a$10$fowG/r6ylmTCYI81m22s5.TjKzLzY1f.qN.pGZc8kX.kYc8kYc8kY', 'Ahmed Ali', 'cashier', true, '1003', true),
(4, 'cashier2', '$2a$10$fowG/r6ylmTCYI81m22s5.TjKzLzY1f.qN.pGZc8kX.kYc8kYc8kY', 'Fatima Hassan', 'cashier', true, '1004', true),
(5, 'cashier3', '$2a$10$fowG/r6ylmTCYI81m22s5.TjKzLzY1f.qN.pGZc8kX.kYc8kYc8kY', 'Omar Benali', 'cashier', true, '1005', false);

SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));

-- === CLIENTS ===

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    address TEXT
);

INSERT INTO clients (id, name, phone, address) VALUES
(1, 'Walk-in Customer', 'N/A', 'N/A'),
(2, 'John Doe', '555-1234', '123 Main St');

SELECT setval('clients_id_seq', (SELECT MAX(id) FROM clients));

-- === SUPPLIERS ===

CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(255),
    address TEXT
);

INSERT INTO suppliers (id, name, contact_person, phone, email, address) VALUES
(1, 'Algeria Tools Co', 'Yacine Bouzid', '021-555-001', 'contact@algeriatools.dz', 'Algiers Industrial Zone'),
(2, 'Algerian Hardware Supply', 'Amina Khelifi', '041-555-002', 'sales@ahsupply.dz', 'Oran Commercial District'),
(3, 'Algeria Construction Materials', 'Karim Belkacem', '031-555-003', 'info@acm.dz', 'Constantine Materials Hub'),
(4, 'Algeria Steel Co', 'Nadia Mansouri', '038-555-004', 'orders@algeriasteel.dz', 'Annaba Steel Complex'),
(5, 'Algeria Electric Supply', 'Samir Haddad', '025-555-005', 'support@aesupply.dz', 'Blida Electronics Zone'),
(6, 'Algeria Plumbing Co', 'Leila Ziani', '036-555-006', 'contact@apc.dz', 'Setif Industrial Park');

SELECT setval('suppliers_id_seq', (SELECT MAX(id) FROM suppliers));

-- === SALES ===

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    sale_date TIMESTAMPTZ DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id),
    client_id INTEGER REFERENCES clients(id),
    subtotal NUMERIC(10, 2) NOT NULL,
    tax NUMERIC(10, 2) NOT NULL,
    total NUMERIC(10, 2) NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) CHECK (payment_status IN ('paid', 'unpaid')),
    currency VARCHAR(10)
);

-- === SALE ITEMS ===

CREATE TABLE sale_items (
    id SERIAL PRIMARY KEY,
    sale_id INTEGER NOT NULL REFERENCES sales(id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price_at_sale NUMERIC(10, 2) NOT NULL,
    cost_at_sale NUMERIC(10, 2)
);
(5, 'Hardware', 'أجهزة', 'Quincaillerie', 'Ferretería', true),
(6, 'Construction', 'بناء', 'Construction', 'Construcción', true),
(7, 'Electrical', 'كهربائي', 'Électrique', '