// ===== CONFIGURATION & DATA =====

// Multi-language support
const languages = {
    en: {
        welcome: 'Welcome to My POS System',
        categories: 'Categories',
        products: 'Products',
        currentOrder: 'Current Order',
        subtotal: 'Subtotal',
        tax: 'Tax',
        total: 'Total',
        clearCart: 'Clear Cart',
        checkout: 'Checkout',
        emptyCart: 'No items in cart',
        allItems: 'All Items',
        food: 'Food',
        drinks: 'Drinks',
        snacks: 'Snacks',
        cashier: 'Cashier',
        admin: 'Admin',
        manager: 'Manager',
        login: 'Login',
        logout: 'Logout',
        username: 'Username',
        password: 'Password',
        lowStock: 'Low Stock Alert',
        printReceipt: 'Print Receipt',
        reports: 'Reports',
        inventory: 'Inventory',
        settings: 'Settings'
    },
    ar: {
        welcome: 'مرحباً بنظام نقاط البيع',
        categories: 'الفئات',
        products: 'المنتجات',
        currentOrder: 'الطلب الحالي',
        subtotal: 'المجموع الفرعي',
        tax: 'الضريبة',
        total: 'المجموع',
        clearCart: 'مسح السلة',
        checkout: 'الدفع',
        emptyCart: 'لا توجد عناصر في السلة',
        allItems: 'جميع العناصر',
        food: 'طعام',
        drinks: 'مشروبات',
        snacks: 'وجبات خفيفة',
        cashier: 'أمين الصندوق',
        admin: 'مدير',
        manager: 'مدير',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        lowStock: 'تنبيه مخزون منخفض',
        printReceipt: 'طباعة الإيصال',
        reports: 'التقارير',
        inventory: 'المخزون',
        settings: 'الإعدادات',
        currency: 'العملة',
        language: 'اللغة',
        dinar: 'دينار جزائري'
    },
    fr: {
        welcome: 'Bienvenue dans Mon Système POS',
        categories: 'Catégories',
        products: 'Produits',
        currentOrder: 'Commande Actuelle',
        subtotal: 'Sous-total',
        tax: 'Taxe',
        total: 'Total',
        clearCart: 'Vider le Panier',
        checkout: 'Paiement',
        emptyCart: 'Aucun article dans le panier',
        allItems: 'Tous les Articles',
        food: 'Nourriture',
        drinks: 'Boissons',
        snacks: 'Collations',
        cashier: 'Caissier',
        admin: 'Administrateur',
        manager: 'Gestionnaire',
        login: 'Connexion',
        logout: 'Déconnexion',
        username: 'Nom d\'utilisateur',
        password: 'Mot de passe',
        lowStock: 'Alerte Stock Faible',
        printReceipt: 'Imprimer Reçu',
        reports: 'Rapports',
        inventory: 'Inventaire',
        settings: 'Paramètres'
    },
    es: {
        welcome: 'Bienvenido a Mi Sistema POS',
        categories: 'Categorías',
        products: 'Productos',
        currentOrder: 'Pedido Actual',
        subtotal: 'Subtotal',
        tax: 'Impuesto',
        total: 'Total',
        clearCart: 'Limpiar Carrito',
        checkout: 'Pagar',
        emptyCart: 'No hay artículos en el carrito',
        allItems: 'Todos los Artículos',
        food: 'Comida',
        drinks: 'Bebidas',
        snacks: 'Aperitivos',
        cashier: 'Cajero',
        admin: 'Administrador',
        manager: 'Gerente',
        login: 'Iniciar Sesión',
        logout: 'Cerrar Sesión',
        username: 'Usuario',
        password: 'Contraseña',
        lowStock: 'Alerta Stock Bajo',
        printReceipt: 'Imprimir Recibo',
        reports: 'Informes',
        inventory: 'Inventario',
        settings: 'Configuración'
    }
};

// Multi-currency support
const currencies = {
    USD: { symbol: '$', rate: 1.0, name: 'US Dollar' },
    EUR: { symbol: '€', rate: 0.85, name: 'Euro' },
    AED: { symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' },
    SAR: { symbol: 'ر.س', rate: 3.75, name: 'Saudi Riyal' },
    DZD: { symbol: 'د.ج', rate: 134.5, name: 'Algerian Dinar' },
    GBP: { symbol: '£', rate: 0.73, name: 'British Pound' }
};

// User roles and permissions
const userRoles = {
    admin: {
        name: 'Admin',
        permissions: ['all']
    },
    manager: {
        name: 'Manager',
        permissions: ['sales', 'inventory', 'reports', 'users']
    },
    cashier: {
        name: 'Cashier',
        permissions: ['sales']
    }
};

// Sample users (in real app, this would be in a database)
const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
    { id: 2, username: 'manager', password: 'manager123', role: 'manager', name: 'Store Manager' },
    { id: 3, username: 'cashier1', password: 'cashier123', role: 'cashier', name: 'John Doe' },
    { id: 4, username: 'cashier2', password: 'cashier123', role: 'cashier', name: 'Jane Smith' }
];

