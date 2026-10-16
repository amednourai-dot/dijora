const SUPABASE_URL = "https://rjqihwpojiptyvomzdts.supabase.co";
const SUPABASE_KEY = "sb_publishable_zOjRtcPVLvoUic5xsMF90w_KIZBg0W3";

const translations = {
    ar: {
        direction: "rtl",
        cart: "السلة",
        eyebrow: "عالمك الرقمي في مكان واحد",
        heroTitle: "اكتشف منتجات رقمية<br><span>تستحق وقتك.</span>",
        heroDescription: "كتب إلكترونية، أدوات ذكية، وقوالب تساعدك على التعلم والعمل والإبداع.",
        heroButton: "اكتشف المنتجات ←",
        benefit1: "وصول رقمي",
        benefit1sub: "منتجات رقمية",
        benefit2: "شراء آمن",
        benefit2sub: "معاملات موثوقة",
        benefit3: "متجر عالمي",
        benefit3sub: "ثلاث لغات",
        collection: "تصفح المتجر",
        productsTitle: "اكتشف مجموعتنا",
        all: "الكل",
        books: "كتب إلكترونية",
        tools: "أدوات رقمية",
        templates: "قوالب",
        search: "ابحث عن كتاب أو أداة...",
        add: "أضف للسلة",
        added: "تمت إضافة المنتج إلى السلة",
        empty: "لا توجد منتجات مطابقة لبحثك.",
        sellerEyebrow: "للمبدعين وأصحاب المنتجات",
        sellerTitle: "لديك منتج رقمي؟<br>مكانك هنا.",
        sellerDescription: "اكتشف فرص عرض منتجاتك الرقمية على Dijora.",
        sellerButton: "قريبًا: انضم كبائع",
        sellerMessage: "تسجيل البائعين سيكون متاحًا في مرحلة لاحقة.",
        footer: "منتجات رقمية تلهم أفكارك.",
        cartTitle: "سلة المشتريات",
        total: "الإجمالي",
        checkout: "متابعة الطلب عبر WhatsApp",
        checkoutNote: "نسخة تجريبية: لن يتم تحصيل أي مبلغ من خلال هذا الموقع.",
        emptyCart: "سلة المشتريات فارغة.",
        remove: "حذف",
        removed: "تم حذف المنتج",
        checkoutUnavailable: "الشراء الحقيقي غير مفعّل بعد. نحتاج إلى إعداد الطلبات والدفع أولًا.",
        count: n => `${n} منتجات`,
        categoryBooks: "كتاب",
        categoryTools: "أداة رقمية",
        categoryTemplates: "قالب",
        loadError: "تعذر تحميل المنتجات من قاعدة البيانات.",
        products: [
            ["Python للمبتدئين", "دليل مبسط للبدء في تعلم البرمجة.", "books", "📘", 2500],
            ["تعلم الإنجليزية", "دليل تدريبي لبناء مفرداتك اليومية.", "books", "📚", 2000],
            ["دليل تطوير الويب", "مدخل عملي إلى HTML وCSS وJavaScript.", "books", "📖", 3500],
            ["منظم JSON", "أداة لتنظيم بيانات JSON والتحقق منها.", "tools", "⚙️", 1500],
            ["قالب إدارة الأعمال", "قالب تجريبي لتنظيم بيانات المشروع.", "templates", "📊", 3000],
            ["قالب موقع شخصي", "تصميم أولي لموقع شخصي متجاوب.", "templates", "💻", 4000]
        ]
    },

    fr: {
        direction: "ltr",
        cart: "Panier",
        eyebrow: "Votre univers numérique en un seul endroit",
        heroTitle: "Découvrez des produits<br><span>qui vous inspirent.</span>",
        heroDescription: "Livres numériques, outils intelligents et modèles pour apprendre, travailler et créer.",
        heroButton: "Découvrir les produits →",
        benefit1: "Accès numérique",
        benefit1sub: "Produits numériques",
        benefit2: "Achat sécurisé",
        benefit2sub: "Transactions fiables",
        benefit3: "Boutique mondiale",
        benefit3sub: "Trois langues",
        collection: "Explorer la boutique",
        productsTitle: "Découvrez notre collection",
        all: "Tout",
        books: "Livres numériques",
        tools: "Outils numériques",
        templates: "Modèles",
        search: "Rechercher un livre ou un outil...",
        add: "Ajouter",
        added: "Produit ajouté au panier",
        empty: "Aucun produit correspondant.",
        sellerEyebrow: "Pour les créateurs et vendeurs",
        sellerTitle: "Un produit numérique ?<br>Vendez-le ici.",
        sellerDescription: "Découvrez les possibilités de vente sur Dijora.",
        sellerButton: "Bientôt : Devenir vendeur",
        sellerMessage: "L'inscription des vendeurs sera disponible plus tard.",
        footer: "Des produits numériques pour inspirer vos idées.",
        cartTitle: "Votre panier",
        total: "Total",
        checkout: "Continuer via WhatsApp",
        checkoutNote: "Version de démonstration : aucun paiement ne sera effectué.",
        emptyCart: "Votre panier est vide.",
        remove: "Supprimer",
        removed: "Produit supprimé",
        checkoutUnavailable: "Les achats réels ne sont pas encore activés.",
        count: n => `${n} produits`,
        categoryBooks: "Livre",
        categoryTools: "Outil numérique",
        categoryTemplates: "Modèle",
        loadError: "Impossible de charger les produits.",
        products: [
            ["Python pour débutants", "Un guide simple pour apprendre la programmation.", "books", "📘", 2500],
            ["Apprendre l'anglais", "Un guide pour développer votre vocabulaire.", "books", "📚", 2000],
            ["Guide du développement web", "Introduction pratique à HTML, CSS et JavaScript.", "books", "📖", 3500],
            ["Formateur JSON", "Un outil pour formater et vérifier les données JSON.", "tools", "⚙️", 1500],
            ["Modèle de gestion", "Un modèle de démonstration pour organiser un projet.", "templates", "📊", 3000],
            ["Modèle de site personnel", "Une maquette responsive pour votre site personnel.", "templates", "💻", 4000]
        ]
    },

    en: {
        direction: "ltr",
        cart: "Cart",
        eyebrow: "Your digital world in one place",
        heroTitle: "Discover digital products<br><span>worth your time.</span>",
        heroDescription: "E-books, smart tools and templates to help you learn, work and create.",
        heroButton: "Explore products →",
        benefit1: "Digital access",
        benefit1sub: "Digital products",
        benefit2: "Secure shopping",
        benefit2sub: "Trusted transactions",
        benefit3: "Global store",
        benefit3sub: "Three languages",
        collection: "Explore the store",
        productsTitle: "Discover our collection",
        all: "All",
        books: "E-books",
        tools: "Digital tools",
        templates: "Templates",
        search: "Search for a book or tool...",
        add: "Add to cart",
        added: "Product added to cart",
        empty: "No matching products found.",
        sellerEyebrow: "For creators and sellers",
        sellerTitle: "Have a digital product?<br>Sell it here.",
        sellerDescription: "Explore opportunities to showcase your digital products on Dijora.",
        sellerButton: "Coming soon: Become a seller",
        sellerMessage: "Seller registration will be available in a later stage.",
        footer: "Digital products to inspire your ideas.",
        cartTitle: "Shopping cart",
        total: "Total",
        checkout: "Continue via WhatsApp",
        checkoutNote: "Demo version: no payment will be collected on this website.",
        emptyCart: "Your cart is empty.",
        remove: "Remove",
        removed: "Product removed",
        checkoutUnavailable: "Real purchases are not enabled yet.",
        count: n => `${n} products`,
        categoryBooks: "Book",
        categoryTools: "Digital tool",
        categoryTemplates: "Template",
        loadError: "Unable to load products.",
        products: [
            ["Python for Beginners", "A simple guide to getting started with coding.", "books", "📘", 2500],
            ["Learn English", "A guide to building your everyday vocabulary.", "books", "📚", 2000],
            ["Web Development Guide", "A practical introduction to HTML, CSS and JavaScript.", "books", "📖", 3500],
            ["JSON Formatter", "A tool to format and validate JSON data.", "tools", "⚙️", 1500],
            ["Business Organizer Template", "A demo template to organize project information.", "templates", "📊", 3000],
            ["Personal Website Template", "A responsive starter design for a personal website.", "templates", "💻", 4000]
        ]
    }
};

