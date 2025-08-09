// ===== PROFESSIONAL POS SYSTEM =====
// Multi-language, Multi-currency, Multi-user with all professional features

// ===== CONFIGURATION & DATA =====

// Multi-language support (English, Arabic, French, Spanish)
const languages = {
    en: {
        // Login & Basic UI
        loginWelcome: 'Welcome to MyPOS',
        login: 'Login',
        logout: 'Logout',
        username: 'Username',
        password: 'Password',
        sales: 'Sales',
        inventory: 'Inventory',
        reports: 'Reports',
        users: 'Users',
        settings: 'Settings',
        dashboard: 'Dashboard',
        
        // Roles
        cashier: 'Cashier',
        admin: 'Admin',
        manager: 'Manager',

        // Common Actions
        add: 'Add',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        backup: 'Backup',
        restore: 'Restore',
        print: 'Print',
        activate: 'Activate',
        deactivate: 'Deactivate',

        // POS Interface
        products: 'Products',
        product: 'Product',
        categories: 'Categories',
        currentOrder: 'Current Order',
        subtotal: 'Subtotal',
        tax: 'Tax',
        total: 'Total',
        clearCart: 'Clear Cart',
        checkout: 'Checkout',
        emptyCart: 'Cart is empty',
        allItems: 'All Items',
        scanBarcode: 'Scan Barcode',
        printReceipt: 'Print Receipt',
        printInvoice: 'Print Invoice',
        
        // Product & Inventory
        zakat: 'Zakat', // From previous diff
        zakatCalculator: 'Zakat Calculator', // From previous diff
        zakatDescription: 'This tool helps you calculate the Zakat due on your business assets for one lunar year.',
        nisabHeader: 'Nisab (Threshold)',
        goldPriceLabel: 'Current Gold Price (per gram)',
        fetchPriceBtn: 'Fetch Latest Price',
        nisabLabel: 'Nisab Threshold (based on 85g of gold)',
        nisabHelper: 'This is calculated from the gold price but can be overridden.',
        assetsHeader: 'Assets (Zakat-able)',
        inventoryLabel: 'Inventory Value (at cost)',
        inventoryHelper: 'Auto-calculated from product costs. You can adjust this value.',
        cashLabel: 'Cash & Bank Balance',
        cashPlaceholder: 'Enter total cash and bank balance',
        receivablesLabel: 'Accounts Receivable (Good-faith credits owed to you)',
        receivablesHelper: 'Auto-calculated from unpaid client sales. Adjust for any bad debts.',
        liabilitiesHeader: 'Liabilities (Deductible)',
        payablesLabel: 'Accounts Payable (Debits you)',
        addProduct: 'Add Product',
        editProduct: 'Edit Product',
        deleteProduct: 'Delete Product',
        productName: 'Product Name',
        productImage: 'Product Image',
        stock: 'Stock',
        price: 'Price',
        cost: 'Cost',
        barcode: 'Barcode',
        category: 'Category',
        supplier: 'Supplier',
        expiryDate: 'Expiry Date',
        minStock: 'Min Stock',
        adjustStock: 'Adjust Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        inStock: 'In Stock',
        goodStock: 'Good Stock',
        expired: 'Expired',
        nearExpiry: 'Near Expiry',
        
        // Reports & Dashboard
        todaysSales: 'Today\'s Sales',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        totalProducts: 'Total Products',
        transactions: 'Transactions',
        averageTransaction: 'Average Transaction',
        topSellingProducts: 'Top Selling Products',
        cashierPerformance: 'Cashier Performance',
        recentSales: 'Recent Sales',
        dailyReport: 'Daily Report',
        weeklyReport: 'Weekly Report',
        monthlyReport: 'Monthly Report',
        salesReport: 'Sales Report',
        inventoryReport: 'Inventory Report',
        profitReport: 'Profit Report',
        taxReport: 'Tax Report',
        lowStockReport: 'Low Stock Report',
        expiredItems: 'Expired Items',
        printLowStock: 'Print Low Stock',
        printExpired: 'Print Expired',
        
        // Settings & Data
        companySettings: 'Company Settings',
        companyName: 'Company Name',
        companyLogo: 'Company Logo',
        uploadLogo: 'Upload Logo',
        removeLogo: 'Remove Logo',
        logoSettings: 'Logo Settings',
        address: 'Address',
        phone: 'Phone',
        receiptFooter: 'Receipt Footer',
        saveSettings: 'Save Settings',
        resetSettings: 'Reset to Defaults',
        exportData: 'Export Data',
        importData: 'Import Data',
        createBackup: 'Create Backup',
        clearAllData: 'Clear All Data',
        openZakatCalculator: 'Open Zakat Calculator',

        // Clients
        clients: 'Clients',
        addClient: 'Add Client',
        editClient: 'Edit Client',
        clientName: 'Client Name',
        clientPhone: 'Client Phone',
        clientAddress: 'Client Address',
        selectClient: 'Select Client (Optional)',
        noClient: 'No Client',
        clientDebt: 'Client Debt',
        viewDebts: 'View Debts',

        // Payment
        paymentMethod: 'Payment Method',
        paymentStatus: 'Payment Status',
        payLater: 'Pay Later (Unpaid)',
        completePaidSale: 'Complete (Paid)',
        unpaid: 'Unpaid',
        paid: 'Paid',
        markAsPaid: 'Mark as Paid',

        // Suppliers
        suppliers: 'Suppliers',
        addSupplier: 'Add Supplier',
        editSupplier: 'Edit Supplier',
        contactPerson: 'Contact Person',
        purchases: 'Purchases',
        recordPurchase: 'Record Purchase',
        viewPurchases: 'View Purchases',
        unpaidPurchases: 'Unpaid Purchases',
        
        
        // Statements
        statementOfAccount: 'Statement of Account',
        outstandingBalance: 'Outstanding Balance',
        clientStatement: 'Client Statement',
        supplierStatement: 'Supplier Statement',
        
        // Language & Currency
        currency: 'Currency',
        language: 'Language',

        // Misc
        invoice: 'Invoice',
        receipt: 'Receipt',
        uploadImage: 'Upload Image',
        changeImage: 'Change Image',
        removeImage: 'Remove Image',
        profit: 'Profit',
        margin: 'Margin',
        customerReceipt: 'Customer Receipt',
        businessInvoice: 'Business Invoice',
        companyInfo: 'Company Information',
        customerInfo: 'Customer Information',
        itemsNeedRestocking: 'items need restocking',
        activeProducts: 'active products',
        printedOn: 'Printed on',
        noLowStockItems: 'No low stock items found',
        noExpiredItems: 'No expired or near-expiry items found',
        expiryStatus: 'Expiry Status',
        daysUntilExpiry: 'Days Until Expiry',
        daysOverdue: 'Days Overdue',
        scanBarcode: 'Scan Barcode',
        enterBarcode: 'Enter Barcode',
        useCamera: 'Use Camera',
        manualEntry: 'Manual Entry',
        connectScanner: 'Connect Scanner',
        pointCameraAtBarcode: 'Point camera at barcode',
        productAdded: 'Product Added',
        productNotFound: 'Product Not Found',
        scannerConnected: 'Scanner Connected',
        scannerDisconnected: 'Scanner Disconnected',
        cameraAccessError: 'Camera access denied or not available',
        recommendedSize: 'Recommended size',
        invalidFileType: 'Please select a valid image file (PNG, JPG, GIF)',
        fileTooLarge: 'File size must be less than 2MB',
        logoUpdated: 'Logo updated successfully!',
        confirmRemoveLogo: 'Are you sure you want to remove the company logo?',
        logoRemoved: 'Logo removed successfully!',
        addUser: 'Add User',
        editUser: 'Edit User',
        exportUsers: 'Export Users',
        inventoryExported: 'Inventory exported successfully!',
        reportsExported: 'Reports exported successfully!',
        usersExported: 'Users exported successfully!',
        confirmImportData: 'This will replace current data. Are you sure?',
        dataImported: 'Data imported successfully!',
        importError: 'Import error',
        confirmClearAllData: 'WARNING: This will delete all products and sales data!',
        confirmClearAllDataFinal: 'FINAL WARNING: This action cannot be undone!',
        allDataCleared: 'All data cleared successfully!',
        active: 'Active',
        inactive: 'Inactive',
        status: 'Status',
        allStockLevels: 'All Stock Levels',
        lowStockOnly: 'Low Stock Only',
        outOfStockOnly: 'Out of Stock Only',
        confirmResetSettings: 'Are you sure you want to reset all settings to defaults?',
        settingsReset: 'Settings reset to defaults successfully!',
        dataExported: 'Data exported successfully!',
        selectPaymentMethod: 'Please select a payment method',
        insufficientStock: 'Insufficient stock',
        available: 'Available',
        saleCompleted: 'Sale completed',
        cardNumber: 'Card Number',
        cardAccess: 'Card Access',
        categories: 'Categories',
        categoryManagement: 'Category Management',
        editCategory: 'Edit Category',
        categoryName: 'Category Name',
        charts: 'Charts',
        salesChart: 'Sales Chart',
        productChart: 'Product Chart',
        dailySales: 'Daily Sales',
        weeklySales: 'Weekly Sales',
        monthlySales: 'Monthly Sales',
        category: 'Category',
        addedSuccessfully: 'added successfully',
        updatedSuccessfully: 'updated successfully',
        successfully: 'successfully',
        activated: 'activated',
        deactivated: 'deactivated',
        cannotDeleteCategory: 'Cannot delete category',
        productsUsingCategory: 'products using this category',
        confirmDeleteCategory: 'Are you sure you want to delete category',
        deletedSuccessfully: 'deleted successfully',
        categoriesExported: 'Categories exported successfully',
        productsSold: 'Products Sold',
        tools: 'Tools',
        hardware: 'Hardware',
        construction: 'Construction',
        electrical: 'Electrical',
        plumbing: 'Plumbing',
        accessDenied: 'Access Denied',
        noPermissionCategories: 'You don\'t have permission to manage categories.',
        topSellingProducts: 'Top Selling Products',
        minStock: 'Min Stock',
        supplier: 'Supplier',
        adjustStock: 'Adjust Stock',
        id: 'ID',
        notAvailable: 'N/A',
        report: 'Report',
        fullName: 'Full Name',
        newPassword: 'New Password (leave blank to keep current)',
        englishName: 'English Name',
        arabicName: 'Arabic Name',
        frenchName: 'French Name',
        spanishName: 'Spanish Name',
        clients: 'Clients',
        addClient: 'Add Client',
        editClient: 'Edit Client',
        clientName: 'Client Name',
        clientPhone: 'Client Phone',
        clientAddress: 'Client Address',
        selectClient: 'Select Client (Optional)',
        noClient: 'No Client',
        payLater: 'Pay Later (Unpaid)',
        completePaidSale: 'Complete (Paid)',
        unpaid: 'Unpaid',
        paid: 'Paid',
        paymentStatus: 'Payment Status',
        clientDebt: 'Client Debt',
        viewDebts: 'View Debts',
        markAsPaid: 'Mark as Paid',
        suppliers: 'Suppliers',
        addSupplier: 'Add Supplier',
        editSupplier: 'Edit Supplier',
        contactPerson: 'Contact Person',
        email: 'Email',
        purchases: 'Purchases',
        recordPurchase: 'Record Purchase',
        viewPurchases: 'View Purchases',
        unpaidPurchases: 'Unpaid Purchases'
    },
    ar: {
        // Login & Basic UI
        loginWelcome: 'مرحباً بـ MyPOS',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        sales: 'المبيعات',
        inventory: 'المخزون',
        reports: 'التقارير',
        users: 'المستخدمون',
        settings: 'الإعدادات',
        dashboard: 'لوحة التحكم',

        // Roles
        cashier: 'أمين الصندوق',
        admin: 'مدير النظام',
        manager: 'مدير',

        // Common Actions
        add: 'إضافة',
        edit: 'تعديل',
        delete: 'حذف',
        save: 'حفظ',
        cancel: 'إلغاء',
        search: 'بحث',
        filter: 'تصفية',
        export: 'تصدير',
        import: 'استيراد',
        backup: 'نسخ احتياطي',
        restore: 'استعادة',
        print: 'طباعة',
        activate: 'تفعيل',
        deactivate: 'إلغاء التفعيل',

        // POS Interface
        products: 'المنتجات',
        product: 'المنتج',
        categories: 'الفئات',
        currentOrder: 'الطلب الحالي',
        subtotal: 'المجموع الفرعي',
        tax: 'الضريبة',
        total: 'المجموع',
        clearCart: 'مسح السلة',
        checkout: 'الدفع',
        emptyCart: 'السلة فارغة',
        allItems: 'جميع العناصر',
        scanBarcode: 'مسح الباركود',
        printReceipt: 'طباعة الإيصال',
        printInvoice: 'طباعة فاتورة',

        // Product & Inventory
        addProduct: 'إضافة منتج',
        editProduct: 'تعديل منتج',
        deleteProduct: 'حذف منتج',
        productName: 'اسم المنتج',
        productImage: 'صورة المنتج',
        stock: 'المخزون',
        price: 'السعر',
        cost: 'التكلفة',
        barcode: 'الباركود',
        category: 'الفئة',
        supplier: 'المورد',
        expiryDate: 'تاريخ انتهاء الصلاحية',
        minStock: 'الحد الأدنى للمخزون',
        adjustStock: 'تعديل المخزون',
        lowStock: 'تنبيه مخزون منخفض',
        outOfStock: 'نفد من المخزون',
        inStock: 'متوفر في المخزون',
        goodStock: 'مخزون جيد',
        expired: 'منتهي الصلاحية',
        nearExpiry: 'قريب من انتهاء الصلاحية',

        // Reports & Dashboard
        todaysSales: 'مبيعات اليوم',
        thisWeek: 'هذا الأسبوع',
        thisMonth: 'هذا الشهر',
        totalProducts: 'إجمالي المنتجات',
        transactions: 'المعاملات',
        averageTransaction: 'متوسط المعاملة',
        topSellingProducts: 'المنتجات الأكثر مبيعاً',
        cashierPerformance: 'أداء أمناء الصندوق',
        recentSales: 'المبيعات الأخيرة',
        dailyReport: 'التقرير اليومي',
        weeklyReport: 'التقرير الأسبوعي',
        monthlyReport: 'التقرير الشهري',
        salesReport: 'تقرير المبيعات',
        inventoryReport: 'تقرير المخزون',
        profitReport: 'تقرير الأرباح',
        taxReport: 'تقرير الضرائب',
        lowStockReport: 'تقرير المخزون المنخفض',
        expiredItems: 'المواد المنتهية الصلاحية',
        printLowStock: 'طباعة المخزون المنخفض',
        printExpired: 'طباعة المنتهية الصلاحية',

        // Settings & Data
        companySettings: 'إعدادات الشركة',
        companyName: 'اسم الشركة',
        companyLogo: 'شعار الشركة',
        uploadLogo: 'رفع شعار',
        removeLogo: 'إزالة الشعار',
        logoSettings: 'إعدادات الشعار',
        address: 'العنوان',
        phone: 'الهاتف',
        receiptFooter: 'تذييل الإيصال',
        saveSettings: 'حفظ الإعدادات',
        resetSettings: 'إعادة تعيين للافتراضي',
        exportData: 'تصدير البيانات',
        importData: 'استيراد البيانات',
        createBackup: 'إنشاء نسخة احتياطية',
        clearAllData: 'مسح جميع البيانات',
        openZakatCalculator: 'فتح حاسبة الزكاة',

        // Clients
        clients: 'العملاء',
        addClient: 'إضافة عميل',
        editClient: 'تعديل عميل',
        clientName: 'اسم العميل',
        clientPhone: 'هاتف العميل',
        clientAddress: 'عنوان العميل',
        selectClient: 'اختر عميل (اختياري)',
        noClient: 'بدون عميل',
        clientDebt: 'ديون العميل',
        viewDebts: 'عرض الديون',

        // Payment
        paymentMethod: 'طريقة الدفع',
        paymentStatus: 'حالة الدفع',
        payLater: 'الدفع لاحقاً (غير مدفوع)',
        completePaidSale: 'إتمام (مدفوع)',
        unpaid: 'غير مدفوع',
        paid: 'مدفوع',
        markAsPaid: 'تحديد كمدفوع',

        // Suppliers
        suppliers: 'الموردون',
        addSupplier: 'إضافة مورد',
        editSupplier: 'تعديل مورد',
        contactPerson: 'مسؤول الاتصال',
        purchases: 'المشتريات',
        recordPurchase: 'تسجيل شراء',
        viewPurchases: 'عرض المشتريات',
        unpaidPurchases: 'مشتريات غير مدفوعة',

        // Statements
        statementOfAccount: 'كشف حساب',
        outstandingBalance: 'الرصيد المستحق',
        clientStatement: 'كشف حساب العميل',
        supplierStatement: 'كشف حساب المورد',

        // Language & Currency
        currency: 'العملة',
        language: 'اللغة',

        // Misc
        invoice: 'فاتورة',
        receipt: 'إيصال',
        uploadImage: 'رفع صورة',
        changeImage: 'تغيير الصورة',
        removeImage: 'إزالة الصورة',
        profit: 'الربح',
        margin: 'هامش الربح',
        customerReceipt: 'إيصال العميل',
        businessInvoice: 'فاتورة تجارية',
        companyInfo: 'معلومات الشركة',
        customerInfo: 'معلومات العميل',
        itemsNeedRestocking: 'عناصر تحتاج إعادة تخزين',
        activeProducts: 'منتجات نشطة',
        printedOn: 'طُبع في',
        noLowStockItems: 'لا توجد عناصر مخزون منخفض',
        noExpiredItems: 'لا توجد عناصر منتهية الصلاحية أو قريبة من انتهاء الصلاحية',
        expiryStatus: 'حالة انتهاء الصلاحية',
        daysUntilExpiry: 'أيام حتى انتهاء الصلاحية',
        daysOverdue: 'أيام متأخرة',
        enterBarcode: 'أدخل الباركود',
        useCamera: 'استخدم الكاميرا',
        manualEntry: 'إدخال يدوي',
        connectScanner: 'ربط الماسح',
        pointCameraAtBarcode: 'وجه الكاميرا نحو الباركود',
        productAdded: 'تم إضافة المنتج',
        productNotFound: 'المنتج غير موجود',
        scannerConnected: 'الماسح متصل',
        scannerDisconnected: 'الماسح غير متصل',
        cameraAccessError: 'تم رفض الوصول للكاميرا أو غير متاحة',
        totalSales: 'إجمالي المبيعات',
        totalTransactions: 'إجمالي المعاملات',
        paymentMethod: 'طريقة الدفع',
        companyLogo: 'شعار الشركة',
        uploadLogo: 'رفع شعار',
        removeLogo: 'إزالة الشعار',
        companySettings: 'إعدادات الشركة',
        logoSettings: 'إعدادات الشعار',
        addProduct: 'إضافة منتج',
        editProduct: 'تعديل المنتج',
        allItems: 'جميع العناصر',
        emptyCart: 'السلة فارغة',
        address: 'العنوان',
        phone: 'الهاتف',
        receiptFooter: 'تذييل الإيصال',
        recommendedSize: 'الحجم المُوصى به',
        invalidFileType: 'يرجى اختيار ملف صورة صالح (PNG, JPG, GIF)',
        fileTooLarge: 'يجب أن يكون حجم الملف أقل من 2 ميجابايت',
        logoUpdated: 'تم تحديث الشعار بنجاح!',
        confirmRemoveLogo: 'هل أنت متأكد من أنك تريد إزالة شعار الشركة؟',
        logoRemoved: 'تم حذف الشعار بنجاح!',
        addUser: 'إضافة مستخدم',
        exportUsers: 'تصدير المستخدمين',
        saveSettings: 'حفظ الإعدادات',
        resetSettings: 'إعادة تعيين للافتراضي',
        exportData: 'تصدير البيانات',
        importData: 'استيراد البيانات',
        createBackup: 'إنشاء نسخة احتياطية',
        clearAllData: 'مسح جميع البيانات',
        lowStockReport: 'تقرير المخزون المنخفض',
        inventoryExported: 'تم تصدير المخزون بنجاح!',
        reportsExported: 'تم تصدير التقارير بنجاح!',
        usersExported: 'تم تصدير المستخدمين بنجاح!',
        accessDenied: 'تم رفض الوصول',
        confirmResetSettings: 'هل أنت متأكد من أنك تريد إعادة تعيين جميع الإعدادات للافتراضي؟',
        settingsReset: 'تم إعادة تعيين الإعدادات للافتراضي بنجاح!',
        dataExported: 'تم تصدير البيانات بنجاح!',
        confirmImportData: 'سيؤدي هذا إلى استبدال البيانات الحالية. هل أنت متأكد؟',
        dataImported: 'تم استيراد البيانات بنجاح!',
        importError: 'خطأ في الاستيراد',
        confirmClearAllData: 'تحذير: سيؤدي هذا إلى حذف جميع المنتجات وبيانات المبيعات!',
        confirmClearAllDataFinal: 'تحذير أخير: لا يمكن التراجع عن هذا الإجراء!',
        allDataCleared: 'تم مسح جميع البيانات بنجاح!',
        username: 'اسم المستخدم',
        active: 'نشط',
        inactive: 'غير نشط',
        status: 'الحالة',
        allStockLevels: 'جميع مستويات المخزون',
        lowStockOnly: 'المخزون المنخفض فقط',
        outOfStockOnly: 'نفد من المخزون فقط',
        search: 'بحث',
        selectPaymentMethod: 'يرجى اختيار طريقة الدفع',
        insufficientStock: 'مخزون غير كافي',
        available: 'متوفر',
        saleCompleted: 'تمت عملية البيع',
        cardNumber: 'رقم البطاقة',
        cardAccess: 'الوصول بالبطاقة',
        categories: 'الفئات',
        categoryManagement: 'إدارة الفئات',
        addCategory: 'إضافة فئة',
        editCategory: 'تعديل الفئة',
        categoryName: 'اسم الفئة',
        charts: 'الرسوم البيانية',
        salesChart: 'رسم بياني للمبيعات',
        productChart: 'رسم بياني للمنتجات',
        dailySales: 'المبيعات اليومية',
        weeklySales: 'المبيعات الأسبوعية',
        monthlySales: 'المبيعات الشهرية',
        category: 'الفئة',
        addedSuccessfully: 'تمت الإضافة بنجاح',
        updatedSuccessfully: 'تم التحديث بنجاح',
        successfully: 'بنجاح',
        activated: 'تم التفعيل',
        deactivated: 'تم إلغاء التفعيل',
        cannotDeleteCategory: 'لا يمكن حذف الفئة',
        productsUsingCategory: 'منتجات تستخدم هذه الفئة',
        confirmDeleteCategory: 'هل أنت متأكد من أنك تريد حذف الفئة',
        deletedSuccessfully: 'تم الحذف بنجاح',
        categoriesExported: 'تم تصدير الفئات بنجاح',
        productsSold: 'المنتجات المباعة',
        tools: 'أدوات',
        hardware: 'أجهزة',
        construction: 'بناء',
        electrical: 'كهربائي',
        plumbing: 'سباكة',
        accessDenied: 'تم رفض الوصول',
        noPermissionCategories: 'ليس لديك إذن لإدارة الفئات.',
        topSellingProducts: 'المنتجات الأكثر مبيعاً',
        minStock: 'الحد الأدنى للمخزون',
        supplier: 'المورد',
        adjustStock: 'تعديل المخزون',
        id: 'المعرف',
        notAvailable: 'غير متوفر',
        report: 'تقرير',
        fullName: 'الاسم الكامل',
        newPassword: 'كلمة مرور جديدة (اتركها فارغة للاحتفاظ بالحالية)',
        englishName: 'الاسم الإنجليزي',
        arabicName: 'الاسم العربي',
        frenchName: 'الاسم الفرنسي',
        spanishName: 'الاسم الإسباني',
        clients: 'العملاء',
        addClient: 'إضافة عميل',
        editClient: 'تعديل عميل',
        clientName: 'اسم العميل',
        clientPhone: 'هاتف العميل',
        clientAddress: 'عنوان العميل',
        selectClient: 'اختر عميل (اختياري)',
        noClient: 'بدون عميل',
        payLater: 'الدفع لاحقاً (غير مدفوع)',
        completePaidSale: 'إتمام (مدفوع)',
        unpaid: 'غير مدفوع',
        paid: 'مدفوع',
        paymentStatus: 'حالة الدفع',
        clientDebt: 'ديون العميل',
        viewDebts: 'عرض الديون',
        markAsPaid: 'تحديد كمدفوع',
        suppliers: 'الموردون',
        addSupplier: 'إضافة مورد',
        editSupplier: 'تعديل مورد',
        contactPerson: 'مسؤول الاتصال',
        email: 'البريد الإلكتروني',
        purchases: 'المشتريات',
        recordPurchase: 'تسجيل شراء',
        viewPurchases: 'عرض المشتريات',
        unpaidPurchases: 'مشتريات غير مدفوعة',

        // Statements
        statementOfAccount: 'كشف حساب',
        outstandingBalance: 'الرصيد المستحق',
        clientStatement: 'كشف حساب العميل',
        supplierStatement: 'كشف حساب المورد',
    },
    fr: {
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
        settings: 'Paramètres',
        currency: 'Devise',
        language: 'Langue',
        sales: 'Ventes',
        dashboard: 'Tableau de Bord',
        users: 'Utilisateurs',
        addProduct: 'Ajouter Produit',
        editProduct: 'Modifier Produit',
        deleteProduct: 'Supprimer Produit',
        stock: 'Stock',
        price: 'Prix',
        barcode: 'Code-barres',
        category: 'Catégorie',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        add: 'Ajouter',
        search: 'Rechercher',
        filter: 'Filtrer',
        export: 'Exporter',
        import: 'Importer',
        backup: 'Sauvegarde',
        restore: 'Restaurer',
        invoice: 'Facture',
        receipt: 'Reçu',
        printInvoice: 'Imprimer Facture',
        lowStockReport: 'Rapport Stock Faible',
        expiredItems: 'Articles Expirés',
        printLowStock: 'Imprimer Stock Faible',
        printExpired: 'Imprimer Expirés',
        productImage: 'Image Produit',
        uploadImage: 'Télécharger Image',
        changeImage: 'Changer Image',
        removeImage: 'Supprimer Image',
        expiryDate: 'Date d\'Expiration',
        expired: 'Expiré',
        nearExpiry: 'Proche Expiration',
        supplier: 'Fournisseur',
        cost: 'Coût',
        profit: 'Profit',
        margin: 'Marge',
        todaysSales: 'Ventes d\'Aujourd\'hui',
        thisWeek: 'Cette Semaine',
        thisMonth: 'Ce Mois',
        totalProducts: 'Total Produits',
        transactions: 'Transactions',
        averageTransaction: 'Transaction Moyenne',
        topSellingProducts: 'Produits les Plus Vendus',
        cashierPerformance: 'Performance Caissiers',
        recentSales: 'Ventes Récentes',
        dailyReport: 'Rapport Quotidien',
        weeklyReport: 'Rapport Hebdomadaire',
        monthlyReport: 'Rapport Mensuel',
        salesReport: 'Rapport des Ventes',
        inventoryReport: 'Rapport d\'Inventaire',
        profitReport: 'Rapport de Profit',
        taxReport: 'Rapport de Taxes',
        customerReceipt: 'Reçu Client',
        businessInvoice: 'Facture Commerciale',
        companyInfo: 'Informations Société',
        customerInfo: 'Informations Client',
        itemsNeedRestocking: 'articles nécessitent réapprovisionnement',
        activeProducts: 'produits actifs',
        outOfStock: 'Rupture de Stock',
        inStock: 'En Stock',
        lowStock: 'Stock Faible',
        goodStock: 'Bon Stock',
        description: 'Description',
        quantity: 'Quantité',
        time: 'Heure',
        date: 'Date',
        summary: 'Résumé',
        urgentAction: 'Action Urgente Requise',
        restockImmediately: 'Réapprovisionner ces articles immédiatement',
        productName: 'Nom du Produit',
        currentStock: 'Stock Actuel',
        minimumStock: 'Stock Minimum',
        generatedBy: 'Généré par',
        printedOn: 'Imprimé le',
        noLowStockItems: 'Aucun article en stock faible trouvé',
        noExpiredItems: 'Aucun article expiré ou proche de l\'expiration trouvé',
        expiryStatus: 'Statut d\'Expiration',
        daysUntilExpiry: 'Jours Jusqu\'à Expiration',
        daysOverdue: 'Jours de Retard',
        totalSales: 'Ventes Totales',
        totalTransactions: 'Transactions Totales',
        paymentMethod: 'Méthode de Paiement',
        companyLogo: 'Logo de l\'Entreprise',
        uploadLogo: 'Télécharger Logo',
        removeLogo: 'Supprimer Logo',
        companySettings: 'Paramètres Entreprise',
        logoSettings: 'Paramètres Logo',
        addProduct: 'Ajouter Produit',
        editProduct: 'Modifier Produit',
        allItems: 'Tous les Articles',
        emptyCart: 'Panier vide',
        address: 'Adresse',
        phone: 'Téléphone',
        receiptFooter: 'Pied de Page Reçu',
        recommendedSize: 'Taille recommandée',
        invalidFileType: 'Veuillez sélectionner un fichier image valide (PNG, JPG, GIF)',
        fileTooLarge: 'La taille du fichier doit être inférieure à 2 Mo',
        logoUpdated: 'Logo mis à jour avec succès!',
        confirmRemoveLogo: 'Êtes-vous sûr de vouloir supprimer le logo de l\'entreprise?',
        logoRemoved: 'Logo supprimé avec succès!',
        addUser: 'Ajouter Utilisateur',
        exportUsers: 'Exporter Utilisateurs',
        saveSettings: 'Sauvegarder Paramètres',
        resetSettings: 'Réinitialiser par Défaut',
        exportData: 'Exporter Données',
        importData: 'Importer Données',
        createBackup: 'Créer Sauvegarde',
        clearAllData: 'Effacer Toutes Données',
        openZakatCalculator: 'Ouvrir Calculateur de Zakat',
        lowStockReport: 'Rapport Stock Faible',
        inventoryExported: 'Inventaire exporté avec succès!',
        reportsExported: 'Rapports exportés avec succès!',
        usersExported: 'Utilisateurs exportés avec succès!',
        accessDenied: 'Accès refusé',
        confirmResetSettings: 'Êtes-vous sûr de vouloir réinitialiser tous les paramètres par défaut?',
        settingsReset: 'Paramètres réinitialisés par défaut avec succès!',
        dataExported: 'Données exportées avec succès!',
        confirmImportData: 'Cela remplacera les données actuelles. Êtes-vous sûr?',
        dataImported: 'Données importées avec succès!',
        importError: 'Erreur d\'importation',
        confirmClearAllData: 'ATTENTION: Cela supprimera tous les produits et données de vente!',
        confirmClearAllDataFinal: 'DERNIER AVERTISSEMENT: Cette action ne peut pas être annulée!',
        allDataCleared: 'Toutes les données effacées avec succès!',
        username: 'Nom d\'utilisateur',
        active: 'Actif',
        inactive: 'Inactif',
        status: 'Statut',
        allStockLevels: 'Tous Niveaux de Stock',
        lowStockOnly: 'Stock Faible Seulement',
        outOfStockOnly: 'Rupture de Stock Seulement',
        search: 'Rechercher',
        selectPaymentMethod: 'Veuillez sélectionner un mode de paiement',
        insufficientStock: 'Stock insuffisant',
        available: 'Disponible',
        saleCompleted: 'Vente terminée',
        cardNumber: 'Numéro de Carte',
        cardAccess: 'Accès par Carte',
        categories: 'Catégories',
        categoryManagement: 'Gestion des Catégories',
        addCategory: 'Ajouter Catégorie',
        editCategory: 'Modifier Catégorie',
        categoryName: 'Nom de Catégorie',
        charts: 'Graphiques',
        salesChart: 'Graphique des Ventes',
        productChart: 'Graphique des Produits',
        dailySales: 'Ventes Quotidiennes',
        weeklySales: 'Ventes Hebdomadaires',
        monthlySales: 'Ventes Mensuelles',
        category: 'Catégorie',
        addedSuccessfully: 'ajouté avec succès',
        updatedSuccessfully: 'mis à jour avec succès',
        successfully: 'avec succès',
        activated: 'activé',
        deactivated: 'désactivé',
        cannotDeleteCategory: 'Impossible de supprimer la catégorie',
        productsUsingCategory: 'produits utilisant cette catégorie',
        confirmDeleteCategory: 'Êtes-vous sûr de vouloir supprimer la catégorie',
        deletedSuccessfully: 'supprimé avec succès',
        categoriesExported: 'Catégories exportées avec succès',
        productsSold: 'Produits Vendus',
        tools: 'Outils',
        hardware: 'Quincaillerie',
        construction: 'Construction',
        electrical: 'Électrique',
        plumbing: 'Plomberie',
        accessDenied: 'Accès Refusé',
        noPermissionCategories: 'Vous n\'avez pas la permission de gérer les catégories.',
        topSellingProducts: 'Produits les Plus Vendus',
        minStock: 'Stock Minimum',
        supplier: 'Fournisseur',
        adjustStock: 'Ajuster Stock',
        id: 'ID',
        notAvailable: 'N/D',
        report: 'Rapport',
        fullName: 'Nom Complet',
        newPassword: 'Nouveau Mot de Passe (laisser vide pour conserver actuel)',
        englishName: 'Nom Anglais',
        arabicName: 'Nom Arabe',
        frenchName: 'Nom Français',
        spanishName: 'Nom Espagnol',
        clients: 'Clients',
        addClient: 'Ajouter Client',
        editClient: 'Modifier Client',
        clientName: 'Nom du Client',
        clientPhone: 'Téléphone Client',
        clientAddress: 'Adresse Client',
        selectClient: 'Sélectionner Client (Optionnel)',
        noClient: 'Aucun Client',
        payLater: 'Payer Plus Tard (Impayé)',
        completePaidSale: 'Terminer (Payé)',
        unpaid: 'Impayé',
        paid: 'Payé',
        paymentStatus: 'Statut de Paiement',
        clientDebt: 'Dette Client',
        viewDebts: 'Voir Dettes',
        markAsPaid: 'Marquer comme Payé',
        suppliers: 'Fournisseurs',
        addSupplier: 'Ajouter Fournisseur',
        editSupplier: 'Modifier Fournisseur',
        contactPerson: 'Personne de Contact',
        email: 'Email',
        purchases: 'Achats',
        recordPurchase: 'Enregistrer Achat',
        viewPurchases: 'Voir Achats',
        unpaidPurchases: 'Achats Impayés',

        // Statements
        statementOfAccount: 'Relevé de Compte',
        outstandingBalance: 'Solde Impayé',
        clientStatement: 'Relevé Client',
        supplierStatement: 'Relevé Fournisseur',
    },
    es: {
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
        settings: 'Configuración',
        currency: 'Moneda',
        language: 'Idioma',
        sales: 'Ventas',
        dashboard: 'Panel de Control',
        users: 'Usuarios',
        addProduct: 'Agregar Producto',
        editProduct: 'Editar Producto',
        deleteProduct: 'Eliminar Producto',
        stock: 'Stock',
        price: 'Precio',
        barcode: 'Código de Barras',
        category: 'Categoría',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        add: 'Agregar',
        search: 'Buscar',
        filter: 'Filtrar',
        export: 'Exportar',
        import: 'Importar',
        backup: 'Respaldo',
        restore: 'Restaurar',
        invoice: 'Factura',
        receipt: 'Recibo',
        printInvoice: 'Imprimir Factura',
        lowStockReport: 'Reporte Stock Bajo',
        expiredItems: 'Artículos Vencidos',
        printLowStock: 'Imprimir Stock Bajo',
        printExpired: 'Imprimir Vencidos',
        productImage: 'Imagen Producto',
        uploadImage: 'Subir Imagen',
        changeImage: 'Cambiar Imagen',
        removeImage: 'Quitar Imagen',
        expiryDate: 'Fecha de Vencimiento',
        expired: 'Vencido',
        nearExpiry: 'Próximo a Vencer',
        supplier: 'Proveedor',
        cost: 'Costo',
        profit: 'Ganancia',
        margin: 'Margen',
        todaysSales: 'Ventas de Hoy',
        thisWeek: 'Esta Semana',
        thisMonth: 'Este Mes',
        totalProducts: 'Total Productos',
        transactions: 'Transacciones',
        averageTransaction: 'Transacción Promedio',
        topSellingProducts: 'Productos Más Vendidos',
        cashierPerformance: 'Rendimiento Cajeros',
        recentSales: 'Ventas Recientes',
        dailyReport: 'Reporte Diario',
        weeklyReport: 'Reporte Semanal',
        monthlyReport: 'Reporte Mensual',
        salesReport: 'Reporte de Ventas',
        inventoryReport: 'Reporte de Inventario',
        profitReport: 'Reporte de Ganancias',
        taxReport: 'Reporte de Impuestos',
        customerReceipt: 'Recibo Cliente',
        businessInvoice: 'Factura Comercial',
        companyInfo: 'Información Empresa',
        customerInfo: 'Información Cliente',
        itemsNeedRestocking: 'artículos necesitan reabastecimiento',
        activeProducts: 'productos activos',
        outOfStock: 'Sin Stock',
        inStock: 'En Stock',
        lowStock: 'Stock Bajo',
        goodStock: 'Buen Stock',
        description: 'Descripción',
        quantity: 'Cantidad',
        time: 'Hora',
        date: 'Fecha',
        summary: 'Resumen',
        urgentAction: 'Acción Urgente Requerida',
        restockImmediately: 'Reabastecer estos artículos inmediatamente',
        productName: 'Nombre del Producto',
        currentStock: 'Stock Actual',
        minimumStock: 'Stock Mínimo',
        generatedBy: 'Generado por',
        printedOn: 'Impreso el',
        noLowStockItems: 'No se encontraron artículos con stock bajo',
        noExpiredItems: 'No se encontraron artículos vencidos o próximos a vencer',
        expiryStatus: 'Estado de Vencimiento',
        daysUntilExpiry: 'Días Hasta Vencimiento',
        daysOverdue: 'Días Vencidos',
        totalSales: 'Ventas Totales',
        totalTransactions: 'Transacciones Totales',
        paymentMethod: 'Método de Pago',
        companyLogo: 'Logo de la Empresa',
        uploadLogo: 'Subir Logo',
        removeLogo: 'Quitar Logo',
        companySettings: 'Configuración Empresa',
        logoSettings: 'Configuración Logo',
        addProduct: 'Agregar Producto',
        editProduct: 'Editar Producto',
        allItems: 'Todos los Artículos',
        emptyCart: 'Carrito vacío',
        address: 'Dirección',
        phone: 'Teléfono',
        receiptFooter: 'Pie de Página Recibo',
        recommendedSize: 'Tamaño recomendado',
        invalidFileType: 'Por favor seleccione un archivo de imagen válido (PNG, JPG, GIF)',
        fileTooLarge: 'El tamaño del archivo debe ser menor a 2MB',
        logoUpdated: '¡Logo actualizado exitosamente!',
        confirmRemoveLogo: '¿Está seguro de que desea eliminar el logo de la empresa?',
        logoRemoved: '¡Logo eliminado exitosamente!',
        addUser: 'Agregar Usuario',
        exportUsers: 'Exportar Usuarios',
        saveSettings: 'Guardar Configuración',
        resetSettings: 'Restablecer por Defecto',
        exportData: 'Exportar Datos',
        importData: 'Importar Datos',
        createBackup: 'Crear Respaldo',
        clearAllData: 'Limpiar Todos los Datos',
        openZakatCalculator: 'Abrir Calculadora de Zakat',
        lowStockReport: 'Reporte Stock Bajo',
        inventoryExported: '¡Inventario exportado exitosamente!',
        reportsExported: '¡Reportes exportados exitosamente!',
        usersExported: '¡Usuarios exportados exitosamente!',
        accessDenied: 'Acceso denegado',
        confirmResetSettings: '¿Está seguro de que desea restablecer toda la configuración por defecto?',
        settingsReset: '¡Configuración restablecida por defecto exitosamente!',
        dataExported: '¡Datos exportados exitosamente!',
        confirmImportData: 'Esto reemplazará los datos actuales. ¿Está seguro?',
        dataImported: '¡Datos importados exitosamente!',
        importError: 'Error de importación',
        confirmClearAllData: 'ADVERTENCIA: ¡Esto eliminará todos los productos y datos de ventas!',
        confirmClearAllDataFinal: 'ADVERTENCIA FINAL: ¡Esta acción no se puede deshacer!',
        allDataCleared: '¡Todos los datos eliminados exitosamente!',
        username: 'Usuario',
        active: 'Activo',
        inactive: 'Inactivo',
        status: 'Estado',
        allStockLevels: 'Todos Niveles de Stock',
        lowStockOnly: 'Solo Stock Bajo',
        outOfStockOnly: 'Solo Sin Stock',
        search: 'Buscar',
        selectPaymentMethod: 'Por favor seleccione un método de pago',
        insufficientStock: 'Stock insuficiente',
        available: 'Disponible',
        saleCompleted: 'Venta completada',
        cardNumber: 'Número de Tarjeta',
        cardAccess: 'Acceso con Tarjeta',
        categories: 'Categorías',
        categoryManagement: 'Gestión de Categorías',
        addCategory: 'Agregar Categoría',
        editCategory: 'Editar Categoría',
        categoryName: 'Nombre de Categoría',
        charts: 'Gráficos',
        salesChart: 'Gráfico de Ventas',
        productChart: 'Gráfico de Productos',
        dailySales: 'Ventas Diarias',
        weeklySales: 'Ventas Semanales',
        monthlySales: 'Ventas Mensuales',
        category: 'Categoría',
        addedSuccessfully: 'agregado exitosamente',
        updatedSuccessfully: 'actualizado exitosamente',
        successfully: 'exitosamente',
        activated: 'activado',
        deactivated: 'desactivado',
        cannotDeleteCategory: 'No se puede eliminar la categoría',
        productsUsingCategory: 'productos usando esta categoría',
        confirmDeleteCategory: '¿Está seguro de que desea eliminar la categoría',
        deletedSuccessfully: 'eliminado exitosamente',
        categoriesExported: 'Categorías exportadas exitosamente',
        productsSold: 'Productos Vendidos',
        tools: 'Herramientas',
        hardware: 'Ferretería',
        construction: 'Construcción',
        electrical: 'Eléctrico',
        plumbing: 'Fontanería',
        accessDenied: 'Acceso Denegado',
        noPermissionCategories: 'No tienes permiso para gestionar categorías.',
        topSellingProducts: 'Productos Más Vendidos',
        minStock: 'Stock Mínimo',
        supplier: 'Proveedor',
        adjustStock: 'Ajustar Stock',
        id: 'ID',
        notAvailable: 'N/D',
        report: 'Reporte',
        fullName: 'Nombre Completo',
        newPassword: 'Nueva Contraseña (dejar en blanco para mantener actual)',
        englishName: 'Nombre en Inglés',
        arabicName: 'Nombre en Árabe',
        frenchName: 'Nombre en Francés',
        spanishName: 'Nombre en Español',
        clients: 'Clientes',
        addClient: 'Agregar Cliente',
        editClient: 'Editar Cliente',
        clientName: 'Nombre del Cliente',
        clientPhone: 'Teléfono del Cliente',
        clientAddress: 'Dirección del Cliente',
        selectClient: 'Seleccionar Cliente (Opcional)',
        noClient: 'Sin Cliente',
        payLater: 'Pagar Después (No Pagado)',
        completePaidSale: 'Completar (Pagado)',
        unpaid: 'No Pagado',
        paid: 'Pagado',
        paymentStatus: 'Estado de Pago',
        clientDebt: 'Deuda del Cliente',
        viewDebts: 'Ver Deudas',
        markAsPaid: 'Marcar como Pagado',
        suppliers: 'Proveedores',
        addSupplier: 'Agregar Proveedor',
        editSupplier: 'Editar Proveedor',
        contactPerson: 'Persona de Contacto',
        email: 'Email',
        purchases: 'Compras',
        recordPurchase: 'Registrar Compra',
        viewPurchases: 'Ver Compras',
        unpaidPurchases: 'Compras No Pagadas',

        // Statements
        statementOfAccount: 'Estado de Cuenta',
        outstandingBalance: 'Saldo Pendiente',
        clientStatement: 'Estado de Cuenta del Cliente',
        supplierStatement: 'Estado de Cuenta del Proveedor',
    }
};

