document.addEventListener('DOMContentLoaded', () => {
    // --- State & Config ---
    let currentLanguage = 'en';
    let currentCurrency = 'DZD';

    const currencies = {
        USD: { symbol: '$', rate: 0.0076, names: { en: 'US Dollar', ar: 'دولار أمريكي', fr: 'Dollar Américain', es: 'Dólar Estadounidense' } },
        EUR: { symbol: '€', rate: 0.0066, names: { en: 'Euro', ar: 'يورو', fr: 'Euro', es: 'Euro' } },
        AED: { symbol: 'د.إ', rate: 0.028, names: { en: 'UAE Dirham', ar: 'درهم إماراتي', fr: 'Dirham des EAU', es: 'Dirham de EAU' } },
        SAR: { symbol: 'ر.س', rate: 0.029, names: { en: 'Saudi Riyal', ar: 'ريال سعودي', fr: 'Riyal Saoudien', es: 'Riyal Saudí' } },
        DZD: { symbol: { en: 'DA', ar: 'د.ج', fr: 'DA', es: 'DA' }, rate: 1, names: { en: 'Algerian Dinar', ar: 'دينار جزائري', fr: 'Dinar Algérien', es: 'Dinar Argelino' } },
        GBP: { symbol: '£', rate: 0.0057, names: { en: 'British Pound', ar: 'جنيه إسترليني', fr: 'Livre Sterling', es: 'Libra Esterlina' } },
        TND: { symbol: 'د.ت', rate: 0.022, names: { en: 'Tunisian Dinar', ar: 'دينار تونسي', fr: 'Dinar Tunisien', es: 'Dinar Tunecino' } }
    };

    const translations = {
        en: {
            title: 'Zakat Calculator - RouibiPOS',
            header: 'Zakat Calculator',
            description: 'This tool helps you calculate the Zakat due on your business assets for one lunar year.',
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
            payablesLabel: 'Accounts Payable (Debits you owe)',
            payablesHelper: 'Auto-calculated from unpaid supplier purchases.',
            otherDebtsLabel: 'Other Short-term Liabilities',
            otherDebtsPlaceholder: 'e.g., salaries, rent due',
            calculateBtn: 'Calculate Zakat',
            resultsHeader: 'Calculation Results',
            totalAssets: 'Total Assets:',
            totalLiabilities: 'Total Liabilities:',
            zakatPool: 'Zakat Pool (Net Worth):',
            nisabThreshold: 'Nisab Threshold:',
            isZakatDue: 'Is Zakat Due?:',
            totalZakatPayable: 'Total Zakat Payable:',
            yes: 'Yes',
            no: 'No',
            backToPos: '← Back to POS',
            language: 'Language',
            accessDeniedHeader: 'Access Denied',
            accessDeniedMessage: 'You do not have permission to view this page.',
            fetchGoldPriceAlert: 'Simulating fetching gold price. In a real app, this would call a live API.'
        },
        ar: {
            title: 'حاسبة الزكاة - RouibiPOS',
            header: 'حاسبة الزكاة',
            description: 'تساعدك هذه الأداة على حساب الزكاة الواجبة على أصول عملك لمدة سنة هجرية واحدة.',
            nisabHeader: 'النصاب (العتبة)',
            goldPriceLabel: 'سعر الذهب الحالي (للجرام)',
            fetchPriceBtn: 'جلب أحدث سعر',
            nisabLabel: 'عتبة النصاب (بناءً على 85 جرام من الذهب)',
            nisabHelper: 'يتم حسابه من سعر الذهب ولكن يمكن تعديله.',
            assetsHeader: 'الأصول (الخاضعة للزكاة)',
            inventoryLabel: 'قيمة المخزون (بسعر التكلفة)',
            inventoryHelper: 'محسوبة تلقائيًا من تكاليف المنتج. يمكنك تعديل هذه القيمة.',
            cashLabel: 'النقد والأرصدة البنكية',
            cashPlaceholder: 'أدخل إجمالي النقد والأرصدة البنكية',
            receivablesLabel: 'الذمم المدينة (الديون المستحقة لك)',
            receivablesHelper: 'محسوبة تلقائيًا من مبيعات العملاء غير المدفوعة. عدّل للديون المعدومة.',
            liabilitiesHeader: 'الخصوم (القابلة للخصم)',
            payablesLabel: 'الذمم الدائنة (الديون التي عليك)',
            payablesHelper: 'محسوبة تلقائيًا من مشتريات الموردين غير المدفوعة.',
            otherDebtsLabel: 'التزامات أخرى قصيرة الأجل',
            otherDebtsPlaceholder: 'مثال: رواتب، إيجار مستحق',
            calculateBtn: 'حساب الزكاة',
            resultsHeader: 'نتائج الحساب',
            totalAssets: 'إجمالي الأصول:',
            totalLiabilities: 'إجمالي الخصوم:',
            zakatPool: 'وعاء الزكاة (صافي القيمة):',
            nisabThreshold: 'عتبة النصاب:',
            isZakatDue: 'هل الزكاة واجبة؟:',
            totalZakatPayable: 'إجمالي الزكاة المستحقة:',
            yes: 'نعم',
            no: 'لا',
            backToPos: '→ العودة إلى نقطة البيع',
            language: 'اللغة',
            accessDeniedHeader: 'تم رفض الوصول',
            accessDeniedMessage: 'ليس لديك إذن لعرض هذه الصفحة.',
            fetchGoldPriceAlert: 'محاكاة جلب سعر الذهب. في تطبيق حقيقي، سيتم استدعاء واجهة برمجة تطبيقات حية.'
        },
        fr: {
            title: 'Calculateur de Zakat - RouibiPOS',
            header: 'Calculateur de Zakat',
            description: 'Cet outil vous aide à calculer la Zakat due sur vos actifs commerciaux pour une année lunaire.',
            nisabHeader: 'Nisab (Seuil)',
            goldPriceLabel: 'Prix actuel de l\'or (par gramme)',
            fetchPriceBtn: 'Obtenir le dernier prix',
            nisabLabel: 'Seuil du Nisab (basé sur 85g d\'or)',
            nisabHelper: 'Ceci est calculé à partir du prix de l\'or mais peut être modifié.',
            assetsHeader: 'Actifs (soumis à la Zakat)',
            inventoryLabel: 'Valeur de l\'inventaire (au coût)',
            inventoryHelper: 'Calculé automatiquement à partir des coûts des produits. Vous pouvez ajuster cette valeur.',
            cashLabel: 'Trésorerie et Solde Bancaire',
            cashPlaceholder: 'Entrez le total de la trésorerie et du solde bancaire',
            receivablesLabel: 'Comptes Clients (Crédits qui vous sont dus)',
            receivablesHelper: 'Calculé automatiquement à partir des ventes clients non payées. Ajustez pour les créances irrécouvrables.',
            liabilitiesHeader: 'Passifs (Déductibles)',
            payablesLabel: 'Comptes Fournisseurs (Dettes que vous devez)',
            payablesHelper: 'Calculé automatiquement à partir des achats fournisseurs non payés.',
            otherDebtsLabel: 'Autres Dettes à Court Terme',
            otherDebtsPlaceholder: 'ex: salaires, loyers dus',
            calculateBtn: 'Calculer la Zakat',
            resultsHeader: 'Résultats du Calcul',
            totalAssets: 'Total des Actifs:',
            totalLiabilities: 'Total des Passifs:',
            zakatPool: 'Assiette de la Zakat (Valeur Nette):',
            nisabThreshold: 'Seuil du Nisab:',
            isZakatDue: 'Zakat Due?:',
            totalZakatPayable: 'Total Zakat à Payer:',
            yes: 'Oui',
            no: 'Non',
            backToPos: '← Retour au PDV',
            language: 'Langue',
            accessDeniedHeader: 'Accès Refusé',
            accessDeniedMessage: 'Vous n\'avez pas la permission de voir cette page.',
            fetchGoldPriceAlert: 'Simulation de la récupération du prix de l\'or. Dans une application réelle, cela appellerait une API en direct.'
        },
        es: {
            title: 'Calculadora de Zakat - RouibiPOS',
            header: 'Calculadora de Zakat',
            description: 'Esta herramienta le ayuda a calcular el Zakat adeudado sobre los activos de su negocio para un año lunar.',
            nisabHeader: 'Nisab (Umbral)',
            goldPriceLabel: 'Precio actual del oro (por gramo)',
            fetchPriceBtn: 'Obtener último precio',
            nisabLabel: 'Umbral del Nisab (basado en 85g de oro)',
            nisabHelper: 'Se calcula a partir del precio del oro pero se puede anular.',
            assetsHeader: 'Activos (Zakatables)',
            inventoryLabel: 'Valor del Inventario (al costo)',
            inventoryHelper: 'Calculado automáticamente a partir de los costos de los productos. Puede ajustar este valor.',
            cashLabel: 'Efectivo y Saldo Bancario',
            cashPlaceholder: 'Ingrese el total de efectivo y saldo bancario',
            receivablesLabel: 'Cuentas por Cobrar (Créditos a su favor)',
            receivablesHelper: 'Calculado automáticamente de las ventas a clientes no pagadas. Ajuste por deudas incobrables.',
            liabilitiesHeader: 'Pasivos (Deducibles)',
            payablesLabel: 'Cuentas por Pagar (Débitos que debe)',
            payablesHelper: 'Calculado automáticamente de las compras a proveedores no pagadas.',
            otherDebtsLabel: 'Otros Pasivos a Corto Plazo',
            otherDebtsPlaceholder: 'ej: salarios, alquileres adeudados',
            calculateBtn: 'Calcular Zakat',
            resultsHeader: 'Resultados del Cálculo',
            totalAssets: 'Total de Activos:',
            totalLiabilities: 'Total de Pasivos:',
            zakatPool: 'Base Imponible del Zakat (Patrimonio Neto):',
            nisabThreshold: 'Umbral del Nisab:',
            isZakatDue: '¿Se debe Zakat?:',
            totalZakatPayable: 'Total Zakat a Pagar:',
            yes: 'Sí',
            no: 'No',
            backToPos: '← Volver al TPV',
            language: 'Idioma',
            accessDeniedHeader: 'Acceso Denegado',
            accessDeniedMessage: 'No tiene permiso para ver esta página.',
            fetchGoldPriceAlert: 'Simulando la obtención del precio del oro. En una aplicación real, esto llamaría a una API en vivo.'
        }
    };

    // --- Elements ---
    const languageSelect = document.getElementById('language-select-zakat');
    const goldPriceInput = document.getElementById('goldPrice');
    const fetchGoldPriceBtn = document.getElementById('fetchGoldPriceBtn');
    const nisabInput = document.getElementById('nisab');
    const inventoryValueInput = document.getElementById('inventoryValue');
    const cashBalanceInput = document.getElementById('cashBalance');
    const receivablesInput = document.getElementById('receivables');
    const payablesInput = document.getElementById('payables');
    const otherDebtsInput = document.getElementById('otherDebts');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');

    // --- Result Spans ---
    const totalAssetsResult = document.getElementById('totalAssetsResult');
    const totalLiabilitiesResult = document.getElementById('totalLiabilitiesResult');
    const zakatPoolResult = document.getElementById('zakatPoolResult');
    const nisabResult = document.getElementById('nisabResult');
    const isZakatDueResult = document.getElementById('isZakatDueResult');
    const totalZakatResult = document.getElementById('totalZakatResult');

    // --- Translation & Formatting ---
    function getLocaleForDate() {
        switch (currentLanguage) {
            case 'ar': return 'ar-DZ';
            case 'fr': return 'fr-FR';
            case 'es': return 'es-ES';
            default: return 'en-US';
        }
    }

    function translatePage() {
        const lang = translations[currentLanguage];
        if (!lang) return;

        document.title = lang.title;
        document.documentElement.lang = currentLanguage;
        document.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (lang[key]) {
                el.textContent = lang[key];
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (lang[key]) {
                el.placeholder = lang[key];
            }
        });
    }

    function formatCurrency(amount) {
        const currencyInfo = currencies[currentCurrency];
        if (!currencyInfo) return amount.toFixed(2);

        const convertedAmount = amount * currencyInfo.rate;

        let symbol = (typeof currencyInfo.symbol === 'object') ? (currencyInfo.symbol[currentLanguage] || currencyInfo.symbol.en) : currencyInfo.symbol;

        const formattedAmount = convertedAmount.toLocaleString(getLocaleForDate(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        return currentLanguage === 'ar' ? `${formattedAmount} ${symbol}` : `${symbol}${formattedAmount}`;
    }

    // --- Data Loading ---
    function getLocalStorageData(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error(`Error reading ${key} from localStorage`, e);
            return defaultValue;
        }
    }

    function calculateInventoryValue() {
        const products = getLocalStorageData('products', []);
        if (!Array.isArray(products)) {
            console.error('Products data is not an array:', products);
            return 0;
        }
        return products.reduce((total, product) => {
            const stock = parseFloat(product.stock) || 0;
            // Corrected from costPrice to cost to match product data structure in enhanced-script.js
            const costPrice = parseFloat(product.cost) || 0;
            return total + (stock * costPrice);
        }, 0);
    }

    function calculateTotalReceivables() {
        const salesHistory = getLocalStorageData('salesHistory', []);
        if (!Array.isArray(salesHistory)) {
            console.error('Sales history data is not an array:', salesHistory);
            return 0;
        }
        return salesHistory
            .filter(sale => sale.paymentStatus === 'unpaid')
            .reduce((total, sale) => total + (sale.total || 0), 0);
    }

    function calculateTotalPayables() {
        const purchases = getLocalStorageData('purchases', []);
        if (!Array.isArray(purchases)) {
            console.error('Purchases data is not an array:', purchases);
            return 0;
        }
        // Assuming 'purchases' structure from enhanced-script.js
        return purchases
            .filter(purchase => purchase.paymentStatus === 'unpaid')
            .reduce((total, purchase) => total + (purchase.total || 0), 0);
    }

    function updateNisab() {
        const goldPrice = parseFloat(goldPriceInput.value) || 0;
        const nisabValue = goldPrice * 85;
        nisabInput.value = nisabValue.toFixed(2);
    }

    // --- Main Calculation Logic ---
    async function fetchGoldPrice() {
        // In a real application, you would use a reliable Gold Price API.
        // This requires an API key which should not be stored in frontend code.
        // Example: fetch('https://www.goldapi.io/api/XAU/USD', { headers: { 'x-access-token': 'YOUR_API_KEY' } })
        alert(translations[currentLanguage].fetchGoldPriceAlert || translations.en.fetchGoldPriceAlert);

        // For demonstration, we'll use a mock price.
        const mockApiPriceOz = 2350.50; // Mock price per ounce
        const pricePerGram = mockApiPriceOz / 31.1035; // Convert from ounce to gram
        goldPriceInput.value = pricePerGram.toFixed(2);
        updateNisab();
    }

    function calculateZakat() {
        // 1. Get all values from inputs
        const inventoryValue = parseFloat(inventoryValueInput.value) || 0;
        const cashBalance = parseFloat(cashBalanceInput.value) || 0;
        const receivables = parseFloat(receivablesInput.value) || 0; // Credits

        const payables = parseFloat(payablesInput.value) || 0; // Debits
        const otherDebts = parseFloat(otherDebtsInput.value) || 0;

        // 2. Calculate totals
        const totalAssets = inventoryValue + cashBalance + receivables;
        const totalLiabilities = payables + otherDebts;
        const zakatPool = totalAssets - totalLiabilities; // Net worth for Zakat

        // 3. Get Nisab value
        const nisabValue = parseFloat(nisabInput.value) || 0;

        // 4. Determine if Zakat is due and calculate it
        const isDue = zakatPool >= nisabValue;
        let zakatPayable = 0;
        if (isDue) {
            zakatPayable = zakatPool * 0.025; // 2.5%
        }

        // 5. Display results
        resultsDiv.style.display = 'block';
        
        totalAssetsResult.textContent = formatCurrency(totalAssets);
        totalLiabilitiesResult.textContent = formatCurrency(totalLiabilities);
        zakatPoolResult.textContent = formatCurrency(zakatPool);
        nisabResult.textContent = formatCurrency(nisabValue);
        isZakatDueResult.textContent = isDue ? translations[currentLanguage].yes : translations[currentLanguage].no;
        totalZakatResult.textContent = formatCurrency(zakatPayable);
    }

    function handleLanguageChange(lang) {
        currentLanguage = lang;
        localStorage.setItem('posLanguage', lang);
        translatePage();

        // If results are visible, re-display them with new language/formatting
        if (resultsDiv.style.display === 'block') {
            calculateZakat();
        }
    }

    // --- Event Listeners and Initialization ---
    function initialize() {
        // Load language first to show translated access denied message
        currentLanguage = localStorage.getItem('posLanguage') || 'en';
        const savedUser = getLocalStorageData('currentUser', null);

        if (!savedUser || savedUser.role !== 'admin') {
            const lang = translations[currentLanguage] || translations.en;
            document.body.innerHTML = `
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; margin: 2em; background-color: #f4f4f9; color: #333; }
                    .container { max-width: 800px; margin: auto; background: white; padding: 2em; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    h1 { color: #c00; }
                    .back-link { display: inline-block; margin-top: 2em; color: #0056b3; text-decoration: none; }
                    .back-link:hover { text-decoration: underline; }
                </style>
                <div class="container" style="text-align: center;">
                    <h1>${lang.accessDeniedHeader}</h1>
                    <p>${lang.accessDeniedMessage}</p>
                    <a href="enhanced-index.html" class="back-link">${lang.backToPos}</a>
                </div>
            `;
            document.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
            document.title = lang.accessDeniedHeader;
            return;
        }

        // Continue with initialization for admin users
        currentCurrency = localStorage.getItem('posCurrency') || 'DZD';

        // Set the language selector's value
        if (languageSelect) languageSelect.value = currentLanguage;

        // Apply language
        translatePage();

        // Pre-fill data from RouibiPOS localStorage
        inventoryValueInput.value = calculateInventoryValue().toFixed(2);
        receivablesInput.value = calculateTotalReceivables().toFixed(2);
        payablesInput.value = calculateTotalPayables().toFixed(2);

        // Initial Nisab calculation
        updateNisab();

        // Event Listeners
        if (languageSelect) languageSelect.addEventListener('change', (e) => handleLanguageChange(e.target.value));
        goldPriceInput.addEventListener('input', updateNisab);
        calculateBtn.addEventListener('click', calculateZakat);
        fetchGoldPriceBtn.addEventListener('click', fetchGoldPrice);
    }

    initialize();
});