const currency = "XAF";

const state = {
    language: "ar",
    category: "all",
    search: "",
    cart: [],
    products: [],
    usingFallback: false
};

const $ = id => document.getElementById(id);
let toastTimer;

function showToast(message) {
    const toast = $("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

function getFallbackProducts() {
    return translations[state.language].products.map((p, index) => ({
        id: `demo-${index + 1}`,
        name: p[0],
        description: p[1],
        category: p[2],
        icon: p[3],
        price: p[4]
    }));
}

async function loadProducts() {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/products?select=id,name_ar,name_fr,name_en,description_ar,description_fr,description_en,price,category,icon,active&active=eq.true&order=id.asc`,
            {
                headers: {
                    apikey: SUPABASE_KEY
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const rows = await response.json();

        if (!Array.isArray(rows)) {
            throw new Error("Unexpected response from database");
        }

        state.products = rows.map(row => ({
            id: row.id,
            name: {
                ar: row.name_ar || "",
                fr: row.name_fr || "",
                en: row.name_en || ""
            },
            description: {
                ar: row.description_ar || "",
                fr: row.description_fr || "",
                en: row.description_en || ""
            },
            category: normalizeCategory(row.category),
            icon: row.icon || "📦",
            price: Number(row.price) || 0
        }));

        state.usingFallback = false;

        if (state.products.length === 0) {
            showToast(translations[state.language].empty);
        }

        renderProducts();
        renderCart();
    } catch (error) {
        console.error("Supabase error:", error);

        state.products = [];
        state.usingFallback = true;

        showToast(translations[state.language].loadError);

        renderProducts();
        renderCart();
    }
}

function normalizeCategory(category) {
    const value = String(category || "").toLowerCase();

    if (["books", "book", "livres", "ebooks", "كتب", "كتب إلكترونية"].includes(value)) {
        return "books";
    }

    if (["tools", "tool", "outils", "أدوات", "أدوات رقمية"].includes(value)) {
        return "tools";
    }

    if (["templates", "template", "modèles", "قوالب"].includes(value)) {
        return "templates";
    }

    return value || "templates";
}

function getProducts() {
    if (state.usingFallback) {
        return getFallbackProducts();
    }

    return state.products.map(product => ({
        ...product,
        name: typeof product.name === "object"
            ? product.name[state.language] || product.name.en || product.name.ar
            : product.name,
        description: typeof product.description === "object"
            ? product.description[state.language] || product.description.en || product.description.ar
            : product.description
    }));
}

function formatPrice(price) {
    return new Intl.NumberFormat(
        state.language === "ar" ? "ar" :
        state.language === "fr" ? "fr-FR" : "en-US"
    ).format(price) + " " + currency;
}

function categoryLabel(category) {
    const t = translations[state.language];

    return category === "books"
        ? t.categoryBooks
        : category === "tools"
            ? t.categoryTools
            : t.categoryTemplates;
}

function renderProducts() {
    const t = translations[state.language];
    const grid = $("product-grid");
    const emptyState = $("empty-state");
    const total = $("product-total");

    if (!grid || !emptyState || !total) return;

    const products = getProducts().filter(product => {
        const matchesCategory =
            state.category === "all" ||
            product.category === state.category;

        const query = state.search.toLocaleLowerCase();

        const matchesSearch =
            `${product.name} ${product.description}`
                .toLocaleLowerCase()
                .includes(query);

        return matchesCategory && matchesSearch;
    });

    grid.replaceChildren();

    emptyState.hidden = products.length > 0;
    total.textContent = t.count(products.length);

    products.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        const visual = document.createElement("div");
        visual.className = `product-visual ${product.category}`;

        const tag = document.createElement("span");
        tag.className = "product-tag";
        tag.textContent = categoryLabel(product.category);

        const symbol = document.createElement("span");
        symbol.className = "product-symbol";
        symbol.textContent = product.icon;

        visual.append(tag, symbol);

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("span");
        category.className = "product-category";
        category.textContent = categoryLabel(product.category);

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const bottom = document.createElement("div");
        bottom.className = "product-bottom";

        const price = document.createElement("strong");
        price.className = "product-price";
        price.textContent = formatPrice(product.price);

        const add = document.createElement("button");
        add.className = "add-button";
        add.textContent = t.add;

        add.addEventListener("click", () => {
            addToCart(product.id);
        });

        bottom.append(price, add);
        info.append(category, title, description, bottom);
        card.append(visual, info);

        grid.append(card);
    });
}

function addToCart(id) {
    const product = getProducts().find(p => String(p.id) === String(id));

    if (!product) return;

    const existing = state.cart.find(
        item => String(item.id) === String(id)
    );

    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }

    renderCart();
    showToast(translations[state.language].added);
}

function removeFromCart(id) {
    state.cart = state.cart.filter(
        item => String(item.id) !== String(id)
    );

    renderCart();
    showToast(translations[state.language].removed);
}

function renderCart() {
    const t = translations[state.language];

    const countElement = $("cart-count");
    const itemsElement = $("cart-items");
    const totalElement = $("cart-total");

    if (!countElement || !itemsElement || !totalElement) return;

    const count = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const total = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    countElement.textContent = count;
    itemsElement.replaceChildren();
    totalElement.textContent = formatPrice(total);

    if (state.cart.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = t.emptyCart;

        itemsElement.append(empty);
        return;
    }

    state.cart.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item";

        const details = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent =
            `${item.quantity} × ${formatPrice(item.price)}`;

        details.append(name, price);

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = t.remove;

        remove.addEventListener("click", () => {
            removeFromCart(item.id);
        });

        row.append(details, remove);
        itemsElement.append(row);
    });
}

function applyLanguage() {
    const t = translations[state.language];

    document.documentElement.lang = state.language;
    document.documentElement.dir = t.direction;

    const textMap = {
        "cart-label": t.cart,
        "hero-eyebrow": t.eyebrow,
        "hero-description": t.heroDescription,
        "hero-button": t.heroButton,
        "benefit-one": t.benefit1,
        "benefit-one-sub": t.benefit1sub,
        "benefit-two": t.benefit2,
        "benefit-two-sub": t.benefit2sub,
        "benefit-three": t.benefit3,
        "benefit-three-sub": t.benefit3sub,
        "collection-label": t.collection,
        "products-title": t.productsTitle,
        "cat-all": t.all,
        "cat-books": t.books,
        "cat-tools": t.tools,
        "cat-templates": t.templates,
        "seller-eyebrow": t.sellerEyebrow,
        "seller-description": t.sellerDescription,
        "seller-button": t.sellerButton,
        "footer-description": t.footer,
        "dialog-title": t.cartTitle,
        "total-label": t.total,
        "checkout-button": t.checkout,
        "checkout-note": t.checkoutNote
    };

    Object.entries(textMap).forEach(([id, value]) => {
        const element = $(id);
        if (element) element.textContent = value;
    });

    const heroTitle = $("hero-title");
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;

    const sellerTitle = $("seller-title");
    if (sellerTitle) sellerTitle.innerHTML = t.sellerTitle;

    const search = $("search");
    if (search) search.placeholder = t.search;

    const closeCart = $("close-cart");
    if (closeCart) {
        closeCart.setAttribute(
            "aria-label",
            state.language === "ar" ? "إغلاق السلة" :
            state.language === "fr" ? "Fermer le panier" : "Close cart"
        );
    }

    document.querySelectorAll(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === state.category
        );
    });

    renderProducts();
    renderCart();
}

const languageSelect = $("language");

if (languageSelect) {
    languageSelect.addEventListener("change", event => {
        state.language = event.target.value;
        applyLanguage();
    });
}

const searchInput = $("search");

if (searchInput) {
    searchInput.addEventListener("input", event => {
        state.search = event.target.value.trim();
        renderProducts();
    });
}

const categories = $("categories");

if (categories) {
    categories.addEventListener("click", event => {
        const button = event.target.closest("button[data-category]");

        if (!button) return;

        state.category = button.dataset.category;

        document.querySelectorAll(".category").forEach(item => {
            item.classList.toggle("active", item === button);
        });

        renderProducts();
    });
}

const cartButton = $("cart-button");

if (cartButton) {
    cartButton.addEventListener("click", () => {
        const dialog = $("cart-dialog");

        if (dialog && typeof dialog.showModal === "function") {
            dialog.showModal();
        }
    });
}

const closeCartButton = $("close-cart");

if (closeCartButton) {
    closeCartButton.addEventListener("click", () => {
        const dialog = $("cart-dialog");

        if (dialog) dialog.close();
    });
}

const sellerButton = $("seller-button");

if (sellerButton) {
    sellerButton.addEventListener("click", () => {
        showToast(translations[state.language].sellerMessage);
    });
}

const checkoutButton = $("checkout-button");

if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
        showToast(translations[state.language].checkoutUnavailable);
    });
}

const yearElement = $("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

applyLanguage();
loadProducts();