// Multi-currency support including Algerian Dinar with language-specific names
const currencies = {
    USD: {
        symbol: '$',
        rate: 0.0076,
        names: {
            en: 'US Dollar',
            ar: 'دولار أمريكي',
            fr: 'Dollar Américain',
            es: 'Dólar Estadounidense'
        }
    },
    EUR: {
        symbol: '€',
        rate: 0.0066,
        names: {
            en: 'Euro',
            ar: 'يورو',
            fr: 'Euro',
            es: 'Euro'
        }
    },
    AED: {
        symbol: 'د.إ',
        rate: 0.028,
        names: {
            en: 'UAE Dirham',
            ar: 'درهم إماراتي',
            fr: 'Dirham des EAU',
            es: 'Dirham de EAU'
        }
    },
    SAR: {
        symbol: 'ر.س',
        rate: 0.029,
        names: {
            en: 'Saudi Riyal',
            ar: 'ريال سعودي',
            fr: 'Riyal Saoudien',
            es: 'Riyal Saudí'
        }
    },
    DZD: {
        symbol: { en: 'د.ج', ar: 'د.ج', fr: 'DA', es: 'DA' },
        rate: 1,
        names: {
            en: 'Algerian Dinar',
            ar: 'دينار جزائري',
            fr: 'Dinar Algérien',
            es: 'Dinar Argelino'
        }
    },
    GBP: {
        symbol: '£',
        rate: 0.0057,
        names: {
            en: 'British Pound',
            ar: 'جنيه إسترليني',
            fr: 'Livre Sterling',
            es: 'Libra Esterlina'
        }
    },
   
   
    TND: {
        symbol: 'د.ت',
        rate: 0.022,
        names: {
            en: 'Tunisian Dinar',
            ar: 'دينار تونسي',
            fr: 'Dinar Tunisien',
            es: 'Dinar Tunecino'
        }
    }
};

