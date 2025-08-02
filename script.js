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
        tools: 'Tools',
        hardware: 'Hardware',
        electrical: 'Electrical',
        plumbing: 'Plumbing',
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
        tools: 'أدوات',
        hardware: 'أجهزة',
        electrical: 'كهربائيات',
        plumbing: 'سباكة',
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
        tools: 'Outils',
        hardware: 'Quincaillerie',
        electrical: 'Électrique',
        plumbing: 'Plomberie',
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
        tools: 'Herramientas',
        hardware: 'Ferretería',
        electrical: 'Eléctrico',
        plumbing: 'Fontanería',
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
const users = [];

// Enhanced product data with inventory
const products = [
    // Tools
    { id: 1, name: 'Hammer', price: 15.99, category: 'tools', stock: 30, minStock: 10, barcode: 'HW001' },
    { id: 2, name: 'Screwdriver Set', price: 25.50, category: 'tools', stock: 20, minStock: 5, barcode: 'HW002' },
    { id: 14, name: 'Pliers', price: 10.00, category: 'hardware', stock: 35, minStock: 12, barcode: 'HW003' },
    { id: 15, name: 'Measuring Tape', price: 8.50, category: 'hardware', stock: 45, minStock: 18, barcode: 'HW004' },
    { id: 16, name: 'Level', price: 20.00, category: 'hardware', stock: 28, minStock: 10, barcode: 'HW005' },
    // Electrical
    { id: 17, name: 'Extension Cord', price: 18.00, category: 'electrical', stock: 30, minStock: 10, barcode: 'EL001' },
    { id: 18, name: 'Light Bulb LED', price: 5.00, category: 'electrical', stock: 100, minStock: 40, barcode: 'EL002' },
    { id: 19, name: 'Outlet Cover', price: 2.00, category: 'electrical', stock: 80, minStock: 30, barcode: 'EL003' },
    // Plumbing
    { id: 20, name: 'Pipe Wrench', price: 22.00, category: 'plumbing', stock: 20, minStock: 7, barcode: 'PL001' },
    { id: 21, name: 'Teflon Tape', price: 3.00, category: 'plumbing', stock: 60, minStock: 20, barcode: 'PL002' },
    { id: 22, name: 'Faucet Repair Kit', price: 14.00, category: 'plumbing', stock: 25, minStock: 8, barcode: 'PL003' }
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
document.addEventListener('DOMContentLoaded', function () {
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
    generateCategoryButtons();
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
     
    // Cart actions
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('checkout').addEventListener('click', openCheckout);
    document.getElementById('cancel-checkout').addEventListener('click', closeCheckout);
    document.getElementById('complete-sale').addEventListener('click', completeSale);

    // Payment method buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal when clicking outside
    checkoutModal.addEventListener('click', function (e) {
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