// Enhanced product data with inventory
const products = [
    { id: 1, name: 'Hamburger', price: 8.99, category: 'food', stock: 25, minStock: 5, barcode: '1234567890123' },
    { id: 2, name: 'Cheeseburger', price: 9.99, category: 'food', stock: 20, minStock: 5, barcode: '1234567890124' },
    { id: 3, name: 'French Fries', price: 3.99, category: 'food', stock: 50, minStock: 10, barcode: '1234567890125' },
    { id: 4, name: 'Chicken Wings', price: 12.99, category: 'food', stock: 15, minStock: 5, barcode: '1234567890126' },
    { id: 5, name: 'Caesar Salad', price: 7.99, category: 'food', stock: 12, minStock: 5, barcode: '1234567890127' },
    { id: 6, name: 'Coca Cola', price: 2.99, category: 'drinks', stock: 100, minStock: 20, barcode: '1234567890128' },
    { id: 7, name: 'Orange Juice', price: 3.49, category: 'drinks', stock: 30, minStock: 10, barcode: '1234567890129' },
    { id: 8, name: 'Coffee', price: 2.49, category: 'drinks', stock: 80, minStock: 15, barcode: '1234567890130' },
    { id: 9, name: 'Water Bottle', price: 1.99, category: 'drinks', stock: 200, minStock: 50, barcode: '1234567890131' },
    { id: 10, name: 'Potato Chips', price: 2.99, category: 'snacks', stock: 3, minStock: 10, barcode: '1234567890132' }, // Low stock
    { id: 11, name: 'Chocolate Bar', price: 1.99, category: 'snacks', stock: 45, minStock: 15, barcode: '1234567890133' },
    { id: 12, name: 'Cookies', price: 3.49, category: 'snacks', stock: 2, minStock: 8, barcode: '1234567890134' } // Low stock
];

// ===== GLOBAL STATE =====
let cart = [];
let currentCategory = 'all';
let currentUser = null;
let currentLanguage = 'en';
let currentCurrency = 'USD';
let salesHistory = [];
let isLoggedIn = false;

// System settings
const settings = {
    taxRate: 0.08, // 8% tax
    companyName: 'My POS System',
    companyAddress: '123 Business Street, City, Country',
    companyPhone: '+1 (555) 123-4567',
    receiptFooter: 'Thank you for your business!',
    lowStockThreshold: 10
};

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutModal = document.getElementById('checkout-modal');
const currentTimeEl = document.getElementById('current-time');

// ===== SYSTEM INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeSystem();
});

function initializeSystem() {
    // Check if user is logged in
    checkLoginStatus();

    if (!isLoggedIn) {
        showLoginScreen();
        return;
    }

    // Initialize main system
    loadSettings();
    updateLanguage();
    displayProducts();
    updateCartDisplay();
    updateTime();
    checkLowStock();

    // Set up intervals
    setInterval(updateTime, 1000);
    setInterval(checkLowStock, 60000); // Check every minute

    // Event listeners
    setupEventListeners();

    console.log('POS System initialized successfully');
}

function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            displayProducts();
        });
    });
    
    // Cart actions
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('checkout').addEventListener('click', openCheckout);
    document.getElementById('cancel-checkout').addEventListener('click', closeCheckout);
    document.getElementById('complete-sale').addEventListener('click', completeSale);
    
    // Payment method buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close modal when clicking outside
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckout();
        }
    });
}

function displayProducts() {
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toFixed(2)}</div>
        `;
        
        productCard.addEventListener('click', () => addToCart(product));
        productsGrid.appendChild(productCard);
    });
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">No items in cart</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
    
    updateTotals();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
    if (cart.length > 0 && confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        updateCartDisplay();
    }
}

function openCheckout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    checkoutModal.style.display = 'block';
}

function closeCheckout() {
    checkoutModal.style.display = 'none';
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
}

function completeSale() {
    const selectedPayment = document.querySelector('.payment-btn.active');
    
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }
    
    const paymentMethod = selectedPayment.dataset.method;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.08;
    
    // Simulate sale completion
    alert(`Sale completed!\nPayment Method: ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}\nTotal: $${total.toFixed(2)}\nThank you for your purchase!`);
    
    // Clear cart and close modal
    cart = [];
    updateCartDisplay();
    closeCheckout();
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    currentTimeEl.textContent = `${dateString} ${timeString}`;
}

// Make functions globally available
window.updateQuantity = updateQuantity;