// User roles and permissions
const userRoles = {
    admin: {
        name: 'Admin',
        permissions: ['all']
    },
    manager: {
        name: 'Manager', 
        permissions: ['sales', 'inventory', 'reports', 'users', 'settings']
    },
    cashier: {
        name: 'Cashier',
        permissions: ['sales', 'basic_reports']
    }
};

// Sample users with card access (in production, this would be in a secure database)
const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator', active: true, cardNumber: '1001', cardAccess: true },
    { id: 2, username: 'manager', password: 'manager123', role: 'manager', name: 'Store Manager', active: true, cardNumber: '1002', cardAccess: true },
    { id: 3, username: 'cashier1', password: 'cashier123', role: 'cashier', name: 'Ahmed Ali', active: true, cardNumber: '1003', cardAccess: true },
    { id: 4, username: 'cashier2', password: 'cashier123', role: 'cashier', name: 'Fatima Hassan', active: true, cardNumber: '1004', cardAccess: true },
    { id: 5, username: 'cashier3', password: 'cashier123', role: 'cashier', name: 'Omar Benali', active: true, cardNumber: '1005', cardAccess: false }
];

// Client data
let clients = loadFromStorage('clients', [
    { id: 1, name: 'Walk-in Customer', phone: 'N/A', address: 'N/A' },
    { id: 2, name: 'John Doe', phone: '555-1234', address: '123 Main St' }
]);

// Supplier and Purchase data
let suppliers = loadFromStorage('suppliers', [
    { id: 1, name: 'Algeria Tools Co', contactPerson: 'Yacine Bouzid', phone: '021-555-001', email: 'contact@algeriatools.dz', address: 'Algiers Industrial Zone' },
    { id: 2, name: 'Algerian Hardware Supply', contactPerson: 'Amina Khelifi', phone: '041-555-002', email: 'sales@ahsupply.dz', address: 'Oran Commercial District' },
    { id: 3, name: 'Algeria Construction Materials', contactPerson: 'Karim Belkacem', phone: '031-555-003', email: 'info@acm.dz', address: 'Constantine Materials Hub' },
    { id: 4, name: 'Algeria Steel Co', contactPerson: 'Nadia Mansouri', phone: '038-555-004', email: 'orders@algeriasteel.dz', address: 'Annaba Steel Complex' },
    { id: 5, name: 'Algeria Electric Supply', contactPerson: 'Samir Haddad', phone: '025-555-005', email: 'support@aesupply.dz', address: 'Blida Electronics Zone' },
    { id: 6, name: 'Algeria Plumbing Co', contactPerson: 'Leila Ziani', phone: '036-555-006', email: 'contact@apc.dz', address: 'Setif Industrial Park' }
]);

let purchases = loadFromStorage('purchases', [
    { id: 'P202401', supplierId: 1, date: '2024-05-10T10:00:00Z', items: [{ productId: 1, quantity: 10, cost: 850 }], total: 8500, paymentStatus: 'paid' },
    { id: 'P202402', supplierId: 2, date: '2024-05-15T14:30:00Z', items: [{ productId: 6, quantity: 50, cost: 180 }], total: 9000, paymentStatus: 'unpaid' }
]);

// Categories management - Enhanced for hardware store
let categories = JSON.parse(localStorage.getItem('categories')) || [
    { id: 1, name: 'Food', nameAr: 'طعام', nameFr: 'Nourriture', nameEs: 'Comida', active: true },
    { id: 2, name: 'Drinks', nameAr: 'مشروبات', nameFr: 'Boissons', nameEs: 'Bebidas', active: true },
    { id: 3, name: 'Snacks', nameAr: 'وجبات خفيفة', nameFr: 'Collations', nameEs: 'Aperitivos', active: true },
    { id: 4, name: 'Tools', nameAr: 'أدوات', nameFr: 'Outils', nameEs: 'Herramientas', active: true },
    { id: 5, name: 'Hardware', nameAr: 'أجهزة', nameFr: 'Quincaillerie', nameEs: 'Ferretería', active: true },
    { id: 6, name: 'Construction', nameAr: 'بناء', nameFr: 'Construction', nameEs: 'Construcción', active: true },
    { id: 7, name: 'Electrical', nameAr: 'كهربائي', nameFr: 'Électrique', nameEs: 'Eléctrico', active: true },
    { id: 8, name: 'Plumbing', nameAr: 'سباكة', nameFr: 'Plomberie', nameEs: 'Fontanería', active: true }
];

// Enhanced product data with full inventory management, images, and expiry dates
let products = [
    {
        id: 1, name: 'Hammer', nameAr: 'مطرقة', nameFr: 'Marteau', nameEs: 'Martillo',
        price: 1250, category: 'tools', stock: 25, minStock: 5, maxStock: 100,
        barcode: '2001001001', supplier: 'Algeria Tools Co', cost: 850, active: true,
        image: 'https://placehold.co/100x100/8B4513/FFF?text=🔨',
        expiryDate: null
    },
    {
        id: 2, name: 'Screwdriver Set', nameAr: 'مجموعة مفكات', nameFr: 'Jeu de Tournevis', nameEs: 'Juego de Destornilladores',
        price: 850, category: 'tools', stock: 40, minStock: 10, maxStock: 150,
        barcode: '2001001002', supplier: 'Algeria Tools Co', cost: 580, active: true,
        image: 'https://placehold.co/100x100/4690E7/FFF?text=🪛',
        expiryDate: null
    },
    {
        id: 3, name: 'Wrench Set', nameAr: 'مجموعة مفاتيح ربط', nameFr: 'Jeu de Clés', nameEs: 'Juego de Llaves',
        price: 1450, category: 'tools', stock: 30, minStock: 8, maxStock: 120,
        barcode: '2001001003', supplier: 'Algeria Tools Co', cost: 980, active: true,
        image: 'https://placehold.co/100x100/6C757D/FFF?text=🔧',
        expiryDate: null
    },
    {
        id: 4, name: 'Drill Bits Set', nameAr: 'مجموعة لقم الحفر', nameFr: 'Jeu de Forets', nameEs: 'Juego de Brocas',
        price: 750, category: 'tools', stock: 50, minStock: 15, maxStock: 200,
        barcode: '2001001004', supplier: 'Algeria Tools Co', cost: 480, active: true,
        image: 'https://placehold.co/100x100/34495E/FFF?text=🪚',
        expiryDate: null
    },
    {
        id: 5, name: 'Measuring Tape', nameAr: 'شريط قياس', nameFr: 'Mètre Ruban', nameEs: 'Cinta Métrica',
        price: 450, category: 'tools', stock: 60, minStock: 20, maxStock: 250,
        barcode: '2001001005', supplier: 'Algeria Tools Co', cost: 280, active: true,
        image: 'https://placehold.co/100x100/FFD700/000?text=📏',
        expiryDate: null
    },

    // HARDWARE CATEGORY
    {
        id: 6, name: 'Wood Screws 4x50mm (100pcs)', nameAr: 'براغي خشب 4×50مم (100 قطعة)', nameFr: 'Vis à Bois 4x50mm (100pcs)', nameEs: 'Tornillos para Madera 4x50mm (100pcs)',
        price: 320, category: 'hardware', stock: 200, minStock: 50, maxStock: 1000,
        barcode: '2002001001', supplier: 'Algerian Hardware Supply', cost: 180, active: true,
        expiryDate: null
    },
    {
        id: 7, name: 'Metal Bolts M8x40mm (50pcs)', nameAr: 'براغي معدنية M8×40مم (50 قطعة)', nameFr: 'Boulons Métal M8x40mm (50pcs)', nameEs: 'Pernos de Metal M8x40mm (50pcs)',
        price: 580, category: 'hardware', stock: 150, minStock: 30, maxStock: 800,
        barcode: '2002001002', supplier: 'Algerian Hardware Supply', cost: 350, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNDk1MDU3Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+⚙️</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 8, name: 'Nails 3 inch (1kg)', nameAr: 'مسامير 3 بوصة (1 كيلو)', nameFr: 'Clous 3 pouces (1kg)', nameEs: 'Clavos 3 pulgadas (1kg)',
        price: 420, category: 'hardware', stock: 80, minStock: 20, maxStock: 400,
        barcode: '2002001003', supplier: 'Algerian Hardware Supply', cost: 250, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjOEI0NTEzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+📌</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 9, name: 'Washers Assorted (200pcs)', nameAr: 'حلقات معدنية متنوعة (200 قطعة)', nameFr: 'Rondelles Assorties (200pcs)', nameEs: 'Arandelas Surtidas (200pcs)',
        price: 280, category: 'hardware', stock: 120, minStock: 25, maxStock: 600,
        barcode: '2002001004', supplier: 'Algerian Hardware Supply', cost: 160, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNkM3NTdEIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+⭕</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 10, name: 'Hinges 3 inch (pair)', nameAr: 'مفصلات 3 بوصة (زوج)', nameFr: 'Charnières 3 pouces (paire)', nameEs: 'Bisagras 3 pulgadas (par)',
        price: 650, category: 'hardware', stock: 45, minStock: 10, maxStock: 200,
        barcode: '2002001005', supplier: 'Algerian Hardware Supply', cost: 420, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNDk1MDU3Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🚪</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },

    // CONSTRUCTION CATEGORY
    {
        id: 23, name: 'Cement 50kg Bag', nameAr: 'كيس إسمنت 50 كيلو', nameFr: 'Sac de Ciment 50kg', nameEs: 'Bolsa de Cemento 50kg',
        price: 850, category: 'construction', stock: 100, minStock: 20, maxStock: 500,
        barcode: '2003001001', supplier: 'Algeria Construction Materials', cost: 650, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNkM3NTdEIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🏗️</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 24, name: 'Sand 25kg Bag', nameAr: 'كيس رمل 25 كيلو', nameFr: 'Sac de Sable 25kg', nameEs: 'Bolsa de Arena 25kg',
        price: 320, category: 'construction', stock: 150, minStock: 30, maxStock: 800,
        barcode: '2003001002', supplier: 'Algeria Construction Materials', cost: 220, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjRBNDYwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🏖️</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 25, name: 'Bricks (per piece)', nameAr: 'طوب (القطعة)', nameFr: 'Briques (à l\'unité)', nameEs: 'Ladrillos (por pieza)',
        price: 45, category: 'construction', stock: 500, minStock: 100, maxStock: 2000,
        barcode: '2003001003', supplier: 'Algeria Construction Materials', cost: 28, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQ0Q1QzVDIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+🧱</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 26, name: 'Steel Rebar 12mm (6m)', nameAr: 'حديد تسليح 12مم (6 متر)', nameFr: 'Fer à Béton 12mm (6m)', nameEs: 'Varilla de Acero 12mm (6m)',
        price: 1850, category: 'construction', stock: 80, minStock: 15, maxStock: 300,
        barcode: '2003001004', supplier: 'Algeria Steel Co', cost: 1420, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNDk1MDU3Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🔗</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },

    // ELECTRICAL CATEGORY
    {
        id: 27, name: 'Electrical Wire 2.5mm (100m)', nameAr: 'سلك كهربائي 2.5مم (100 متر)', nameFr: 'Fil Électrique 2.5mm (100m)', nameEs: 'Cable Eléctrico 2.5mm (100m)',
        price: 2850, category: 'electrical', stock: 35, minStock: 8, maxStock: 150,
        barcode: '2004001001', supplier: 'Algeria Electric Supply', cost: 2100, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">⚡</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 28, name: 'Light Switch', nameAr: 'مفتاح إضاءة', nameFr: 'Interrupteur', nameEs: 'Interruptor de Luz',
        price: 180, category: 'electrical', stock: 120, minStock: 25, maxStock: 500,
        barcode: '2004001002', supplier: 'Algeria Electric Supply', cost: 110, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI">💡</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 29, name: 'Power Outlet', nameAr: 'مقبس كهربائي', nameFr: 'Prise Électrique', nameEs: 'Toma de Corriente',
        price: 220, category: 'electrical', stock: 90, minStock: 20, maxStock: 400,
        barcode: '2004001003', supplier: 'Algeria Electric Supply', cost: 140, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🔌</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },

    // PLUMBING CATEGORY
    {
        id: 30, name: 'PVC Pipe 32mm (3m)', nameAr: 'أنبوب PVC 32مم (3 متر)', nameFr: 'Tuyau PVC 32mm (3m)', nameEs: 'Tubo PVC 32mm (3m)',
        price: 380, category: 'plumbing', stock: 75, minStock: 15, maxStock: 300,
        barcode: '2005001001', supplier: 'Algeria Plumbing Co', cost: 250, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🚰</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 31, name: 'Pipe Fittings Set', nameAr: 'مجموعة وصلات الأنابيب', nameFr: 'Jeu de Raccords', nameEs: 'Juego de Accesorios',
        price: 650, category: 'plumbing', stock: 55, minStock: 12, maxStock: 250,
        barcode: '2005001002', supplier: 'Algeria Plumbing Co', cost: 420, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNkM3NTdEIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🔧</dGV4dD4KPC9zdmc+',
        expiryDate: null
    },
    {
        id: 32, name: 'Faucet Standard', nameAr: 'صنبور عادي', nameFr: 'Robinet Standard', nameEs: 'Grifo Estándar',
        price: 1250, category: 'plumbing', stock: 25, minStock: 5, maxStock: 100,
        barcode: '2005001003', supplier: 'Algeria Plumbing Co', cost: 850, active: true,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNEZBNEZGIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI">🚿</dGV4dD4KPC9zdmc+',
        expiryDate: null
    }
];

// ===== GLOBAL STATE =====
let cart = [];
let currentCategory = 'all';
let currentUser = null;
let currentLanguage = localStorage.getItem('posLanguage') || 'en';
let currentCurrency = localStorage.getItem('posCurrency') || 'DZD';
let salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || [];
let isLoggedIn = false;
let currentView = 'pos'; // pos, inventory, reports, settings, users

// System settings
const settings = {
    taxRate: parseFloat(localStorage.getItem('taxRate')) || 0.0, // 19% VAT (Algeria standard)
    companyName: localStorage.getItem('companyName') || 'My POS System',
    companyAddress: localStorage.getItem('companyAddress') || 'Algiers, Algeria',
    companyPhone: localStorage.getItem('companyPhone') || '+213 21 123 456',
    receiptFooter: localStorage.getItem('receiptFooter') || 'شكراً لزيارتكم - Thank you for your visit!',
    companyLogo: 'logo.png', // Permanent logo for UI
    printableLogo: localStorage.getItem('printableLogo') || '', // For receipts and invoices
    lowStockThreshold: parseInt(localStorage.getItem('lowStockThreshold')) || 10,
    autoBackup: localStorage.getItem('autoBackup') === 'true',
    printAfterSale: localStorage.getItem('printAfterSale') === 'true',
    showBarcode: localStorage.getItem('showBarcode') === 'true'
};

// ===== UTILITY FUNCTIONS =====

// Get translated text
function t(key) {
    return languages[currentLanguage][key] || key;
}

// Get locale for date formatting
function getLocaleForDate() {
    switch (currentLanguage) {
        case 'ar': return 'ar-DZ';
        case 'fr': return 'fr-FR';
        case 'es': return 'es-ES';
        default: return 'en-US';
    }
}

// Get product name in current language
function getProductName(product) {
    switch(currentLanguage) {
        case 'ar': return product.nameAr || product.name;
        case 'fr': return product.nameFr || product.name;
        case 'es': return product.nameEs || product.name;
        default: return product.name;
    }
}

// Format currency with language-specific symbols
function formatCurrency(amount) {
    const currency = currencies[currentCurrency];
    const convertedAmount = amount * currency.rate;

    // Get language-specific symbol
    let symbol;
    if (typeof currency.symbol === 'object') {
        symbol = currency.symbol[currentLanguage] || currency.symbol.en;
    } else {
        symbol = currency.symbol;
    }

    // Format based on language
    if (currentLanguage === 'ar') {
        return `${convertedAmount.toFixed(2)} ${symbol}`;
    } else {
        return `${symbol}${convertedAmount.toFixed(2)}`;
    }
}

// Get currency name in current language
function getCurrencyName(currencyCode) {
    const currency = currencies[currencyCode];
    return currency.names[currentLanguage] || currency.names.en;
}

// Convert price to current currency
function convertPrice(price) {
    return price * currencies[currentCurrency].rate;
}

// Generate unique ID
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Save to localStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Load from localStorage
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        return defaultValue;
    }
}

// ===== AUTHENTICATION SYSTEM =====

