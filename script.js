// ==================== 1. Dark / Light Mode Toggle ====================
const themeBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlTag = document.getElementById('htmlTag');

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

// ==================== 2. Developer Alerts for Upcoming Apps ====================
document.querySelectorAll('.dev-alert').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('التطبيق قيد التطوير وسيتم رفعه قريباً جداً!');
    });
});

// ==================== 3. Auto Multilingual Logic (AR / EN) ====================
const translations = {
    ar: {
        navHome: "الرئيسية", navApps: "التطبيقات", navAbout: "عن المشروع", navCommunity: "المجتمع",
        btnCommunity: "انضم للقناة", welcomeBadge: "WELCOME TO SKY WORLD",
        heroDesc: "تطبيقات أندرويد عالية الجودة والموثوقية، مصممة خصيصاً بتجربة مستخدم عصرية بواسطة المطور <strong>YUS!F D!VV</strong>.",
        btnExplore: "تصفح التطبيقات",
        secTitle: "التطبيقات المميزة", secSub: "أفضل النسخ المطورة بخصائص متقدمة",
        app1Desc: "نسخة واتساب معدلة بتصميم iOS أنيق وإعدادات خصوصية حصرية.",
        app2Desc: "كيبورد احترافي بتصميم إنسيابي واختصارات سريعة للكتابة.",
        comTitle: "انضم إلى مجتمع SKY Community", comSub: "كن أول من يتلقى التحديثات والأخبار والدعم الفني المباشر.",
        dir: "rtl"
    },
    en: {
        navHome: "Home", navApps: "Apps", navAbout: "About", navCommunity: "Community",
        btnCommunity: "Join Channel", welcomeBadge: "WELCOME TO SKY WORLD",
        heroDesc: "High quality, powerful and secure applications made for Android. By <strong>YUS!F D!VV</strong>.",
        btnExplore: "Explore Apps",
        secTitle: "Featured Apps", secSub: "Powerful apps with premium experience",
        app1Desc: "Enhanced WhatsApp with premium features and max privacy.",
        app2Desc: "Custom keyboard with modern UI and smooth layout.",
        comTitle: "Join the SKY Community", comSub: "Be part of our community and get the latest updates, news and support.",
        dir: "ltr"
    }
};

// Check User Device Language
const userLang = (navigator.language || navigator.userLanguage || 'ar').startsWith('ar') ? 'ar' : 'en';

// Apply Language Settings
htmlTag.setAttribute('dir', translations[userLang].dir);
document.getElementById('navHome').innerText = translations[userLang].navHome;
document.getElementById('navApps').innerText = translations[userLang].navApps;
document.getElementById('navAbout').innerText = translations[userLang].navAbout;
document.getElementById('navCommunity').innerText = translations[userLang].navCommunity;
document.getElementById('btnCommunity').innerText = translations[userLang].btnCommunity;
document.getElementById('welcomeBadge').innerText = translations[userLang].welcomeBadge;
document.getElementById('heroDesc').innerHTML = translations[userLang].heroDesc;
document.getElementById('secTitle').innerText = translations[userLang].secTitle;
document.getElementById('secSub').innerText = translations[userLang].secSub;
document.getElementById('app1Desc').innerText = translations[userLang].app1Desc;
document.getElementById('app2Desc').innerText = translations[userLang].app2Desc;
document.getElementById('comTitle').innerText = translations[userLang].comTitle;
document.getElementById('comSub').innerText = translations[userLang].comSub;