function showLoginScreen() {
    const loginHTML = `
        <div class="login-screen">
            <div class="login-container">
                <div class="login-header">
                    <h1>${t('welcome')}</h1>
                    <div class="language-selector">
                        <label>Choose Language / اختر اللغة:</label>
                        <select id="login-language" onchange="changeLanguage(this.value)">
                            <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                            <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>🇩🇿 العربية (Arabic)</option>
                            <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>🇫🇷 Français (French)</option>
                            <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>🇪🇸 Español (Spanish)</option>
                        </select>
                    </div>
                </div>
                <form class="login-form" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="username">${t('username')}:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">${t('password')}:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">${t('login')}</button>
                </form>
               
            </div>
        </div>
    `;
    
    document.body.innerHTML = loginHTML;
    
    // Add login screen styles
    const loginStyles = `
        <style>
        .login-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .login-container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            min-width: 400px;
            text-align: center;
        }
        .login-header {
            margin-bottom: 30px;
        }
        .login-header h1 {
            color: #667eea;
            margin-bottom: 20px;
        }
        .language-selector select {
            padding: 8px 15px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .login-form {
            text-align: left;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-group input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        .form-group input:focus {
            outline: none;
            border-color: #667eea;
        }
        .btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-primary {
            background: #667eea;
            color: white;
        }
        .btn-primary:hover {
            background: #5a6fd8;
            transform: translateY(-2px);
        }
        .demo-users {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            text-align: left;
        }
        .demo-users h3 {
            color: #667eea;
            margin-bottom: 10px;
        }
        .demo-users p {
            margin: 5px 0;
            font-size: 14px;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', loginStyles);
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password && u.active);
    
    if (user) {
        currentUser = user;
        isLoggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        
        // Reload the page to initialize the main system
        location.reload();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    currentUser = null;
    isLoggedIn = false;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    location.reload();
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    
    if (savedUser && savedLoginStatus === 'true') {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = true;
    }
}

// ===== LANGUAGE & CURRENCY FUNCTIONS =====

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('posLanguage', lang);

    if (isLoggedIn) {
        updateLanguage();
        displayProducts();
        updateCartDisplay();

        // Refresh current view content
        switch(currentView) {
            case 'inventory':
                loadInventoryView();
                break;
            case 'reports':
                loadReportsView();
                break;
            case 'users':
                loadUsersView();
                break;
            case 'settings':
                loadSettingsView();
                break;
        }

        // Update currency selector
        updateCurrencySelector();

        // Update low stock alerts
        checkLowStock();
    } else {
        // Just update the login screen
        showLoginScreen();
    }
}

function changeCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('posCurrency', currency);
    displayProducts();
    updateCartDisplay();

    // Refresh current view if it contains currency data
    if (currentView === 'reports') {
        loadReportsView();
    }
}

function updateCurrencySelector() {
    const currencySelector = document.getElementById('currency-selector');
    if (currencySelector) {
        currencySelector.innerHTML = Object.entries(currencies).map(([code, curr]) => {
            const symbol = typeof curr.symbol === 'object' ? curr.symbol[currentLanguage] || curr.symbol.en : curr.symbol;
            const name = curr.names[currentLanguage] || curr.names.en;
            return `<option value="${code}" ${currentCurrency === code ? 'selected' : ''}>${symbol} ${name}</option>`;
        }).join('');
    }
}

function updateLanguage() {
    // Update all text elements with translations
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translatedText = t(key);

        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'button') {
            element.value = translatedText;
        } else if (element.tagName === 'INPUT' && element.placeholder) {
            element.placeholder = translatedText;
        } else if (element.tagName === 'BUTTON') {
            element.textContent = translatedText;
        } else {
            element.textContent = translatedText;
        }
    });

    // Update document direction for Arabic
    document.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;

    // Update language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }

    // Update currency selector with translated names
    updateCurrencySelector();
}

// ===== MAIN SYSTEM INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeSystem();
});

function initializeSystem() {
    checkLoginStatus();

    if (!isLoggedIn) {
        showLoginScreen();
        return;
    }

    // Load products from storage. If not present, the default array is used.
    const savedProducts = loadFromStorage('products');
    if (savedProducts && savedProducts.length > 0) {
        // If we have saved products, use them instead of the hardcoded defaults.
        products = savedProducts;
    } else {
        // This is likely the first run, so we save the default product list to storage.
        // This ensures that the initial product data is available.
        saveToStorage('products', products);
    }

    // Initialize main system
    loadSettings();
    createMainInterface();
    populateClientSelectors();
    renderCategoryButtons();
    updateLanguage();
    displayProducts();
    updateCartDisplay();
    updateTime();
    checkLowStock();

    // Set up intervals
    setInterval(updateTime, 1000);
    setInterval(checkLowStock, 60000); // Check every minute
    setInterval(autoSave, 30000); // Auto-save every 30 seconds
    loadCart();

    // Event listeners
    setupEventListeners();

    console.log('Professional POS System initialized successfully');
}

function populateClientSelectors() {
    const mainClientSelector = document.getElementById('main-client-selector');
    const checkoutClientSelector = document.getElementById('client-selector');

    const clientOptions = clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

    if (mainClientSelector) {
        mainClientSelector.innerHTML = clientOptions;
    }
    if (checkoutClientSelector) {
        checkoutClientSelector.innerHTML = clientOptions;
    }
}

function createMainInterface() {
    const mainHTML = `
        <div class="pos-container">
            <!-- Top Navigation -->
            <nav class="top-nav">
                <div class="nav-left">
                    <div id="main-logo" style="display: inline-flex; align-items: center;">
                        ${settings.companyLogo ?
                            `<img src="${settings.companyLogo}" alt="${settings.companyName}" style="max-height: 40px; margin-right: 15px;">` :
                            `<span style="font-weight: bold; color: var(--primary-color); margin-right: 15px;">${settings.companyName}</span>`
                        }
                    </div>
                    <h1>ROUIBIPOS</h1>
                    <div class="nav-tabs">
                        <button class="nav-tab active" onclick="switchView('pos')" data-translate="sales">${t('sales')}</button>
                        ${hasPermission('inventory') ? `<button class="nav-tab" onclick="switchView('inventory')" data-translate="inventory">${t('inventory')}</button>` : ''}
                        ${hasPermission('inventory') ? `<button class="nav-tab" onclick="switchView('suppliers')" data-translate="suppliers">${t('suppliers')}</button>` : ''}
                        ${hasPermission('inventory') ? `<button class="nav-tab" onclick="switchView('categories')" data-translate="categories">${t('categories')}</button>` : ''}
                        ${hasPermission('reports') ? `<button class="nav-tab" onclick="switchView('reports')" data-translate="reports">${t('reports')}</button>` : ''}
                        ${hasPermission('users') ? `<button class="nav-tab" onclick="switchView('clients')" data-translate="clients">${t('clients')}</button>` : ''}
                        ${hasPermission('users') ? `<button class="nav-tab" onclick="switchView('users')" data-translate="users">${t('users')}</button>` : ''}
                        ${hasPermission('settings') ? `<button class="nav-tab" onclick="switchView('settings')" data-translate="settings">${t('settings')}</button>` : ''}
                    </div>
                </div>
                <div class="nav-right">
                    <div class="controls">
                        <div class="control-group">
                            <label>Language:</label>
                            <select id="language-selector" onchange="changeLanguage(this.value)">
                                <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                                <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>🇩🇿 العربية</option>
                                <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
                                <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
                            </select>
                        </div>
                        <div class="control-group">
                            <label>Currency:</label>
                            <select id="currency-selector" onchange="changeCurrency(this.value)">
                                ${Object.entries(currencies).map(([code, curr]) =>
                                    `<option value="${code}" ${currentCurrency === code ? 'selected' : ''}>${curr.symbol} ${curr.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="user-info">
                        <span class="user-name">${currentUser.name} (${t(currentUser.role)})</span>
                        <span id="current-time"></span>
                        <button class="btn btn-secondary" onclick="logout()" data-translate="logout">${t('logout')}</button>
                    </div>
                </div>
            </nav>

            <!-- Main Content Area -->
            <main class="main-content">
                <!-- POS View -->
                <div id="pos-view" class="view active">
                    <div class="pos-layout">
                        <!-- Categories & Search -->
                        <section class="categories-section">
                            <div class="search-bar">
                                <input type="text" id="product-search" placeholder="${t('search')}..." onkeyup="searchProducts()">
                                <button onclick="scanBarcode()" class="btn btn-secondary">📷 Scan</button>
                            </div>
                            <h2 data-translate="categories">${t('categories')}</h2>
                            <div class="category-buttons">
                                <!-- Buttons are now generated dynamically -->
                            </div>
                            <div class="low-stock-alert" id="low-stock-alert" style="display: none;">
                                <h3 data-translate="lowStock">${t('lowStock')}</h3>
                                <div id="low-stock-items"></div>
                            </div>
                        </section>

                        <!-- Products Grid -->
                        <section class="products-section">
                            <h2 data-translate="products">${t('products')}</h2>
                            <div class="products-grid" id="products-grid">
                                <!-- Products will be loaded here -->
                            </div>
                        </section>

                        <!-- Shopping Cart -->
                        <section class="cart-section">
                            <div class="current-client-section">
                                <label for="main-client-selector" data-translate="selectClient">${t('selectClient')}</label>
                                <select id="main-client-selector">
                                    <!-- Client options populated by JS -->
                                </select>
                            </div>
                            <h2 data-translate="currentOrder">${t('currentOrder')}</h2>
                            <div class="cart-items" id="cart-items">
                                <p class="empty-cart" data-translate="emptyCart">${t('emptyCart')}</p>
                            </div>
                            <div class="cart-summary">
                                <div class="total-line">
                                    <span data-translate="subtotal">${t('subtotal')}:</span>
                                    <span id="subtotal">${formatCurrency(0)}</span>
                                </div>
                                <div class="total-line">
                                    <span data-translate="tax">${t('tax')} (${(settings.taxRate * 100).toFixed(0)}%):</span>
                                    <span id="tax">${formatCurrency(0)}</span>
                                </div>
                                <div class="total-line total">
                                    <span data-translate="total">${t('total')}:</span>
                                    <span id="total">${formatCurrency(0)}</span>
                                </div>
                            </div>
                            <div class="cart-actions">
                                <button class="btn btn-danger" id="clear-cart" data-translate="clearCart">${t('clearCart')}</button>
                                <button class="btn btn-success" id="print-receipt" data-translate="printReceipt">${t('printReceipt')}</button>
                                <button class="btn btn-info" id="print-invoice" data-translate="printInvoice">${t('printInvoice')}</button>
                                <button class="btn btn-primary" id="checkout" data-translate="checkout">${t('checkout')}</button>
                            </div>
                            <div class="management-actions">
                                <button class="btn btn-warning btn-small" onclick="printLowStockReport()" data-translate="printLowStock">${t('printLowStock')}</button>
                                <button class="btn btn-danger btn-small" onclick="printExpiredItemsReport()" data-translate="printExpired">${t('printExpired')}</button>
                            </div>
                        </section>
                    </div>
                </div>

                <!-- Other views will be added here -->
                <div id="inventory-view" class="view" style="display: none;">
                    <h2 data-translate="inventory">${t('inventory')}</h2>
                    <div class="inventory-content">
                        <!-- Inventory management will be added -->
                    </div>
                </div>

                <div id="clients-view" class="view" style="display: none;">
                    <h2 data-translate="clients">${t('clients')}</h2>
                    <div class="clients-content">
                        <!-- Client management will be loaded here -->
                    </div>
                </div>

                <div id="suppliers-view" class="view" style="display: none;">
                    <h2 data-translate="suppliers">${t('suppliers')}</h2>
                    <div class="suppliers-content"></div>
                </div>

                <div id="categories-view" class="view" style="display: none;">
                    <h2 data-translate="categoryManagement">${t('categoryManagement')}</h2>
                    <div class="categories-content">
                        <!-- Categories management will be loaded here -->
                    </div>
                </div>

                <div id="reports-view" class="view" style="display: none;">
                    <h2 data-translate="reports">${t('reports')}</h2>
                    <div class="reports-content">
                        <!-- Reports will be added -->
                    </div>
                </div>

                <div id="users-view" class="view" style="display: none;">
                    <h2 data-translate="users">${t('users')}</h2>
                    <div class="users-content">
                        <!-- User management will be added -->
                    </div>
                </div>

                <div id="settings-view" class="view" style="display: none;">
                    <h2 data-translate="settings">${t('settings')}</h2>
                    <div class="settings-content">
                        <!-- Settings will be added -->
                    </div>
                </div>
            </main>
        </div>

        <!-- Checkout Modal -->
        <div class="modal" id="checkout-modal">
            <div class="modal-content">
                <h2 data-translate="checkout">${t('checkout')}</h2>
                <div class="form-group">
                    <label for="client-selector" data-translate="selectClient">${t('selectClient')}</label>
                    <select id="client-selector">
                        <option value="0" data-translate="noClient">${t('noClient')}</option>
                        ${clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    </select>
                </div>
                <div class="checkout-summary">
                    <div class="checkout-items" id="checkout-items"></div>
                    <div class="checkout-total">
                        <h3><span data-translate="total">${t('total')}</span>: <span id="checkout-total-amount"></span></h3>
                    </div>
                </div>
                <div class="payment-methods">
                    <h3>Payment Method:</h3>
                    <button class="payment-btn" data-method="cash">💵 Cash</button>
                    <button class="payment-btn" data-method="card">💳 Card</button>
                    <button class="payment-btn" data-method="digital">📱 Digital</button>
                </div>
                <div class="payment-details" id="payment-details">
                    <!-- Payment details will be shown here -->
                </div>
                <div class="modal-actions">
                    <button class="btn btn-secondary" id="cancel-checkout" data-translate="cancel">${t('cancel')}</button>
                    <button class="btn btn-warning" id="complete-unpaid-sale" data-translate="payLater">${t('payLater')}</button>
                    <button class="btn btn-primary" id="complete-paid-sale" data-translate="completePaidSale">${t('completePaidSale')}</button>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = mainHTML;
}

// ===== PERMISSION SYSTEM =====

function hasPermission(permission) {
    if (!currentUser) return false;
    const userRole = userRoles[currentUser.role];
    return userRole.permissions.includes('all') || userRole.permissions.includes(permission);
}

// ===== VIEW MANAGEMENT =====

function switchView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });

    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.style.display = 'block';
        currentView = viewName;
    }

    // Add active class to selected tab
    event.target.classList.add('active');

    // Load view-specific content
    switch(viewName) {
        case 'inventory':
            loadInventoryView();
            break;
        case 'suppliers':
            loadSuppliersView();
            break;
        case 'clients':
            loadClientsView();
            break;
        case 'categories':
            loadCategoriesView();
            break;
        case 'reports':
            loadReportsView();
            break;
        case 'users':
            loadUsersView();
            break;
        case 'settings':
            loadSettingsView();
            break;
    }
}

// ===== INVENTORY MANAGEMENT =====

function loadInventoryView() {
    const inventoryView = document.getElementById('inventory-view');
    const categoryOptions = categories
        .filter(cat => cat.active)
        .map(category => {
            const categoryKey = category.name.toLowerCase();
            return `<option value="${categoryKey}">${getCategoryName(category)}</option>`;
        }).join('');

    inventoryView.innerHTML = `
        <div class="inventory-header">
            <h2 data-translate="inventory">${t('inventory')}</h2>
            <div class="inventory-actions">
                <button class="btn btn-primary" onclick="showAddProductModal()" data-translate="addProduct">${t('addProduct')}</button>
                <button class="btn btn-secondary" onclick="exportInventory()" data-translate="export">${t('export')}</button>
                <button class="btn btn-warning" onclick="printLowStockReport()" data-translate="lowStockReport">${t('lowStockReport')}</button>
            </div>
        </div>

        <div class="inventory-filters">
            <input type="text" id="inventory-search" placeholder="${t('search')}..." onkeyup="filterInventory()">
            <select id="category-filter" onchange="filterInventory()">
                <option value="all">${t('allItems')}</option>
                ${categoryOptions}
            </select>
            <select id="stock-filter" onchange="filterInventory()">
                <option value="all" data-translate="allStockLevels">${t('allStockLevels')}</option>
                <option value="low" data-translate="lowStockOnly">${t('lowStockOnly')}</option>
                <option value="out" data-translate="outOfStockOnly">${t('outOfStockOnly')}</option>
            </select>
        </div>

        <div class="inventory-table">
            <table>
                <thead>
                    <tr>
                        <th data-translate="name">${t('name')}</th>
                        <th data-translate="category">${t('category')}</th>
                        <th data-translate="price">${t('price')}</th>
                        <th data-translate="stock">${t('stock')}</th>
                        <th data-translate="minStock">${t('minStock')}</th>
                        <th data-translate="barcode">${t('barcode')}</th>
                        <th data-translate="supplier">${t('supplier')}</th>
                        <th data-translate="actions">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody id="inventory-tbody">
                    ${generateInventoryRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateInventoryRows() {
    return products.map(product => {
        const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
        const isLowStock = product.stock <= product.minStock;
        const isOutOfStock = product.stock === 0;

        return `
            <tr class="${isOutOfStock ? 'out-of-stock' : isLowStock ? 'low-stock' : ''}">
                <td>${productName}</td>
                <td>${t(product.category)}</td>
                <td>${formatCurrency(product.price)}</td>
                <td>
                    <span class="stock-level ${isOutOfStock ? 'out' : isLowStock ? 'low' : 'normal'}">
                        ${product.stock}
                    </span>
                </td>
                <td>${product.minStock}</td>
                <td>${product.barcode}</td>
                <td>${product.supplier || t('notAvailable')}</td>
                <td class="actions">
                    <button class="btn-small btn-primary" onclick="editProduct(${product.id})" data-translate="edit">${t('edit')}</button>
                    <button class="btn-small btn-success" onclick="adjustStock(${product.id})" data-translate="adjustStock">${t('adjustStock')}</button>
                    <button class="btn-small btn-danger" onclick="deleteProduct(${product.id})" data-translate="delete">${t('delete')}</button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterInventory() {
    const searchTerm = document.getElementById('inventory-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const stockFilter = document.getElementById('stock-filter').value;

    let filteredProducts = products.filter(product => {
        const name = (currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name).toLowerCase();
        const matchesSearch = name.includes(searchTerm) || product.barcode.includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;

        let matchesStock = true;
        if (stockFilter === 'low') {
            matchesStock = product.stock <= product.minStock && product.stock > 0;
        } else if (stockFilter === 'out') {
            matchesStock = product.stock === 0;
        }

        return matchesSearch && matchesCategory && matchesStock;
    });

    document.getElementById('inventory-tbody').innerHTML = filteredProducts.map(product => {
        const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
        const isLowStock = product.stock <= product.minStock;
        const isOutOfStock = product.stock === 0;

        return `
            <tr class="${isOutOfStock ? 'out-of-stock' : isLowStock ? 'low-stock' : ''}">
                <td>${productName}</td>
                <td>${t(product.category)}</td>
                <td>${formatCurrency(product.price)}</td>
                <td>
                    <span class="stock-level ${isOutOfStock ? 'out' : isLowStock ? 'low' : 'normal'}">
                        ${product.stock}
                    </span>
                </td>
                <td>${product.minStock}</td>
                <td>${product.barcode}</td>
                <td>${product.supplier || t('notAvailable')}</td>
                <td class="actions">
                    <button class="btn-small btn-primary" onclick="editProduct(${product.id})" data-translate="edit">${t('edit')}</button>
                    <button class="btn-small btn-success" onclick="adjustStock(${product.id})" data-translate="adjustStock">${t('adjustStock')}</button>
                    <button class="btn-small btn-danger" onclick="deleteProduct(${product.id})" data-translate="delete">${t('delete')}</button>
                </td>
            </tr>
        `;
    }).join('');
}

function showAddProductModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${t('addProduct')}</h2>
            <form onsubmit="addNewProduct(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('name')} (English):</label>
                        <input type="text" id="product-name" required>
                    </div>
                    <div class="form-group">
                        <label>${t('name')} (Arabic):</label>
                        <input type="text" id="product-name-ar">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('category')}:</label>
                        <select id="product-category" required>
                            <option value="food">${t('food')}</option>
                            <option value="drinks">${t('drinks')}</option>
                            <option value="snacks">${t('snacks')}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t('price')}:</label>
                        <input type="number" id="product-price" step="0.01" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('stock')}:</label>
                        <input type="number" id="product-stock" required>
                    </div>
                    <div class="form-group">
                        <label data-translate="minStock">${t('minStock')}:</label>
                        <input type="number" id="product-min-stock" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label data-translate="barcode">${t('barcode')}:</label>
                        <input type="text" id="product-barcode" required>
                    </div>
                    <div class="form-group">
                        <label data-translate="supplier">${t('supplier')}:</label>
                        <input type="text" id="product-supplier">
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewProduct(event) {
    event.preventDefault();

    const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: document.getElementById('product-name').value,
        nameAr: document.getElementById('product-name-ar').value,
        category: document.getElementById('product-category').value,
        price: parseFloat(document.getElementById('product-price').value),
        stock: parseInt(document.getElementById('product-stock').value),
        minStock: parseInt(document.getElementById('product-min-stock').value),
        maxStock: parseInt(document.getElementById('product-stock').value) * 5,
        barcode: document.getElementById('product-barcode').value,
        supplier: document.getElementById('product-supplier').value,
        cost: parseFloat(document.getElementById('product-price').value) * 0.6,
        active: true
    };

    products.push(newProduct);
    saveToStorage('products', products);

    closeModal();
    loadInventoryView();
    displayProducts(); // Refresh main products view

    alert(`Product "${newProduct.name}" added successfully!`);
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${t('editProduct')}</h2>
            <form onsubmit="updateProduct(event, ${productId})">
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('name')} (English):</label>
                        <input type="text" id="edit-product-name" value="${product.name}" required>
                    </div>
                    <div class="form-group">
                        <label>${t('name')} (Arabic):</label>
                        <input type="text" id="edit-product-name-ar" value="${product.nameAr || ''}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('category')}:</label>
                        <select id="edit-product-category" required>
                            <option value="food" ${product.category === 'food' ? 'selected' : ''}>${t('food')}</option>
                            <option value="drinks" ${product.category === 'drinks' ? 'selected' : ''}>${t('drinks')}</option>
                            <option value="snacks" ${product.category === 'snacks' ? 'selected' : ''}>${t('snacks')}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t('price')}:</label>
                        <input type="number" id="edit-product-price" step="0.01" value="${product.price}" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t('stock')}:</label>
                        <input type="number" id="edit-product-stock" value="${product.stock}" required>
                    </div>
                    <div class="form-group">
                        <label data-translate="minStock">${t('minStock')}:</label>
                        <input type="number" id="edit-product-min-stock" value="${product.minStock}" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label data-translate="barcode">${t('barcode')}:</label>
                        <input type="text" id="edit-product-barcode" value="${product.barcode}" required>
                    </div>
                    <div class="form-group">
                        <label data-translate="supplier">${t('supplier')}:</label>
                        <input type="text" id="edit-product-supplier" value="${product.supplier || ''}">
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateProduct(event, productId) {
    event.preventDefault();

    const product = products.find(p => p.id === productId);
    if (!product) return;

    product.name = document.getElementById('edit-product-name').value;
    product.nameAr = document.getElementById('edit-product-name-ar').value;
    product.category = document.getElementById('edit-product-category').value;
    product.price = parseFloat(document.getElementById('edit-product-price').value);
    product.stock = parseInt(document.getElementById('edit-product-stock').value);
    product.minStock = parseInt(document.getElementById('edit-product-min-stock').value);
    product.barcode = document.getElementById('edit-product-barcode').value;
    product.supplier = document.getElementById('edit-product-supplier').value;

    saveToStorage('products', products);

    closeModal();
    loadInventoryView();
    displayProducts(); // Refresh main products view

    alert(`Product "${product.name}" updated successfully!`);
}

function calculateClientDebt(clientId) {
    return salesHistory
        .filter(sale => sale.clientId === clientId && sale.paymentStatus === 'unpaid')
        .reduce((sum, sale) => sum + sale.total, 0);
}

function markSaleAsPaid(saleId) {
    const sale = salesHistory.find(s => s.id === saleId);
    if (sale) {
        sale.paymentStatus = 'paid';
        saveToStorage('salesHistory', salesHistory);
        alert(`Sale #${sale.id} marked as paid.`);
        // Refresh the view
        loadClientsView();
        // Close any open modals
        closeModal();
    }
}

function printSupplierCreditReport(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    if (!supplier) return;

    const unpaidPurchases = purchases.filter(p => p.supplierId === supplierId && p.paymentStatus === 'unpaid');
    const totalDebt = unpaidPurchases.reduce((sum, purchase) => sum + purchase.total, 0);
    const locale = getLocaleForDate();

    const reportWindow = window.open('', '_blank');
    const reportHTML = `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8">
            <title>${t('supplierStatement')} - ${supplier.name}</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; font-size: 14px; }
                .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px; }
                .company-info h1 { margin: 0 0 10px 0; }
                .report-details { text-align: right; }
                .report-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .supplier-info { margin-bottom: 30px; background: #f8f9fa; padding: 15px; border-radius: 8px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                th { background: #f2f2f2; }
                .total-row { font-weight: bold; background: #e9ecef; }
                .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #666; }
                [dir="rtl"] .report-details, [dir="rtl"] th, [dir="rtl"] td { text-align: right; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-info">
                    ${settings.printableLogo ?
                        `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                        `<h1>${settings.companyName}</h1>`
                    }
                </div>
                <div class="report-details"><div class="report-title">${t('statementOfAccount')}</div><div><strong>${t('date')}:</strong> ${new Date().toLocaleDateString(locale)}</div></div>
            </div>
            <div class="supplier-info">
                <h3>${t('supplier')}</h3>
                <p><strong>${t('name')}:</strong> ${supplier.name}</p>
                <p><strong>${t('contactPerson')}:</strong> ${supplier.contactPerson}</p>
                <p><strong>${t('phone')}:</strong> ${supplier.phone}</p>
            </div>
            <h3>${t('unpaidPurchases')}</h3>
            <table>
                <thead><tr><th>${t('date')}</th><th>${t('purchases')} #</th><th>${t('total')}</th></tr></thead>
                <tbody>
                    ${unpaidPurchases.map(p => `<tr><td>${new Date(p.date).toLocaleDateString(locale)}</td><td>${p.id}</td><td>${formatCurrency(p.total)}</td></tr>`).join('')}
                    <tr class="total-row"><td colspan="2"><strong>${t('outstandingBalance')}</strong></td><td><strong>${formatCurrency(totalDebt)}</strong></td></tr>
                </tbody>
            </table>
            <div class="footer"><p>${settings.receiptFooter}</p></div>
        </body></html>
    `;
    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

function printClientCreditReport(clientId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    const unpaidSales = salesHistory.filter(s => s.clientId === clientId && s.paymentStatus === 'unpaid');
    const totalDebt = unpaidSales.reduce((sum, sale) => sum + sale.total, 0);
    const locale = getLocaleForDate();

    const reportWindow = window.open('', '_blank');
    const reportHTML = `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8">
            <title>${t('clientStatement')} - ${client.name}</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; font-size: 14px; }
                .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px; }
                .company-info h1 { margin: 0 0 10px 0; }
                .report-details { text-align: right; }
                .report-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .client-info { margin-bottom: 30px; background: #f8f9fa; padding: 15px; border-radius: 8px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                th { background: #f2f2f2; }
                .total-row { font-weight: bold; background: #e9ecef; }
                .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #666; }
                [dir="rtl"] .report-details, [dir="rtl"] th, [dir="rtl"] td { text-align: right; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-info">
                    ${settings.printableLogo ?
                        `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                        `<h1>${settings.companyName}</h1>`
                    }
                    <div>${settings.companyAddress}</div>
                    <div>${settings.companyPhone}</div>
                </div>
                <div class="report-details">
                    <div class="report-title">${t('statementOfAccount')}</div>
                    <div><strong>${t('date')}:</strong> ${new Date().toLocaleDateString(locale)}</div>
                </div>
            </div>

            <div class="client-info">
                <h3>${t('clientInfo')}</h3>
                <p><strong>${t('clientName')}:</strong> ${client.name}</p>
                <p><strong>${t('clientPhone')}:</strong> ${client.phone}</p>
                <p><strong>${t('clientAddress')}:</strong> ${client.address}</p>
            </div>

            <h3>${t('unpaidPurchases')}</h3>
            <table>
                <thead>
                    <tr>
                        <th>${t('date')}</th>
                        <th>${t('receipt')} #</th>
                        <th>${t('total')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${unpaidSales.map(sale => `
                        <tr>
                            <td>${new Date(sale.date).toLocaleDateString(locale)}</td>
                            <td>${sale.id}</td>
                            <td>${formatCurrency(sale.total)}</td>
                        </tr>
                    `).join('')}
                    <tr class="total-row">
                        <td colspan="2"><strong>${t('outstandingBalance')}</strong></td>
                        <td><strong>${formatCurrency(totalDebt)}</strong></td>
                    </tr>
                </tbody>
            </table>

            <div class="footer">
                <p>${settings.receiptFooter}</p>
            </div>
        </body>
        </html>
    `;

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

function showClientDebts(clientId) {
    const client = clients.find(c => c.id === clientId);
    const unpaidSales = salesHistory.filter(s => s.clientId === clientId && s.paymentStatus === 'unpaid');

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="min-width: 700px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2>${t('unpaid')} ${t('sales')} for ${client.name}</h2>
                <button class="btn btn-info" onclick="printClientCreditReport(${clientId})">${t('print')}</button>
            </div>
            <div class="sales-table">
                <table>
                    <thead>
                        <tr>
                            <th>${t('date')}</th>
                            <th>${t('receipt')} #</th>
                            <th>${t('total')}</th>
                            <th>${t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${unpaidSales.length > 0 ? unpaidSales.map(sale => `
                            <tr>
                                <td>${new Date(sale.date).toLocaleDateString()}</td>
                                <td>${sale.id}</td>
                                <td>${formatCurrency(sale.total)}</td>
                                <td><button class="btn btn-success btn-small" onclick="markSaleAsPaid('${sale.id}')">${t('markAsPaid')}</button></td>
                            </tr>
                        `).join('') : `<tr><td colspan="4">No unpaid sales.</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="modal-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function loadClientsView() {
    const clientsView = document.getElementById('clients-view');
    clientsView.innerHTML = `
        <div class="users-header">
            <h2 data-translate="clients">${t('clients')}</h2>
            <div class="users-actions">
                <button class="btn btn-primary" onclick="showAddClientModal()" data-translate="addClient">${t('addClient')}</button>
            </div>
        </div>
        <div class="users-table">
            <table>
                <thead>
                    <tr>
                        <th>${t('name')}</th>
                        <th>${t('phone')}</th>
                        <th>${t('address')}</th>
                        <th>${t('clientDebt')}</th>
                        <th>${t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateClientsRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateClientsRows() {
    return clients.map(client => {
        const debt = calculateClientDebt(client.id);
        return `
            <tr>
                <td>${client.name}</td>
                <td>${client.phone}</td>
                <td>${client.address}</td>
                <td>${formatCurrency(debt)}</td>
                <td class="actions">
                    <button class="btn-small btn-primary" onclick="editClient(${client.id})">${t('edit')}</button>
                    <button class="btn-small btn-info" onclick="showClientDebts(${client.id})">${t('viewDebts')}</button>
                    ${debt > 0 ? `<button class="btn-small btn-warning" onclick="printClientCreditReport(${client.id})">${t('print')}</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

function showAddClientModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <form onsubmit="addNewClient(event)">
                <div class="form-group">
                    <label>${t('clientName')}:</label>
                    <input type="text" id="client-name" required>
                </div>
                <div class="form-group">
                    <label>${t('clientPhone')}:</label>
                    <input type="text" id="client-phone">
                </div>
                <div class="form-group">
                    <label>${t('clientAddress')}:</label>
                    <input type="text" id="client-address">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewClient(event) {
    event.preventDefault();
    const newClient = {
        id: generateId(),
        name: document.getElementById('client-name').value,
        phone: document.getElementById('client-phone').value,
        address: document.getElementById('client-address').value,
    };
    clients.push(newClient);
    saveToStorage('clients', clients);
    closeModal();
    loadClientsView();
    alert(`Client "${newClient.name}" added.`);
}

function editClient(clientId) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${t('editClient')}</h2>
            <form onsubmit="updateClient(event, ${clientId})">
                <div class="form-group">
                    <label>${t('clientName')}:</label>
                    <input type="text" id="edit-client-name" value="${client.name}" required>
                </div>
                <div class="form-group">
                    <label>${t('clientPhone')}:</label>
                    <input type="text" id="edit-client-phone" value="${client.phone}">
                </div>
                <div class="form-group">
                    <label>${t('clientAddress')}:</label>
                    <input type="text" id="edit-client-address" value="${client.address}">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateClient(event, clientId) {
    event.preventDefault();
    const client = clients.find(c => c.id === clientId);
    if (client) {
        client.name = document.getElementById('edit-client-name').value;
        client.phone = document.getElementById('edit-client-phone').value;
        client.address = document.getElementById('edit-client-address').value;
        saveToStorage('clients', clients);
        closeModal();
        loadClientsView();
        alert(`Client "${client.name}" updated.`);
    }
}

function adjustStock(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const adjustment = prompt(`Current stock: ${product.stock}\nEnter adjustment (+/- number):`);
    if (adjustment === null) return;

    const adjustmentValue = parseInt(adjustment);
    if (isNaN(adjustmentValue)) {
        alert('Please enter a valid number');
        return;
    }

    const newStock = product.stock + adjustmentValue;
    if (newStock < 0) {
        alert('Stock cannot be negative');
        return;
    }

    product.stock = newStock;
    saveToStorage('products', products);

    loadInventoryView();
    displayProducts(); // Refresh main products view

    alert(`Stock adjusted for "${product.name}". New stock: ${product.stock}`);
}

// ===== SUPPLIER & PURCHASE MANAGEMENT =====

function loadSuppliersView() {
    const suppliersView = document.getElementById('suppliers-view');
    suppliersView.innerHTML = `
        <div class="users-header">
            <h2 data-translate="suppliers">${t('suppliers')}</h2>
            <div class="users-actions">
                <button class="btn btn-primary" onclick="showAddSupplierModal()" data-translate="addSupplier">${t('addSupplier')}</button>
            </div>
        </div>
        <div class="users-table">
            <table>
                <thead>
                    <tr>
                        <th>${t('name')}</th>
                        <th>${t('contactPerson')}</th>
                        <th>${t('phone')}</th>
                        <th>${t('email')}</th>
                        <th>${t('unpaidPurchases')}</th>
                        <th>${t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateSuppliersRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateSuppliersRows() {
    return suppliers.map(supplier => {
        const debt = purchases
            .filter(p => p.supplierId === supplier.id && p.paymentStatus === 'unpaid')
            .reduce((sum, p) => sum + p.total, 0);

        return `
            <tr>
                <td>${supplier.name}</td>
                <td>${supplier.contactPerson}</td>
                <td>${supplier.phone}</td>
                <td>${supplier.email}</td>
                <td>${formatCurrency(debt)}</td>
                <td class="actions">
                    <button class="btn-small btn-primary" onclick="editSupplier(${supplier.id})">${t('edit')}</button>
                    <button class="btn-small btn-success" onclick="showRecordPurchaseModal(${supplier.id})">${t('recordPurchase')}</button>
                    <button class="btn-small btn-info" onclick="showSupplierPurchases(${supplier.id})">${t('viewPurchases')}</button>
                    ${debt > 0 ? `<button class="btn-small btn-warning" onclick="printSupplierCreditReport(${supplier.id})">${t('print')}</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

function showAddSupplierModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${t('addSupplier')}</h2>
            <form onsubmit="addNewSupplier(event)">
                <div class="form-group"><label>${t('name')}:</label><input type="text" id="supplier-name" required></div>
                <div class="form-group"><label>${t('contactPerson')}:</label><input type="text" id="supplier-contact"></div>
                <div class="form-group"><label>${t('phone')}:</label><input type="text" id="supplier-phone"></div>
                <div class="form-group"><label>${t('email')}:</label><input type="email" id="supplier-email"></div>
                <div class="form-group"><label>${t('address')}:</label><input type="text" id="supplier-address"></div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewSupplier(event) {
    event.preventDefault();
    const newSupplier = {
        id: generateId(),
        name: document.getElementById('supplier-name').value,
        contactPerson: document.getElementById('supplier-contact').value,
        phone: document.getElementById('supplier-phone').value,
        email: document.getElementById('supplier-email').value,
        address: document.getElementById('supplier-address').value,
    };
    suppliers.push(newSupplier);
    saveToStorage('suppliers', suppliers);
    closeModal();
    loadSuppliersView();
    alert(`Supplier "${newSupplier.name}" added.`);
}

function editSupplier(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    if (!supplier) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${t('editSupplier')}</h2>
            <form onsubmit="updateSupplier(event, ${supplierId})">
                <div class="form-group"><label>${t('name')}:</label><input type="text" id="edit-supplier-name" value="${supplier.name}" required></div>
                <div class="form-group"><label>${t('contactPerson')}:</label><input type="text" id="edit-supplier-contact" value="${supplier.contactPerson || ''}"></div>
                <div class="form-group"><label>${t('phone')}:</label><input type="text" id="edit-supplier-phone" value="${supplier.phone || ''}"></div>
                <div class="form-group"><label>${t('email')}:</label><input type="email" id="edit-supplier-email" value="${supplier.email || ''}"></div>
                <div class="form-group"><label>${t('address')}:</label><input type="text" id="edit-supplier-address" value="${supplier.address || ''}"></div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateSupplier(event, supplierId) {
    event.preventDefault();
    const supplier = suppliers.find(s => s.id === supplierId);
    if (supplier) {
        supplier.name = document.getElementById('edit-supplier-name').value;
        supplier.contactPerson = document.getElementById('edit-supplier-contact').value;
        supplier.phone = document.getElementById('edit-supplier-phone').value;
        supplier.email = document.getElementById('edit-supplier-email').value;
        supplier.address = document.getElementById('edit-supplier-address').value;
        saveToStorage('suppliers', suppliers);
        closeModal();
        loadSuppliersView();
        alert(`Supplier "${supplier.name}" updated.`);
    }
}

function showSupplierPurchases(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    const supplierPurchases = purchases.filter(p => p.supplierId === supplierId).reverse();

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="min-width: 700px;">
            <h2>${t('purchases')} from ${supplier.name}</h2>
            <div class="sales-table">
                <table>
                    <thead>
                        <tr>
                            <th>${t('date')}</th>
                            <th>${t('total')}</th>
                            <th>${t('paymentStatus')}</th>
                            <th>${t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${supplierPurchases.length > 0 ? supplierPurchases.map(p => `
                            <tr>
                                <td>${new Date(p.date).toLocaleDateString()}</td>
                                <td>${formatCurrency(p.total)}</td>
                                <td><span class="status-badge ${p.paymentStatus === 'paid' ? 'active' : 'inactive'}">${t(p.paymentStatus)}</span></td>
                                <td>
                                    ${p.paymentStatus === 'unpaid' ? `<button class="btn btn-success btn-small" onclick="markPurchaseAsPaid('${p.id}')">${t('markAsPaid')}</button>` : ''}
                                </td>
                            </tr>
                        `).join('') : `<tr><td colspan="4">No purchases recorded.</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="modal-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function markPurchaseAsPaid(purchaseId) {
    const purchase = purchases.find(p => p.id === purchaseId);
    if (purchase) {
        purchase.paymentStatus = 'paid';
        saveToStorage('purchases', purchases);
        alert(`Purchase #${purchase.id} marked as paid.`);
        closeModal();
        loadSuppliersView();
    }
}

function showRecordPurchaseModal(supplierId) {
    // Implementation for recording a new purchase would go here.
    // This is a complex modal involving adding multiple items.
    // For now, we'll add a placeholder alert.
    alert(`Functionality to record a new purchase for supplier ID ${supplierId} is under development.`);
    // In a full implementation, this would open a modal to add products, quantities, and costs,
    // which would then update inventory upon saving.
}

function deleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        const index = products.findIndex(p => p.id === productId);
        products.splice(index, 1);
        saveToStorage('products', products);

        loadInventoryView();
        displayProducts(); // Refresh main products view

        alert(`Product "${product.name}" deleted successfully!`);
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.remove());
}

// ===== REPORTS MANAGEMENT =====

function loadReportsView() {
    const reportsView = document.getElementById('reports-view');
    reportsView.innerHTML = `
        <div class="reports-header">
            <h2 data-translate="reports">${t('reports')}</h2>
            <div class="reports-actions">
                <button class="btn btn-primary" onclick="generateDailyReport()" data-translate="dailyReport">${t('dailyReport')}</button>
                <button class="btn btn-secondary" onclick="generateWeeklyReport()" data-translate="weeklyReport">${t('weeklyReport')}</button>
                <button class="btn btn-info" onclick="toggleCharts()" data-translate="charts">${t('charts')}</button>
                <button class="btn btn-success" onclick="exportReports()" data-translate="export">${t('export')}</button>
            </div>
        </div>

        <div class="reports-dashboard">
            <div class="report-cards">
                <div class="report-card">
                    <h3 data-translate="todaysSales">${t('todaysSales')}</h3>
                    <div class="report-value">${formatCurrency(getTodaysSales())}</div>
                    <div class="report-subtitle">${getTodaysTransactions()} ${t('transactions')}</div>
                </div>
                <div class="report-card">
                    <h3 data-translate="thisWeek">${t('thisWeek')}</h3>
                    <div class="report-value">${formatCurrency(getWeekSales())}</div>
                    <div class="report-subtitle">${getWeekTransactions()} ${t('transactions')}</div>
                </div>
                <div class="report-card">
                    <h3 data-translate="lowStock">${t('lowStock')} ${t('products')}</h3>
                    <div class="report-value">${getLowStockCount()}</div>
                    <div class="report-subtitle">${t('itemsNeedRestocking')}</div>
                </div>
                <div class="report-card">
                    <h3 data-translate="totalProducts">${t('totalProducts')}</h3>
                    <div class="report-value">${products.length}</div>
                    <div class="report-subtitle">${t('activeProducts')}</div>
                </div>
            </div>

            <div class="charts-section" id="charts-section" style="display: none;">
                <div class="charts-container">
                    <div class="chart-card">
                        <h3 data-translate="salesChart">${t('salesChart')}</h3>
                        <canvas id="salesChart" width="400" height="200"></canvas>
                    </div>
                    <div class="chart-card">
                        <h3 data-translate="productChart">${t('productChart')}</h3>
                        <canvas id="productChart" width="400" height="200"></canvas>
                    </div>
                </div>
            </div>

            <div class="reports-content">
                <div class="report-section">
                    <h3 data-translate="recentSales">${t('recentSales')}</h3>
                    <div class="sales-table">
                        <table>
                            <thead>
                                <tr>
                                    <th data-translate="date">${t('date')}</th>
                                    <th data-translate="receipt">${t('receipt')} #</th>
                                    <th data-translate="cashier">${t('cashier')}</th>
                                    <th data-translate="products">${t('products')}</th>
                                    <th data-translate="total">${t('total')}</th>
                                    <th data-translate="paymentMethod">${t('paymentMethod')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateRecentSalesRows()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="report-section">
                    <h3 data-translate="topSellingProducts">${t('topSellingProducts')}</h3>
                    <div class="top-products">
                        ${generateTopProductsReport()}
                    </div>
                </div>

                <div class="report-section">
                    <h3 data-translate="cashierPerformance">${t('cashierPerformance')}</h3>
                    <div class="cashier-performance">
                        ${generateCashierPerformance()}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getTodaysSales() {
    const today = new Date().toDateString();
    return salesHistory
        .filter(sale => new Date(sale.date).toDateString() === today)
        .reduce((sum, sale) => sum + sale.total, 0);
}

function getTodaysTransactions() {
    const today = new Date().toDateString();
    return salesHistory.filter(sale => new Date(sale.date).toDateString() === today).length;
}

function getWeekSales() {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return salesHistory
        .filter(sale => new Date(sale.date) >= weekAgo)
        .reduce((sum, sale) => sum + sale.total, 0);
}

function getWeekTransactions() {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return salesHistory.filter(sale => new Date(sale.date) >= weekAgo).length;
}

function getLowStockCount() {
    return products.filter(product => product.stock <= product.minStock).length;
}

function generateRecentSalesRows() {
    const recentSales = salesHistory.slice(-10).reverse();
    return recentSales.map(sale => {
        const date = new Date(sale.date);
        return `
            <tr>
                <td>${date.toLocaleDateString()}</td>
                <td>${sale.id}</td>
                <td>${sale.cashier}</td>
                <td>${sale.items.length}</td>
                <td>${formatCurrency(sale.total)}</td>
                <td>${sale.paymentMethod}</td>
            </tr>
        `;
    }).join('');
}

function generateTopProductsReport() {
    const productSales = {};

    salesHistory.forEach(sale => {
        sale.items.forEach(item => {
            if (!productSales[item.id]) {
                productSales[item.id] = {
                    name: item.name,
                    quantity: 0,
                    revenue: 0
                };
            }
            productSales[item.id].quantity += item.quantity;
            productSales[item.id].revenue += item.price * item.quantity;
        });
    });

    const sortedProducts = Object.values(productSales)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);

    return sortedProducts.map((product, index) => `
        <div class="top-product-item">
            <span class="rank">#${index + 1}</span>
            <span class="product-name">${product.name}</span>
            <span class="quantity">${product.quantity} sold</span>
            <span class="revenue">${formatCurrency(product.revenue)}</span>
        </div>
    `).join('');
}

function generateCashierPerformance() {
    const cashierStats = {};

    salesHistory.forEach(sale => {
        if (!cashierStats[sale.cashier]) {
            cashierStats[sale.cashier] = {
                transactions: 0,
                revenue: 0
            };
        }
        cashierStats[sale.cashier].transactions++;
        cashierStats[sale.cashier].revenue += sale.total;
    });

    return Object.entries(cashierStats).map(([cashier, stats]) => `
        <div class="cashier-stat">
            <span class="cashier-name">${cashier}</span>
            <span class="transactions">${stats.transactions} transactions</span>
            <span class="revenue">${formatCurrency(stats.revenue)}</span>
        </div>
    `).join('');
}

function generateDailyReport() {
    const today = new Date().toDateString();
    const todaySales = salesHistory.filter(sale => new Date(sale.date).toDateString() === today);

    const reportWindow = window.open('', '_blank');
    const reportHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${t('dailyReport')} - ${today}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .summary { background: #f5f5f5; padding: 20px; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background: #667eea; color: white; }
                .total { font-weight: bold; background: #f0f0f0; }
            </style>
        </head>
        <body>
            <div class="header">
                ${settings.printableLogo ?
                    `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                    `<h1>${settings.companyName}</h1>`
                }
                <h2>${t('dailyReport')}</h2>
                <p>${t('date')}: ${today}</p>
            </div>

            <div class="summary">
                <h3>${t('summary')}</h3>
                <p>Total Sales: ${formatCurrency(todaySales.reduce((sum, sale) => sum + sale.total, 0))}</p>
                <p>Total Transactions: ${todaySales.length}</p>
                <p>Average Transaction: ${formatCurrency(todaySales.reduce((sum, sale) => sum + sale.total, 0) / todaySales.length || 0)}</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Receipt #</th>
                        <th>Cashier</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    ${todaySales.map(sale => `
                        <tr>
                            <td>${new Date(sale.date).toLocaleTimeString()}</td>
                            <td>${sale.id}</td>
                            <td>${sale.cashier}</td>
                            <td>${sale.items.length}</td>
                            <td>${formatCurrency(sale.total)}</td>
                            <td>${sale.paymentMethod}</td>
                        </tr>
                    `).join('')}
                    <tr class="total">
                        <td colspan="4"><strong>TOTAL</strong></td>
                        <td><strong>${formatCurrency(todaySales.reduce((sum, sale) => sum + sale.total, 0))}</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
    `;

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

function generateWeeklyReport() {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklySales = salesHistory.filter(sale => new Date(sale.date) >= weekAgo);

    const reportWindow = window.open('', '_blank');
    const reportHTML = `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <title>${t('weeklyReport')} - ${settings.companyName}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .summary { background: #f5f5f5; padding: 20px; margin-bottom: 20px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background: #667eea; color: white; }
                .total { font-weight: bold; background: #f0f0f0; }
                [dir="rtl"] th, [dir="rtl"] td { text-align: right; }
            </style>
        </head>
        <body>
            <div class="header">
                ${settings.printableLogo ?
                    `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                    `<h1>${settings.companyName}</h1>`
                }
                <h2>${t('weeklyReport')}</h2>
                <p>${t('date')}: ${weekAgo.toLocaleDateString()} - ${new Date().toLocaleDateString()}</p>
            </div>

            <div class="summary">
                <h3>${t('summary')}</h3>
                <p><strong>${t('totalSales')}:</strong> ${formatCurrency(weeklySales.reduce((sum, sale) => sum + sale.total, 0))}</p>
                <p><strong>${t('totalTransactions')}:</strong> ${weeklySales.length}</p>
                <p><strong>${t('averageTransaction')}:</strong> ${formatCurrency(weeklySales.reduce((sum, sale) => sum + sale.total, 0) / weeklySales.length || 0)}</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>${t('date')}</th>
                        <th>${t('receipt')} #</th>
                        <th>${t('cashier')}</th>
                        <th>${t('products')}</th>
                        <th>${t('total')}</th>
                        <th>${t('paymentMethod')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${weeklySales.map(sale => `
                        <tr>
                            <td>${new Date(sale.date).toLocaleDateString()}</td>
                            <td>${sale.id}</td>
                            <td>${sale.cashier}</td>
                            <td>${sale.items.length}</td>
                            <td>${formatCurrency(sale.total)}</td>
                            <td>${sale.paymentMethod}</td>
                        </tr>
                    `).join('')}
                    <tr class="total">
                        <td colspan="4"><strong>${t('total').toUpperCase()}</strong></td>
                        <td><strong>${formatCurrency(weeklySales.reduce((sum, sale) => sum + sale.total, 0))}</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
    `;

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

// ===== INVOICE SYSTEM =====

function printInvoice(sale = null) {
    if (!sale && cart.length === 0) {
        alert(t('emptyCart'));
        return;
    }

    let invoiceData;
    if (sale) {
        invoiceData = sale;
    } else {
        // Create temporary invoice data for current cart
        const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
        const tax = subtotal * settings.taxRate;
        const total = subtotal + tax;

        invoiceData = {
            id: 'INV-' + Date.now(),
            date: new Date().toISOString(),
            cashier: currentUser.name,
            items: [...cart],
            subtotal: subtotal / currencies[currentCurrency].rate,
            tax: tax / currencies[currentCurrency].rate,
            total: total / currencies[currentCurrency].rate,
            paymentMethod: 'N/A',
            currency: currentCurrency
        };
    }

    const invoiceWindow = window.open('', '_blank');
    const invoiceHTML = generateInvoiceHTML(invoiceData);

    invoiceWindow.document.write(invoiceHTML);
    invoiceWindow.document.close();
    invoiceWindow.focus();
    invoiceWindow.print();
}

function generateInvoiceHTML(sale) {
    const date = new Date(sale.date);
    const formattedDate = date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US');
    const formattedTime = date.toLocaleTimeString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US');

    return `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8">
            <title>${t('businessInvoice')} - ${sale.id}</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #333;
                }
                .invoice-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 40px;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 20px;
                }
                .company-info h1 {
                    color: #667eea;
                    margin: 0 0 10px 0;
                    font-size: 28px;
                }
                .invoice-details {
                    text-align: right;
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                }
                .invoice-title {
                    font-size: 24px;
                    color: #667eea;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .customer-section {
                    margin: 30px 0;
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                }
                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 30px 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .items-table th, .items-table td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                .items-table th {
                    background: #667eea;
                    color: white;
                    font-weight: bold;
                }
                .items-table tr:nth-child(even) {
                    background: #f8f9fa;
                }
                .totals-section {
                    margin-top: 30px;
                    display: flex;
                    justify-content: flex-end;
                }
                .totals-table {
                    width: 300px;
                    border-collapse: collapse;
                }
                .totals-table td {
                    padding: 8px 15px;
                    border: 1px solid #ddd;
                }
                .total-row {
                    font-weight: bold;
                    background: #667eea;
                    color: white;
                    font-size: 16px;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    color: #666;
                }
                [dir="rtl"] .invoice-details {
                    text-align: left;
                }
                [dir="rtl"] .items-table th, [dir="rtl"] .items-table td {
                    text-align: right;
                }
                @media print {
                    body { margin: 0; padding: 10px; }
                }
            </style>
        </head>
        <body>
            <div class="invoice-header">
                <div class="company-info">
                    ${settings.printableLogo ?
                        `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                        `<h1>${settings.companyName}</h1>`
                    }
                    <div>${settings.companyAddress}</div>
                    <div>${settings.companyPhone}</div>
                </div>
                <div class="invoice-details">
                    <div class="invoice-title">${t('businessInvoice')}</div>
                    <div><strong>${t('invoice')} #:</strong> ${sale.id}</div>
                    <div><strong>${t('date')}:</strong> ${formattedDate}</div>
                    <div><strong>${t('time')}:</strong> ${formattedTime}</div>
                    <div><strong>${t('cashier')}:</strong> ${sale.cashier}</div>
                </div>
            </div>

            <div class="customer-section">
                <h3>${t('customerInfo')}</h3>
                <div><strong>${t('currency')}:</strong> ${getCurrencyName(sale.currency)}</div>
                <div><strong>${t('paymentMethod')}:</strong> ${sale.paymentMethod}</div>
            </div>

            <table class="items-table">
                <thead>
                    <tr>
                        <th>${t('description')}</th>
                        <th>${t('quantity')}</th>
                        <th>${t('price')}</th>
                        <th>${t('total')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${sale.items.map(item => {
                        const itemName = getProductName(item);
                        const itemTotal = item.price * item.quantity;
                        return `
                            <tr>
                                <td>${itemName}</td>
                                <td>${item.quantity}</td>
                                <td>${formatCurrency(item.price)}</td>
                                <td>${formatCurrency(itemTotal)}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>

            <div class="totals-section">
                <table class="totals-table">
                    <tr>
                        <td>${t('subtotal')}:</td>
                        <td>${formatCurrency(sale.subtotal)}</td>
                    </tr>
                    <tr>
                        <td>${t('tax')} (${(settings.taxRate * 100).toFixed(0)}%):</td>
                        <td>${formatCurrency(sale.tax)}</td>
                    </tr>
                    <tr class="total-row">
                        <td>${t('total')}:</td>
                        <td>${formatCurrency(sale.total)}</td>
                    </tr>
                </table>
            </div>

            <div class="footer">
                <div>${settings.receiptFooter}</div>
                <div style="margin-top: 10px; font-size: 12px;">
                    ${t('businessInvoice')} - ${settings.companyName}
                </div>
            </div>
        </body>
        </html>
    `;
}

// ===== LOW STOCK & EXPIRED ITEMS PRINTING =====

function printLowStockReport() {
    const lowStockProducts = products.filter(product =>
        product.active && product.stock <= product.minStock
    );

    if (lowStockProducts.length === 0) {
        alert(t('noLowStockItems'));
        return;
    }

    const reportWindow = window.open('', '_blank');
    const reportHTML = generateLowStockReportHTML(lowStockProducts);

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

function printExpiredItemsReport() {
    const expiredProducts = products.filter(product =>
        product.active && product.expiryDate && new Date(product.expiryDate) < new Date()
    );

    const nearExpiryProducts = products.filter(product =>
        product.active && product.expiryDate &&
        new Date(product.expiryDate) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) &&
        new Date(product.expiryDate) >= new Date()
    );

    if (expiredProducts.length === 0 && nearExpiryProducts.length === 0) {
        alert(t('noExpiredItems'));
        return;
    }

    const reportWindow = window.open('', '_blank');
    const reportHTML = generateExpiredItemsReportHTML(expiredProducts, nearExpiryProducts);

    reportWindow.document.write(reportHTML);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.print();
}

function generateLowStockReportHTML(lowStockProducts) {
    const currentDate = new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US');

    return `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8">
            <title>${t('lowStockReport')} - ${currentDate}</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #dc3545;
                    padding-bottom: 20px;
                }
                .header h1 {
                    color: #dc3545;
                    margin-bottom: 10px;
                }
                .summary {
                    background: #f8d7da;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    border-left: 4px solid #dc3545;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background: #dc3545;
                    color: white;
                    font-weight: bold;
                }
                tr:nth-child(even) {
                    background: #f8f9fa;
                }
                .urgent {
                    background: #f8d7da !important;
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #666;
                }
                [dir="rtl"] th, [dir="rtl"] td {
                    text-align: right;
                }
            </style>
        </head>
        <body>
            <div class="header">
                ${settings.printableLogo ?
                    `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                    `<h1>${settings.companyName}</h1>`
                }
                <h2>${t('lowStockReport')}</h2>
                <p>${t('date')}: ${currentDate}</p>
            </div>

            <div class="summary">
                <h3>${t('summary')}</h3>
                <p><strong>${t('totalProducts')}:</strong> ${lowStockProducts.length} ${t('itemsNeedRestocking')}</p>
                <p><strong>${t('urgentAction')}:</strong> ${t('restockImmediately')}</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>${t('productName')}</th>
                        <th>${t('category')}</th>
                        <th>${t('currentStock')}</th>
                        <th>${t('minimumStock')}</th>
                        <th>${t('supplier')}</th>
                        <th>${t('status')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${lowStockProducts.map(product => {
                        const productName = getProductName(product);
                        const isUrgent = product.stock === 0;
                        return `
                            <tr class="${isUrgent ? 'urgent' : ''}">
                                <td>${productName}</td>
                                <td>${t(product.category)}</td>
                                <td>${product.stock}</td>
                                <td>${product.minStock}</td>
                                <td>${product.supplier || t('notAvailable')}</td>
                                <td>${isUrgent ? t('outOfStock') : t('lowStock')}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>

            <div class="footer">
                <p>${t('generatedBy')}: ${settings.companyName} POS System</p>
                <p>${t('printedOn')}: ${new Date().toLocaleString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US')}</p>
            </div>
        </body>
        </html>
    `;
}

function generateExpiredItemsReportHTML(expiredProducts, nearExpiryProducts) {
    const currentDate = new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US');

    return `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" lang="${currentLanguage}">
        <head>
            <meta charset="UTF-8">
            <title>${t('expiredItems')} ${t('report')} - ${currentDate}</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #dc3545;
                    padding-bottom: 20px;
                }
                .header h1 {
                    color: #dc3545;
                    margin-bottom: 10px;
                }
                .summary {
                    background: #f8d7da;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    border-left: 4px solid #dc3545;
                }
                .section {
                    margin-bottom: 30px;
                }
                .section h3 {
                    color: #dc3545;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background: #dc3545;
                    color: white;
                    font-weight: bold;
                }
                tr:nth-child(even) {
                    background: #f8f9fa;
                }
                .expired-row {
                    background: #f8d7da !important;
                    font-weight: bold;
                }
                .near-expiry-row {
                    background: #fff3cd !important;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #666;
                }
                [dir="rtl"] th, [dir="rtl"] td {
                    text-align: right;
                }
            </style>
        </head>
        <body>
            <div class="header">
                ${settings.printableLogo ?
                    `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 80px; margin-bottom: 10px;">` :
                    `<h1>${settings.companyName}</h1>`
                }
                <h2>${t('expiredItems')} ${t('report')}</h2>
                <p>${t('date')}: ${currentDate}</p>
            </div>

            <div class="summary">
                <h3>${t('summary')}</h3>
                <p><strong>${t('expired')}:</strong> ${expiredProducts.length} ${t('products')}</p>
                <p><strong>${t('nearExpiry')}:</strong> ${nearExpiryProducts.length} ${t('products')}</p>
                <p><strong>${t('urgentAction')}:</strong> Remove expired items immediately</p>
            </div>

            ${expiredProducts.length > 0 ? `
            <div class="section">
                <h3>${t('expired')} ${t('products')}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>${t('productName')}</th>
                            <th>${t('category')}</th>
                            <th>${t('expiryDate')}</th>
                            <th>${t('daysOverdue')}</th>
                            <th>${t('currentStock')}</th>
                            <th>${t('supplier')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${expiredProducts.map(product => {
                            const productName = getProductName(product);
                            const expiryDate = new Date(product.expiryDate);
                            const daysOverdue = Math.floor((new Date() - expiryDate) / (1000 * 60 * 60 * 24));
                            return `
                                <tr class="expired-row">
                                    <td>${productName}</td>
                                    <td>${t(product.category)}</td>
                                    <td>${expiryDate.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US')}</td>
                                    <td>${daysOverdue}</td>
                                    <td>${product.stock}</td>
                                    <td>${product.supplier || t('notAvailable')}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            ` : ''}

            ${nearExpiryProducts.length > 0 ? `
            <div class="section">
                <h3>${t('nearExpiry')} ${t('products')}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>${t('productName')}</th>
                            <th>${t('category')}</th>
                            <th>${t('expiryDate')}</th>
                            <th>${t('daysUntilExpiry')}</th>
                            <th>${t('currentStock')}</th>
                            <th>${t('supplier')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${nearExpiryProducts.map(product => {
                            const productName = getProductName(product);
                            const expiryDate = new Date(product.expiryDate);
                            const daysUntilExpiry = Math.floor((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
                            return `
                                <tr class="near-expiry-row">
                                    <td>${productName}</td>
                                    <td>${t(product.category)}</td>
                                    <td>${expiryDate.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US')}</td>
                                    <td>${daysUntilExpiry}</td>
                                    <td>${product.stock}</td>
                                    <td>${product.supplier || t('notAvailable')}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            ` : ''}

            <div class="footer">
                <p>${t('generatedBy')}: ${settings.companyName} POS System</p>
                <p>${t('printedOn')}: ${new Date().toLocaleString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US')}</p>
            </div>
        </body>
        </html>
    `;
}

// ===== USERS MANAGEMENT =====

function loadUsersView() {
    if (!hasPermission('users')) {
        document.getElementById('users-view').innerHTML = `
            <div class="access-denied">
                <h2>Access Denied</h2>
                <p>You don't have permission to manage users.</p>
            </div>
        `;
        return;
    }

    const usersView = document.getElementById('users-view');
    usersView.innerHTML = `
        <div class="users-header">
            <h2 data-translate="users">${t('users')}</h2>
            <div class="users-actions">
                <button class="btn btn-primary" onclick="showAddUserModal()" data-translate="addUser">${t('addUser')}</button>
                <button class="btn btn-secondary" onclick="exportUsers()" data-translate="exportUsers">${t('exportUsers')}</button>
            </div>
        </div>

        <div class="users-table">
            <table>
                <thead>
                    <tr>
                        <th data-translate="id">${t('id')}</th>
                        <th data-translate="username">${t('username')}</th>
                        <th data-translate="name">${t('name')}</th>
                        <th data-translate="role">${t('role')}</th>
                        <th data-translate="cardNumber">${t('cardNumber')}</th>
                        <th data-translate="cardAccess">${t('cardAccess')}</th>
                        <th data-translate="status">${t('status')}</th>
                        <th data-translate="actions">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateUsersRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateUsersRows() {
    return users.map(user => `
        <tr class="${user.active ? '' : 'inactive'}">
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            <td>
                <span class="role-badge role-${user.role}">${t(user.role)}</span>
            </td>
            <td>${user.cardNumber || t('notAvailable')}</td>
            <td>
                <span class="status-badge ${user.cardAccess ? 'active' : 'inactive'}">
                    ${user.cardAccess ? t('active') : t('inactive')}
                </span>
            </td>
            <td>
                <span class="status-badge ${user.active ? 'active' : 'inactive'}">
                    ${user.active ? t('active') : t('inactive')}
                </span>
            </td>
            <td class="actions">
                <button class="btn-small btn-primary" onclick="editUser(${user.id})">${t('edit')}</button>
                <button class="btn-small ${user.active ? 'btn-warning' : 'btn-success'}"
                        onclick="toggleUserStatus(${user.id})">
                    ${user.active ? 'Deactivate' : 'Activate'}
                </button>
                ${user.id !== currentUser.id ? `<button class="btn-small btn-danger" onclick="deleteUser(${user.id})">${t('delete')}</button>` : ''}
            </td>
        </tr>
    `).join('');
}

function showAddUserModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Add New User</h2>
            <form onsubmit="addNewUser(event)">
                <div class="form-group">
                    <label data-translate="username">${t('username')}:</label>
                    <input type="text" id="user-username" required>
                </div>
                <div class="form-group">
                    <label data-translate="fullName">${t('fullName')}:</label>
                    <input type="text" id="user-name" required>
                </div>
                <div class="form-group">
                    <label data-translate="password">${t('password')}:</label>
                    <input type="password" id="user-password" required>
                </div>
                <div class="form-group">
                    <label>Role:</label>
                    <select id="user-role" required>
                        <option value="cashier">${t('cashier')}</option>
                        <option value="manager">${t('manager')}</option>
                        ${currentUser.role === 'admin' ? `<option value="admin">${t('admin')}</option>` : ''}
                    </select>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewUser(event) {
    event.preventDefault();

    const username = document.getElementById('user-username').value;

    // Check if username already exists
    if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    const newUser = {
        id: Math.max(...users.map(u => u.id)) + 1,
        username: username,
        name: document.getElementById('user-name').value,
        password: document.getElementById('user-password').value,
        role: document.getElementById('user-role').value,
        active: true
    };

    users.push(newUser);
    saveToStorage('users', users);

    closeModal();
    loadUsersView();

    alert(`User "${newUser.name}" added successfully!`);
}

function editUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Edit User</h2>
            <form onsubmit="updateUser(event, ${userId})">
                <div class="form-group">
                    <label data-translate="username">${t('username')}:</label>
                    <input type="text" id="edit-user-username" value="${user.username}" required>
                </div>
                <div class="form-group">
                    <label data-translate="fullName">${t('fullName')}:</label>
                    <input type="text" id="edit-user-name" value="${user.name}" required>
                </div>
                <div class="form-group">
                    <label data-translate="newPassword">${t('newPassword')}:</label>
                    <input type="password" id="edit-user-password">
                </div>
                <div class="form-group">
                    <label>Role:</label>
                    <select id="edit-user-role" required>
                        <option value="cashier" ${user.role === 'cashier' ? 'selected' : ''}>${t('cashier')}</option>
                        <option value="manager" ${user.role === 'manager' ? 'selected' : ''}>${t('manager')}</option>
                        ${currentUser.role === 'admin' ? `<option value="admin" ${user.role === 'admin' ? 'selected' : ''}>${t('admin')}</option>` : ''}
                    </select>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateUser(event, userId) {
    event.preventDefault();

    const user = users.find(u => u.id === userId);
    if (!user) return;

    const newUsername = document.getElementById('edit-user-username').value;

    // Check if username already exists (excluding current user)
    if (users.find(u => u.username === newUsername && u.id !== userId)) {
        alert('Username already exists!');
        return;
    }

    user.username = newUsername;
    user.name = document.getElementById('edit-user-name').value;
    user.role = document.getElementById('edit-user-role').value;

    const newPassword = document.getElementById('edit-user-password').value;
    if (newPassword) {
        user.password = newPassword;
    }

    saveToStorage('users', users);

    closeModal();
    loadUsersView();

    alert(`User "${user.name}" updated successfully!`);
}

function toggleUserStatus(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    if (user.id === currentUser.id) {
        alert("You cannot deactivate your own account!");
        return;
    }

    user.active = !user.active;
    saveToStorage('users', users);

    loadUsersView();

    alert(`User "${user.name}" ${user.active ? 'activated' : 'deactivated'} successfully!`);
}

function deleteUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    if (user.id === currentUser.id) {
        alert("You cannot delete your own account!");
        return;
    }

    if (confirm(`Are you sure you want to delete user "${user.name}"?`)) {
        const index = users.findIndex(u => u.id === userId);
        users.splice(index, 1);
        saveToStorage('users', users);

        loadUsersView();

        alert(`User "${user.name}" deleted successfully!`);
    }
}

// ===== SETTINGS MANAGEMENT =====

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        alert(t('invalidFileType'));
        return;
    }

    // Validate file size (e.g., 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert(t('fileTooLarge'));
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        settings.printableLogo = dataUrl;
        localStorage.setItem('printableLogo', dataUrl);

        // Refresh settings view to show new logo
        loadSettingsView();
        alert(t('logoUpdated'));
    };
    reader.readAsDataURL(file);
}

function removeLogo() {
    if (confirm(t('confirmRemoveLogo'))) {
        settings.printableLogo = '';
        localStorage.removeItem('printableLogo');
        loadSettingsView();
        alert(t('logoRemoved'));
    }
}

function loadSettingsView() {
    if (!hasPermission('settings')) {
        document.getElementById('settings-view').innerHTML = `
            <div class="access-denied">
                <h2>Access Denied</h2>
                <p>You don't have permission to access settings.</p>
            </div>
        `;
        return;
    }

    const settingsView = document.getElementById('settings-view');
    settingsView.innerHTML = `
        <div class="settings-header">
            <h2 data-translate="settings">${t('settings')}</h2>
            <div class="settings-actions">
                <button class="btn btn-primary" onclick="saveSettings()" data-translate="saveSettings">${t('saveSettings')}</button>
                <button class="btn btn-secondary" onclick="resetSettings()" data-translate="resetSettings">${t('resetSettings')}</button>
                <button class="btn btn-warning" onclick="exportData()" data-translate="exportData">${t('exportData')}</button>
                <button class="btn btn-success" onclick="importData()" data-translate="importData">${t('importData')}</button>
            </div>
        </div>

        <div class="settings-content">
            <div class="settings-section">
                <h3 data-translate="companySettings">${t('companySettings')}</h3>
                <div class="form-group">
                    <label data-translate="name">${t('name')}:</label>
                    <input type="text" id="setting-company-name" value="${settings.companyName}">
                </div>
                <div class="form-group">
                    <label data-translate="address">${t('address')}:</label>
                    <input type="text" id="setting-company-address" value="${settings.companyAddress}">
                </div>
                <div class="form-group">
                    <label data-translate="phone">${t('phone')}:</label>
                    <input type="text" id="setting-company-phone" value="${settings.companyPhone}">
                </div>
                <div class="form-group">
                    <label data-translate="receiptFooter">${t('receiptFooter')}:</label>
                    <textarea id="setting-receipt-footer">${settings.receiptFooter}</textarea>
                </div>
            </div>

            <div class="settings-section">
                <h3 data-translate="logoSettings">${t('logoSettings')}</h3>
                <div class="logo-upload-section">
                    <div class="current-logo">
                        ${settings.printableLogo ? `
                            <img src="${settings.printableLogo}" alt="Company Logo" id="current-logo-preview" style="max-width: 200px; max-height: 100px; border: 1px solid #ddd; border-radius: 8px;">
                            <button type="button" class="btn btn-danger btn-small" onclick="removeLogo()" data-translate="removeLogo">${t('removeLogo')}</button>
                        ` : `
                            <div class="no-logo" style="width: 200px; height: 100px; border: 2px dashed #ddd; display: flex; align-items: center; justify-content: center; color: #666; border-radius: 8px;">
                                ${t('companyLogo')}
                            </div>
                        `}
                    </div>
                    <div class="logo-upload-controls">
                        <input type="file" id="logo-upload" accept="image/*" style="display: none;" onchange="window.handleLogoUpload(event)">
                        <button type="button" class="btn btn-primary" onclick="document.getElementById('logo-upload').click()" data-translate="uploadLogo">${t('uploadLogo')}</button>
                        <p style="font-size: 12px; color: #666; margin-top: 10px;">
                            ${t('recommendedSize')}: 200x100px, PNG/JPG
                        </p>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h3>System Settings</h3>
                <div class="form-group">
                    <label>Tax Rate (%):</label>
                    <input type="number" id="setting-tax-rate" step="0.01" value="${(settings.taxRate * 100).toFixed(2)}">
                </div>
                <div class="form-group">
                    <label>Low Stock Threshold:</label>
                    <input type="number" id="setting-low-stock-threshold" value="${settings.lowStockThreshold}">
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="setting-auto-backup" ${settings.autoBackup ? 'checked' : ''}>
                        Enable Auto Backup
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="setting-print-after-sale" ${settings.printAfterSale ? 'checked' : ''}>
                        Auto Print Receipt After Sale
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="setting-show-barcode" ${settings.showBarcode ? 'checked' : ''}>
                        Show Barcodes on Products
                    </label>
                </div>
            </div>

            <div class="settings-section">
                <h3>Default Language & Currency</h3>
                <div class="form-group">
                    <label>Default Language:</label>
                    <select id="setting-default-language">
                        <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                        <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>🇩🇿 العربية</option>
                        <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
                        <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Default Currency:</label>
                    <select id="setting-default-currency">
                        ${Object.entries(currencies).map(([code, curr]) =>
                            `<option value="${code}" ${currentCurrency === code ? 'selected' : ''}>${curr.symbol} ${curr.name}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>

            <div class="settings-section">
                <h3>Data Management</h3>
                <div class="data-stats">
                    <p><strong>Products:</strong> ${products.length} items</p>
                    <p><strong>Sales History:</strong> ${salesHistory.length} transactions</p>
                    <p><strong>Users:</strong> ${users.length} accounts</p>
                    <p><strong>Last Backup:</strong> ${localStorage.getItem('lastBackup') || 'Never'}</p>
                </div>
                <div class="data-actions">
                    <button class="btn btn-info" onclick="createBackup()" data-translate="createBackup">${t('createBackup')}</button>
                    <button class="btn btn-success" onclick="window.open('zakat.html', '_blank')" data-translate="openZakatCalculator">${t('openZakatCalculator')}</button>
                    <button class="btn btn-warning" onclick="clearAllData()" data-translate="clearAllData">${t('clearAllData')}</button>
                </div>
            </div>
        </div>
    `;
}

function saveSettings() {
    settings.companyName = document.getElementById('setting-company-name').value;
    settings.companyAddress = document.getElementById('setting-company-address').value;
    settings.companyPhone = document.getElementById('setting-company-phone').value;
    settings.receiptFooter = document.getElementById('setting-receipt-footer').value;
    settings.taxRate = parseFloat(document.getElementById('setting-tax-rate').value) / 100;
    settings.lowStockThreshold = parseInt(document.getElementById('setting-low-stock-threshold').value);
    settings.autoBackup = document.getElementById('setting-auto-backup').checked;
    settings.printAfterSale = document.getElementById('setting-print-after-sale').checked;
    settings.showBarcode = document.getElementById('setting-show-barcode').checked;

    // Save to localStorage
    Object.keys(settings).forEach(key => {
        localStorage.setItem(key, settings[key]);
    });

    // Update language and currency if changed
    const newLanguage = document.getElementById('setting-default-language').value;
    const newCurrency = document.getElementById('setting-default-currency').value;

    if (newLanguage !== currentLanguage) {
        changeLanguage(newLanguage);
    }

    if (newCurrency !== currentCurrency) {
        changeCurrency(newCurrency);
    }

    alert('Settings saved successfully!');

    // Refresh displays
    displayProducts();
    updateCartDisplay();
}

function createBackup() {
    const backupData = {
        products: products,
        salesHistory: salesHistory,
        users: users,
        settings: settings,
        timestamp: new Date().toISOString()
    };

    const dataStr = JSON.stringify(backupData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `pos-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    localStorage.setItem('lastBackup', new Date().toLocaleString());

    alert('Backup created successfully!');
}

// ===== MISSING BUTTON FUNCTIONS =====

function exportInventory() {
    const inventoryData = products.map(product => ({
        id: product.id,
        name: getProductName(product),
        category: t(product.category),
        price: formatCurrency(product.price),
        stock: product.stock,
        minStock: product.minStock,
        barcode: product.barcode,
        supplier: product.supplier || t('notAvailable'),
        expiryDate: product.expiryDate || t('notAvailable')
    }));

    const csvContent = "data:text/csv;charset=utf-8,"
        + [
            [t('name'), t('category'), t('price'), t('stock'), t('minStock'), t('barcode'), t('supplier'), t('expiryDate')].join(','),
            ...inventoryData.map(row => Object.values(row).join(','))
        ].join('\n');

    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `inventory-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    alert(t('inventoryExported'));
}

function exportReports() {
    const reportsData = {
        todaysSales: getTodaysSales(),
        weekSales: getWeekSales(),
        lowStockCount: getLowStockCount(),
        totalProducts: products.length,
        recentSales: salesHistory.slice(-10),
        generatedAt: new Date().toISOString()
    };

    const dataStr = JSON.stringify(reportsData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `reports-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    alert(t('reportsExported'));
}

function exportUsers() {
    if (!hasPermission('users')) {
        alert(t('accessDenied'));
        return;
    }

    const usersData = users.map(user => ({
        id: user.id,
        username: user.username,
        name: user.name,
        role: t(user.role),
        status: user.active ? t('active') : t('inactive')
    }));

    const csvContent = "data:text/csv;charset=utf-8,"
        + [
            [t('id'), t('username'), t('name'), t('role'), t('status')].join(','),
            ...usersData.map(row => Object.values(row).join(','))
        ].join('\n');

    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `users-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    alert(t('usersExported'));
}

function resetSettings() {
    if (confirm(t('confirmResetSettings'))) {
        // Reset to default values
        const defaultSettings = {
            taxRate: 0.19,
            companyName: 'My POS System',
            companyAddress: 'Algiers, Algeria',
            companyPhone: '+213 21 123 456',
            receiptFooter: 'شكراً لزيارتكم - Thank you for your visit!',
            lowStockThreshold: 10,
            autoBackup: false,
            printAfterSale: false,
            showBarcode: false
        };

        // Update settings object
        Object.assign(settings, defaultSettings);

        // Also clear the printable logo
        localStorage.removeItem('printableLogo');

        // Clear localStorage
        Object.keys(defaultSettings).forEach(key => {
            localStorage.removeItem(key);
        });

        // Refresh settings view
        loadSettingsView();

        // Update main interface
        updateMainLogo();

        alert(t('settingsReset'));
    }
}

function exportData() {
    const allData = {
        products: products,
        salesHistory: salesHistory,
        users: users.map(u => ({...u, password: '***'})), // Hide passwords
        settings: settings,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };

    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `pos-data-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    alert(t('dataExported'));
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);

                if (confirm(t('confirmImportData'))) {
                    // Import products (if available)
                    if (importedData.products) {
                        products.splice(0, products.length, ...importedData.products);
                        saveToStorage('products', products);
                    }

                    // Import sales history (if available)
                    if (importedData.salesHistory) {
                        salesHistory.splice(0, salesHistory.length, ...importedData.salesHistory);
                        saveToStorage('salesHistory', salesHistory);
                    }

                    // Import settings (if available)
                    if (importedData.settings) {
                        Object.assign(settings, importedData.settings);
                        Object.keys(importedData.settings).forEach(key => {
                            localStorage.setItem(key, importedData.settings[key]);
                        });
                    }

                    alert(t('dataImported'));
                    location.reload(); // Refresh to apply changes
                }
            } catch (error) {
                alert(t('importError') + ': ' + error.message);
            }
        };
        reader.readAsText(file);
    };

    input.click();
}

function clearAllData() {
    if (confirm(t('confirmClearAllData'))) {
        if (confirm(t('confirmClearAllDataFinal'))) {
            // Clear all data except users (for security)
            products.splice(0, products.length);
            salesHistory.splice(0, salesHistory.length);

            // Save empty arrays
            saveToStorage('products', products);
            saveToStorage('salesHistory', salesHistory);

            // Clear cart
            cart.splice(0, cart.length);

            alert(t('allDataCleared'));
            location.reload();
        }
    }
}

function startCameraScanning() {
    // This function is already implemented above
    // Just ensuring it's available
    console.log('Camera scanning started');
}

function connectUSBScanner() {
    // This function is already implemented above
    // Just ensuring it's available
    console.log('USB scanner connected');
}

// ===== CATEGORIES MANAGEMENT =====

function loadCategoriesView() {
    if (!hasPermission('inventory')) {
        document.getElementById('categories-view').innerHTML = `
            <div class="access-denied">
                <h2>${t('accessDenied')}</h2>
                <p>${t('noPermissionCategories')}</p>
            </div>
        `;
        return;
    }

    const categoriesView = document.getElementById('categories-view');
    categoriesView.innerHTML = `
        <div class="categories-header">
            <h2 data-translate="categoryManagement">${t('categoryManagement')}</h2>
            <div class="categories-actions">
                <button class="btn btn-primary" onclick="showAddCategoryModal()" data-translate="addCategory">${t('addCategory')}</button>
                <button class="btn btn-secondary" onclick="exportCategories()" data-translate="export">${t('export')}</button>
            </div>
        </div>

        <div class="categories-table">
            <table>
                <thead>
                    <tr>
                        <th data-translate="id">${t('id')}</th>
                        <th data-translate="categoryName">${t('categoryName')}</th>
                        <th data-translate="status">${t('status')}</th>
                        <th data-translate="actions">${t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${generateCategoriesRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateCategoriesRows() {
    return categories.map(category => `
        <tr class="${category.active ? '' : 'inactive'}">
            <td>${category.id}</td>
            <td>${getCategoryName(category)}</td>
            <td>
                <span class="status-badge ${category.active ? 'active' : 'inactive'}">
                    ${category.active ? t('active') : t('inactive')}
                </span>
            </td>
            <td class="actions">
                <button class="btn-small btn-primary" onclick="editCategory(${category.id})" data-translate="edit">${t('edit')}</button>
                <button class="btn-small ${category.active ? 'btn-warning' : 'btn-success'}"
                        onclick="toggleCategoryStatus(${category.id})">
                    ${category.active ? t('deactivate') : t('activate')}
                </button>
                <button class="btn-small btn-danger" onclick="deleteCategory(${category.id})" data-translate="delete">${t('delete')}</button>
            </td>
        </tr>
    `).join('');
}

function getCategoryName(category) {
    switch(currentLanguage) {
        case 'ar': return category.nameAr || category.name;
        case 'fr': return category.nameFr || category.name;
        case 'es': return category.nameEs || category.name;
        default: return category.name;
    }
}

function showAddCategoryModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2 data-translate="addCategory">${t('addCategory')}</h2>
            <form onsubmit="addNewCategory(event)">
                <div class="form-group">
                    <label data-translate="englishName">${t('englishName')}:</label>
                    <input type="text" id="category-name-en" required>
                </div>
                <div class="form-group">
                    <label data-translate="arabicName">${t('arabicName')}:</label>
                    <input type="text" id="category-name-ar" required>
                </div>
                <div class="form-group">
                    <label data-translate="frenchName">${t('frenchName')}:</label>
                    <input type="text" id="category-name-fr" required>
                </div>
                <div class="form-group">
                    <label data-translate="spanishName">${t('spanishName')}:</label>
                    <input type="text" id="category-name-es" required>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()" data-translate="cancel">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary" data-translate="save">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewCategory(event) {
    event.preventDefault();

    const newCategory = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        name: document.getElementById('category-name-en').value,
        nameAr: document.getElementById('category-name-ar').value,
        nameFr: document.getElementById('category-name-fr').value,
        nameEs: document.getElementById('category-name-es').value,
        active: true
    };

    categories.push(newCategory);
    saveToStorage('categories', categories);

    closeModal();
    loadCategoriesView();

    // Refresh product categories
    updateProductCategories();

    alert(`${t('category')} "${getCategoryName(newCategory)}" ${t('addedSuccessfully')}!`);
}

function editCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <h2 data-translate="editCategory">${t('editCategory')}</h2>
            <form onsubmit="updateCategory(event, ${categoryId})">
                <div class="form-group">
                    <label data-translate="englishName">${t('englishName')}:</label>
                    <input type="text" id="edit-category-name-en" value="${category.name}" required>
                </div>
                <div class="form-group">
                    <label data-translate="arabicName">${t('arabicName')}:</label>
                    <input type="text" id="edit-category-name-ar" value="${category.nameAr}" required>
                </div>
                <div class="form-group">
                    <label data-translate="frenchName">${t('frenchName')}:</label>
                    <input type="text" id="edit-category-name-fr" value="${category.nameFr}" required>
                </div>
                <div class="form-group">
                    <label data-translate="spanishName">${t('spanishName')}:</label>
                    <input type="text" id="edit-category-name-es" value="${category.nameEs}" required>
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()" data-translate="cancel">${t('cancel')}</button>
                    <button type="submit" class="btn btn-primary" data-translate="save">${t('save')}</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateCategory(event, categoryId) {
    event.preventDefault();

    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    category.name = document.getElementById('edit-category-name-en').value;
    category.nameAr = document.getElementById('edit-category-name-ar').value;
    category.nameFr = document.getElementById('edit-category-name-fr').value;
    category.nameEs = document.getElementById('edit-category-name-es').value;

    saveToStorage('categories', categories);

    closeModal();
    loadCategoriesView();

    // Refresh product categories
    updateProductCategories();

    alert(`${t('category')} "${getCategoryName(category)}" ${t('updatedSuccessfully')}!`);
}

function toggleCategoryStatus(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    category.active = !category.active;
    saveToStorage('categories', categories);

    loadCategoriesView();

    // Refresh product categories
    updateProductCategories();

    alert(`${t('category')} "${getCategoryName(category)}" ${category.active ? t('activated') : t('deactivated')} ${t('successfully')}!`);
}

function deleteCategory(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    // Check if category is used by products
    const productsUsingCategory = products.filter(p => p.category === category.name.toLowerCase());
    if (productsUsingCategory.length > 0) {
        alert(`${t('cannotDeleteCategory')} "${getCategoryName(category)}" - ${productsUsingCategory.length} ${t('productsUsingCategory')}`);
        return;
    }

    if (confirm(`${t('confirmDeleteCategory')} "${getCategoryName(category)}"?`)) {
        const index = categories.findIndex(c => c.id === categoryId);
        categories.splice(index, 1);
        saveToStorage('categories', categories);

        loadCategoriesView();

        // Refresh product categories
        updateProductCategories();

        alert(`${t('category')} "${getCategoryName(category)}" ${t('deletedSuccessfully')}!`);
    }
}

function exportCategories() {
    const categoriesData = categories.map(category => ({
        id: category.id,
        name: category.name,
        nameAr: category.nameAr,
        nameFr: category.nameFr,
        nameEs: category.nameEs,
        status: category.active ? t('active') : t('inactive')
    }));

    const csvContent = "data:text/csv;charset=utf-8,"
        + [
            ['ID', 'English', 'Arabic', 'French', 'Spanish', t('status')].join(','),
            ...categoriesData.map(row => Object.values(row).join(','))
        ].join('\n');

    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `categories-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    alert(t('categoriesExported'));
}

function updateProductCategories() {
    // Refresh category buttons on the main POS view
    renderCategoryButtons();

    // Refresh product display if on sales tab
    if (currentView === 'pos') {
        displayProducts();
    }

    if (currentView === 'inventory') {
        loadInventoryView();
    }
}

// ===== CHARTS FUNCTIONALITY =====

let chartsVisible = false;
let salesChart = null;
let productChart = null;

function toggleCharts() {
    const chartsSection = document.getElementById('charts-section');
    chartsVisible = !chartsVisible;

    if (chartsVisible) {
        chartsSection.style.display = 'block';
        // Load Chart.js if not already loaded
        if (typeof Chart === 'undefined') {
            loadChartJS(() => initializeCharts());
        } else {
            initializeCharts();
        }
    } else {
        chartsSection.style.display = 'none';
        destroyCharts();
    }
}

function loadChartJS(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function initializeCharts() {
    // Small delay to ensure Chart.js is fully loaded
    setTimeout(() => {
        initializeSalesChart();
        initializeProductChart();
    }, 100);
}

function destroyCharts() {
    if (salesChart) {
        salesChart.destroy();
        salesChart = null;
    }
    if (productChart) {
        productChart.destroy();
        productChart = null;
    }
}

function initializeSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx || typeof Chart === 'undefined') return;

    // Get last 7 days of sales data
    const last7Days = [];
    const salesData = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toDateString();

        last7Days.push(date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US'));

        const dayTotal = salesHistory
            .filter(sale => new Date(sale.date).toDateString() === dateStr)
            .reduce((sum, sale) => sum + sale.total, 0);

        salesData.push(dayTotal);
    }

    salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: last7Days,
            datasets: [{
                label: t('dailySales'),
                data: salesData,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: t('salesChart')
                },
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

function initializeProductChart() {
    const ctx = document.getElementById('productChart');
    if (!ctx || typeof Chart === 'undefined') return;

    // Get top 5 selling products
    const productSales = {};

    salesHistory.forEach(sale => {
        sale.items.forEach(item => {
            if (!productSales[item.id]) {
                productSales[item.id] = {
                    name: getProductName(item),
                    quantity: 0
                };
            }
            productSales[item.id].quantity += item.quantity;
        });
    });

    const sortedProducts = Object.values(productSales)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);

    const labels = sortedProducts.map(p => p.name);
    const data = sortedProducts.map(p => p.quantity);

    productChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: t('productsSold'),
                data: data,
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f093fb',
                    '#f5576c',
                    '#4facfe'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: t('topSellingProducts')
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
}

function updateMainLogo() {
    // Update logo in main interface
    const mainLogo = document.getElementById('main-logo');
    if (mainLogo) {
        if (settings.companyLogo) {
            mainLogo.innerHTML = `<img src="${settings.companyLogo}" alt="${settings.companyName}" style="max-height: 40px;">`;
        } else {
            mainLogo.innerHTML = `<span style="font-weight: bold; color: var(--primary-color);">${settings.companyName}</span>`;
        }
    }

    // Update logo in receipts and invoices (will be used in next print)
    // The logo will automatically appear in printed documents
}

// ===== PRODUCT MANAGEMENT =====

function renderCategoryButtons() {
    const categoryButtonsContainer = document.querySelector('.category-buttons');
    if (!categoryButtonsContainer) return;

    // Filter for active categories
    const activeCategories = categories.filter(cat => cat.active);

    const buttonsHTML = `
        <button class="category-btn active" data-category="all" data-translate="allItems">${t('allItems')}</button>
        ${activeCategories.map(category => {
            // The key for filtering products is the lowercase English name
            const categoryKey = category.name.toLowerCase();
            return `<button class="category-btn" data-category="${categoryKey}">${getCategoryName(category)}</button>`;
        }).join('')}
    `;

    categoryButtonsContainer.innerHTML = buttonsHTML;
}

function displayProducts() {
    const filteredProducts = currentCategory === 'all'
        ? products.filter(p => p.active)
        : products.filter(p => p.category === currentCategory && p.active);

    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productName = getProductName(product);
        const isLowStock = product.stock <= product.minStock;
        const isExpired = product.expiryDate && new Date(product.expiryDate) < new Date();
        const isNearExpiry = product.expiryDate && new Date(product.expiryDate) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

        let statusClass = '';
        let statusBadge = '';

        if (isExpired) {
            statusClass = 'expired';
            statusBadge = `<span class="expired-badge">⚠️ ${t('expired')}</span>`;
        } else if (isNearExpiry) {
            statusClass = 'near-expiry';
            statusBadge = `<span class="near-expiry-badge">⏰ ${t('nearExpiry')}</span>`;
        } else if (isLowStock) {
            statusClass = 'low-stock';
            statusBadge = `<span class="low-stock-badge">📦 ${t('lowStock')}</span>`;
        }

        const productCard = document.createElement('div');
        productCard.className = `product-card ${statusClass}`;
        productCard.innerHTML = `
            
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="price">${formatCurrency(product.price)}</div>
                <div class="stock-info">
                    <span class="stock-count">${t('stock')}: ${product.stock}</span>
                    ${statusBadge}
                </div>
                ${product.expiryDate ? `<div class="expiry-date">${t('expiryDate')}: ${new Date(product.expiryDate).toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'es' ? 'es-ES' : 'en-US')}</div>` : ''}
                ${settings.showBarcode ? `<div class="barcode">${product.barcode}</div>` : ''}
            </div>
        `;

        // Don't allow adding expired products to cart
        if (!isExpired) {
            productCard.addEventListener('click', () => addToCart(product));
        } else {
            productCard.style.cursor = 'not-allowed';
            productCard.style.opacity = '0.6';
        }

        productsGrid.appendChild(productCard);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = products.filter(product => {
        const name = (currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name).toLowerCase();
        const barcode = product.barcode.toLowerCase();
        return product.active && (name.includes(searchTerm) || barcode.includes(searchTerm));
    });

    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
        const isLowStock = product.stock <= product.minStock;

        const productCard = document.createElement('div');
        productCard.className = `product-card ${isLowStock ? 'low-stock' : ''}`;
        productCard.innerHTML = `
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="price">${formatCurrency(product.price)}</div>
                <div class="stock-info">
                    <span class="stock-count">${t('stock')}: ${product.stock}</span>
                    ${isLowStock ? '<span class="low-stock-badge">⚠️ Low</span>' : ''}
                </div>
                ${settings.showBarcode ? `<div class="barcode">${product.barcode}</div>` : ''}
            </div>
        `;

        productCard.addEventListener('click', () => addToCart(product));
        productsGrid.appendChild(productCard);
    });
}

// ===== CART MANAGEMENT =====

function addToCart(product) {
    if (product.stock <= 0) {
        alert(`${product.name} is out of stock!`);
        return;
    }

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            alert(`Cannot add more ${product.name}. Only ${product.stock} in stock.`);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartDisplay();
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (item && product) {
        const newQuantity = item.quantity + change;

        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity > product.stock) {
            alert(`Cannot add more ${product.name}. Only ${product.stock} in stock.`);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCart();
        }
    }
}

function updateCartDisplay() {
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p class="empty-cart" data-translate="emptyCart">${t('emptyCart')}</p>`;
    } else {
        cartItemsEl.innerHTML = cart.map(item => {
            const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
            return `
                <div class="cart-item">
                    <div class="item-info">
                        <div class="item-name">${itemName}</div>
                        <div class="item-price">${formatCurrency(item.price)} each</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateTotals();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal / currencies[currentCurrency].rate);
    if (taxEl) taxEl.textContent = formatCurrency(tax / currencies[currentCurrency].rate);
    if (totalEl) totalEl.textContent = formatCurrency(total / currencies[currentCurrency].rate);
}

function clearCart() {
    if (cart.length > 0 && confirm(`${t('clearCart')}?`)) {
        cart = [];
        updateCartDisplay();
        saveCart();
    }
}

function saveCart() {
    saveToStorage('currentCart', cart);
}

function loadCart() {
    const savedCart = loadFromStorage('currentCart', []);
    cart = savedCart;
    updateCartDisplay();
}

// ===== CHECKOUT & PAYMENT SYSTEM =====

function openCheckout() {
    if (cart.length === 0) {
        alert(t('emptyCart'));
        return;
    }

    const modal = document.getElementById('checkout-modal');
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total-amount');
    const clientSelector = document.getElementById('client-selector');
    const mainClientSelector = document.getElementById('main-client-selector');

    // Sync client from main view to checkout modal
    if (mainClientSelector && clientSelector) {
        clientSelector.value = mainClientSelector.value;
    }

    // Display checkout items
    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    checkoutItems.innerHTML = cart.map(item => {
        const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
        return `
            <div class="checkout-item">
                <span>${itemName} x ${item.quantity}</span>
                <span>${formatCurrency((item.price * item.quantity) / currencies[currentCurrency].rate)}</span>
            </div>
        `;
    }).join('');

    checkoutTotal.textContent = formatCurrency(total / currencies[currentCurrency].rate);

    modal.style.display = 'block';
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
}

function processSale(isPaid) {
    // Stock check before proceeding
    for (const cartItem of cart) {
        const product = products.find(p => p.id === cartItem.id);
        if (product && product.stock < cartItem.quantity) {
            alert(`${t('insufficientStock')} for ${getProductName(product)}. ${t('available')}: ${product.stock}`);
            return; // Stop the sale
        }
    }

    const selectedPayment = document.querySelector('.payment-btn.active');
    const clientId = document.getElementById('client-selector').value;

    if (isPaid && !selectedPayment) {
        alert(t('selectPaymentMethod'));
        return;
    }

    // Walk-in customer has id 1, No Client has value "1" or "0".
    if (!isPaid && (!clientId || parseInt(clientId) <= 1)) {
        alert('Please select a specific client for an unpaid sale.');
        return;
    }

    const paymentMethod = isPaid ? selectedPayment.dataset.method : 'unpaid';
    const paymentStatus = isPaid ? 'paid' : 'unpaid';

    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    // Create sale record
    const sale = {
        id: generateId(),
        date: new Date().toISOString(),
        cashier: currentUser.name,
        items: [...cart],
        subtotal: subtotal / currencies[currentCurrency].rate,
        tax: tax / currencies[currentCurrency].rate,
        total: total / currencies[currentCurrency].rate,
        paymentMethod: paymentMethod,
        paymentStatus: paymentStatus,
        clientId: clientId ? parseInt(clientId) : null,
        currency: currentCurrency
    };

    // Update inventory
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) product.stock -= cartItem.quantity;
    });

    // Save sale
    salesHistory.push(sale);
    saveToStorage('salesHistory', salesHistory);
    saveToStorage('products', products);

    // Print receipt if enabled
    if (settings.printAfterSale && isPaid) {
        printReceipt(sale);
    }

    // Show success message
    alert(t('saleCompleted'));

    // Clear cart, update displays, and close modal
    cart = [];
    updateCartDisplay();
    displayProducts(); // Refresh to show updated stock
    closeCheckout();
    saveCart();
}


// ===== PRINTING SYSTEM =====

function printReceipt(sale = null) {
    if (!sale && cart.length === 0) {
        alert('No items to print');
        return;
    }

    let receiptData;
    if (sale) {
        receiptData = sale;
    } else {
        // Create temporary sale data for current cart
        const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
        const tax = subtotal * settings.taxRate;
        const total = subtotal + tax;

        receiptData = {
            id: 'TEMP-' + Date.now(),
            date: new Date().toISOString(),
            cashier: currentUser.name,
            items: [...cart],
            subtotal: subtotal / currencies[currentCurrency].rate,
            tax: tax / currencies[currentCurrency].rate,
            total: total / currencies[currentCurrency].rate,
            paymentMethod: 'N/A',
            currency: currentCurrency
        };
    }

    const receiptWindow = window.open('', '_blank');
    const receiptHTML = generateReceiptHTML(receiptData);

    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
    receiptWindow.focus();
    receiptWindow.print();
}

function generateReceiptHTML(sale) {
    const date = new Date(sale.date);
    const formattedDate = date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
    const formattedTime = date.toLocaleTimeString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');

    return `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}">
        <head>
            <meta charset="UTF-8">
            <title>Receipt - ${sale.id}</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    max-width: 300px;
                    margin: 0 auto;
                    padding: 10px;
                    font-size: 12px;
                    line-height: 1.4;
                }
                .header { text-align: center; margin-bottom: 20px; }
                .company-name { font-size: 16px; font-weight: bold; }
                .separator { border-top: 1px dashed #000; margin: 10px 0; }
                .item-line { display: flex; justify-content: space-between; margin: 5px 0; }
                .total-line { font-weight: bold; }
                .footer { text-align: center; margin-top: 20px; font-size: 10px; }
                @media print {
                    body { margin: 0; padding: 5px; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                ${settings.printableLogo ?
                    `<img src="${settings.printableLogo}" alt="${settings.companyName}" style="max-height: 60px; max-width: 150px; margin-bottom: 10px;">` :
                    `<div class="company-name">${settings.companyName}</div>`
                }
                <div>${settings.companyAddress}</div>
                <div>${settings.companyPhone}</div>
            </div>

            <div class="separator"></div>

            <div class="receipt-info">
                <div>Receipt #: ${sale.id}</div>
                <div>Date: ${formattedDate} ${formattedTime}</div>
                <div>Cashier: ${sale.cashier}</div>
                <div>Currency: ${currencies[sale.currency].name}</div>
            </div>

            <div class="separator"></div>

            <div class="items">
                ${sale.items.map(item => {
                    const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
                    const itemTotal = item.price * item.quantity;
                    return `
                        <div class="item-line">
                            <span>${itemName}</span>
                        </div>
                        <div class="item-line">
                            <span>${item.quantity} x ${formatCurrency(item.price)}</span>
                            <span>${formatCurrency(itemTotal)}</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="separator"></div>

            <div class="totals">
                <div class="item-line">
                    <span>Subtotal:</span>
                    <span>${formatCurrency(sale.subtotal)}</span>
                </div>
                <div class="item-line">
                    <span>Tax (${(settings.taxRate * 100).toFixed(0)}%):</span>
                    <span>${formatCurrency(sale.tax)}</span>
                </div>
                <div class="item-line total-line">
                    <span>TOTAL:</span>
                    <span>${formatCurrency(sale.total)}</span>
                </div>
            </div>

            <div class="separator"></div>

            <div class="payment-info">
                <div>Payment Method: ${sale.paymentMethod}</div>
            </div>

            <div class="footer">
                <div>${settings.receiptFooter}</div>
                <div>Powered by Professional POS System</div>
            </div>
        </body>
        </html>
    `;
}

// ===== LOW STOCK MANAGEMENT =====

function checkLowStock() {
    const lowStockProducts = products.filter(product =>
        product.active && product.stock <= product.minStock
    );

    const alertDiv = document.getElementById('low-stock-alert');
    const itemsDiv = document.getElementById('low-stock-items');

    if (lowStockProducts.length > 0) {
        alertDiv.style.display = 'block';
        itemsDiv.innerHTML = lowStockProducts.map(product => {
            const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
            return `<div class="low-stock-item">${productName}: ${product.stock} left (Min: ${product.minStock})</div>`;
        }).join('');
    } else {
        alertDiv.style.display = 'none';
    }
}

// ===== UTILITY FUNCTIONS =====

function updateTime() {
    const timeEl = document.getElementById('current-time');
    if (timeEl) {
        const now = new Date();
        const timeString = now.toLocaleTimeString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
        const dateString = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
        timeEl.textContent = `${dateString} ${timeString}`;
    }
}

function setupEventListeners() {
    // Category buttons - using event delegation for dynamic buttons
    const categoryButtonsContainer = document.querySelector('.category-buttons');
    if (categoryButtonsContainer) {
        categoryButtonsContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('category-btn')) {
                // Remove active class from all buttons in the container
                this.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                // Add active class to the clicked button
                e.target.classList.add('active');
                // Update current category and display products
                currentCategory = e.target.dataset.category;
                displayProducts();
            }
        });
    }

    // Cart actions
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout');
    const printReceiptBtn = document.getElementById('print-receipt');
    const printInvoiceBtn = document.getElementById('print-invoice');

    // Checkout modal buttons
    const cancelCheckoutBtn = document.getElementById('cancel-checkout');
    const completeUnpaidSaleBtn = document.getElementById('complete-unpaid-sale');
    const completePaidSaleBtn = document.getElementById('complete-paid-sale');

    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => printReceipt());
    if (printInvoiceBtn) printInvoiceBtn.addEventListener('click', () => printInvoice());
    if (cancelCheckoutBtn) cancelCheckoutBtn.addEventListener('click', closeCheckout);
    if (completeUnpaidSaleBtn) completeUnpaidSaleBtn.addEventListener('click', () => processSale(false));
    if (completePaidSaleBtn) completePaidSaleBtn.addEventListener('click', () => processSale(true));

    // Payment method buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal when clicking outside
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                closeCheckout();
            }
        });
    }
}

function loadSettings() {
    // Settings are already loaded in the settings object
    // This function can be extended to load from server/database
}

function autoSave() {
    saveToStorage('products', products);
    saveToStorage('salesHistory', salesHistory);
    saveToStorage('settings', settings);
}

// ===== ENHANCED BARCODE SCANNING =====

let barcodeBuffer = '';
let barcodeTimeout;
let scannerConnected = false;

// Enhanced barcode scanning with hardware support
function scanBarcode() {
    // Check if we have camera access for mobile scanning
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        showBarcodeScanModal();
    } else {
        // Fallback to manual entry
        manualBarcodeEntry();
    }
}

function manualBarcodeEntry() {
    const barcode = prompt(t('enterBarcode') + ':');
    if (barcode) {
        processBarcodeInput(barcode.trim());
    }
}

function showBarcodeScanModal() {
    const modal = document.createElement('div');
    modal.className = 'modal barcode-modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content barcode-scan-content">
            <h2>${t('scanBarcode')}</h2>
            <div class="scan-options">
                <button class="btn btn-primary" onclick="startCameraScanning()">${t('useCamera')}</button>
                <button class="btn btn-secondary" onclick="manualBarcodeEntry(); closeModal()">${t('manualEntry')}</button>
                <button class="btn btn-info" onclick="connectUSBScanner()">${t('connectScanner')}</button>
            </div>
            <div id="camera-container" style="display: none;">
                <video id="camera-preview" autoplay playsinline></video>
                <div class="scan-overlay">
                    <div class="scan-line"></div>
                </div>
                <div class="scan-instructions">${t('pointCameraAtBarcode')}</div>
            </div>
            <div class="modal-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Process barcode input from any source
function processBarcodeInput(barcode) {
    console.log('Processing barcode:', barcode);

    // Find product by barcode
    const product = findProductByBarcode(barcode);

    if (product) {
        addToCart(product);
        showBarcodeSuccess(product);
    } else {
        showBarcodeError(barcode);
    }
}

function findProductByBarcode(barcode) {
    return products.find(p =>
        p.active && (
            p.barcode === barcode ||
            p.barcode === barcode.replace(/^0+/, '') || // Remove leading zeros
            barcode.includes(p.barcode) ||
            p.name.toLowerCase().includes(barcode.toLowerCase()) ||
            (p.nameAr && p.nameAr.includes(barcode)) ||
            (p.nameFr && p.nameFr.toLowerCase().includes(barcode.toLowerCase())) ||
            (p.nameEs && p.nameEs.toLowerCase().includes(barcode.toLowerCase()))
        )
    );
}

function showBarcodeSuccess(product) {
    const productName = getProductName(product);
    alert(`✅ ${t('productAdded')}: ${productName} - ${formatCurrency(product.price)}`);
}

function showBarcodeError(barcode) {
    alert(`❌ ${t('productNotFound')}: ${barcode}`);
}

// Make functions globally available
window.handleLogin = handleLogin;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.logout = logout;
window.switchView = switchView;
window.searchProducts = searchProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.processSale = processSale;
window.printReceipt = printReceipt;
window.scanBarcode = scanBarcode;

// Inventory functions
window.filterInventory = filterInventory;
window.showAddProductModal = showAddProductModal;
window.addNewProduct = addNewProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.adjustStock = adjustStock;
window.deleteProduct = deleteProduct;
window.updateImagePreview = updateImagePreview;
window.closeModal = closeModal;

// Reports functions
window.generateDailyReport = generateDailyReport;
window.generateWeeklyReport = generateWeeklyReport;

// Users functions
window.showAddUserModal = showAddUserModal;
window.addNewUser = addNewUser;
window.editUser = editUser;
window.updateUser = updateUser;
window.toggleUserStatus = toggleUserStatus;
window.deleteUser = deleteUser;

// Settings functions
window.saveSettings = saveSettings;
window.createBackup = createBackup;
window.handleLogoUpload = handleLogoUpload;
window.removeLogo = removeLogo;

// Printing functions
window.printInvoice = printInvoice;
window.printLowStockReport = printLowStockReport;
window.printExpiredItemsReport = printExpiredItemsReport;
window.printClientCreditReport = printClientCreditReport;
window.printSupplierCreditReport = printSupplierCreditReport;

// Export/Import functions
window.exportInventory = exportInventory;
window.exportReports = exportReports;
window.exportUsers = exportUsers;
window.resetSettings = resetSettings;
window.exportData = exportData;
window.importData = importData;
window.clearAllData = clearAllData;

// Scanner functions
window.startCameraScanning = startCameraScanning;
window.connectUSBScanner = connectUSBScanner;

// Categories functions
window.loadCategoriesView = loadCategoriesView;
window.showAddCategoryModal = showAddCategoryModal;
window.addNewCategory = addNewCategory;
window.editCategory = editCategory;
window.updateCategory = updateCategory;
window.toggleCategoryStatus = toggleCategoryStatus;
window.deleteCategory = deleteCategory;
window.exportCategories = exportCategories;

// Charts functions
window.toggleCharts = toggleCharts;

// Supplier functions
window.loadSuppliersView = loadSuppliersView;
window.showAddSupplierModal = showAddSupplierModal;
window.addNewSupplier = addNewSupplier;
window.editSupplier = editSupplier;
window.updateSupplier = updateSupplier;
window.showRecordPurchaseModal = showRecordPurchaseModal;
window.showSupplierPurchases = showSupplierPurchases;
window.markPurchaseAsPaid = markPurchaseAsPaid;
