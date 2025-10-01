// --- JavaScript for Interactivity and Animation ---

// A. TRANSLATION LOGIC
// =================================================================

// 1. Translation Data Store
// An object containing all text content for both supported languages.
const translations = {
    'fa': {
        'page-title': 'حسین رحیمی | توسعه دهنده وب و برنامه موبایل و دسکتاپ',
        'nav-title': 'پورتفولیو',
        'nav-home': 'خانه',
        'nav-about': 'درباره من',
        'nav-skills': 'مهارت‌ها',
        'nav-projects': 'پروژه‌ها',
        'nav-contact': 'تماس',
        'nav-home-mobile': 'خانه',
        'nav-about-mobile': 'درباره من',
        'nav-skills-mobile': 'مهارت‌ها',
        'nav-projects-mobile': 'پروژه‌ها',
        'nav-contact-mobile': 'تماس',
        // MODIFIED: Changed hero title for Farsi.
        'hero-title': 'سلام! من <span class="hero-title-effect text-blue-400">حسین رحیمی</span> هستم',
        'hero-subtitle': '<span class="text-yellow-400">توسعه‌دهنده چندکاره</span> 🚀 | علاقه‌مند به <span class="text-green-400">Python</span> و <span class="text-purple-400">Dart/Flutter</span>',
        'hero-btn-projects': 'مشاهده پروژه‌ها ✨',
        'hero-btn-contact': 'تماس بگیرید 📞',
        'about-heading': 'درباره من 👋',
        'about-p1': 'من یک فرد بسیار کنجکاو هستم که اشتیاق زیادی به <span class="text-red-400">بدن‌سازی</span>، <span class="text-yellow-400">مطالعه کتاب</span> و البته <span class="text-blue-400">برنامه‌نویسی</span> دارم.',
        'about-p2': 'در دنیای تکنولوژی، تمرکز اصلی من بر روی زبان‌های **Python**، **Dart** و **JavaScript** است. علاوه بر توسعه نرم‌افزار، به حوزه **ارزهای دیجیتال** و **طراحی لوگوهای حرفه‌ای** نیز علاقه دارم و همیشه در حال یادگیری مفاهیم جدید هستم.',
        'about-p3': 'این روزها، با شور و اشتیاق مشغول کار با سیستم عامل **Linux** هستم و همزمان، تلاش می‌کنم مهارت‌های زبان **انگلیسی** خود را تقویت کنم. هدف من ساختن راه‌حل‌های خلاقانه و با کیفیت است.',
        'skills-heading': 'مهارت‌های اصلی من 🧠',
        'skill-python-title': 'پایتون (Python)',
        'skill-flutter-title': 'دارت / فلاتر',
        'skill-js-title': 'جاوااسکریپت (JS)',
        'skill-python': 'توسعه بک‌اند و تحلیل داده',
        'skill-flutter': 'اپلیکیشن‌های موبایل (کراس‌پلتفرم)',
        'skill-js': 'توسعه وب فرانت‌اند',
        'skill-logo-title': 'طراحی لوگو',
        'skill-logo': 'خلاقیت بصری و برندینگ',
        'skill-linux-title': 'لینوکس',
        'skill-linux': 'محیط توسعه و ابزارهای خط فرمان',
        'skill-tailwind': 'طراحی واکنش‌گرا و سریع',
        'skill-crypto-title': 'کریپتوکارنسی',
        'skill-crypto': 'آشنایی با بلاکچین و وب ۳',
        'skill-problem-title': 'حل مسئله',
        'skill-problem': 'رویکرد منطقی و ساختارمند',
        'projects-heading': 'پروژه‌های اخیر 💻',
        'project1-title': 'اپلیکیشن مدیریت وظایف',
        'project1-desc': 'یک اپلیکیشن موبایل کامل که با فلاتر و دارت توسعه یافته و امکان مدیریت وظایف، تاریخ‌ها و نوتیفیکیشن‌ها را فراهم می‌کند.',
        'project2-title': 'سرویس API با پایتون',
        'project2-desc': 'ساخت یک رابط برنامه‌نویسی کاربردی (API) قوی و مقیاس‌پذیر با استفاده از Python و فریم‌ورک FastAPI برای مدیریت کاربران و داده‌ها.',
        'project3-title': 'بازی ساده تحت وب',
        'project3-desc': 'توسعه یک بازی کوچک و تعاملی تحت وب با استفاده از جاوااسکریپت خالص و HTML/CSS برای تقویت مهارت‌های فرانت‌اند.',
        'project4-title': 'تولیدکننده رمز عبور قوی',
        'project4-desc': 'ابزاری برای تولید رمزهای عبور امن و غیرقابل پیش‌بینی با گزینه‌های سفارشی‌سازی مختلف.',
        'project-link': 'مشاهده جزئیات →',
        'contact-heading': 'برای همکاری در تماس باشید 📧',
        'contact-name-label': 'نام کامل',
        'contact-name-placeholder': 'مثلاً: علی احمدی',
        'contact-email-label': 'آدرس ایمیل',
        'contact-message-label': 'پیام شما',
        'contact-message-placeholder': 'شرح پروژه یا سوال خود را اینجا بنویسید...',
        'contact-send-btn': 'ارسال پیام 📨',
        'contact-other-ways': 'راه‌های دیگر تماس:',
        'footer-text': '&copy; 2025 پورتفولیو حسین رحیمی. تمامی حقوق محفوظ است. | طراحی با ✨ Tailwind CSS',
        'lang-switcher-text': 'English'
    },
    'en': {
        'page-title': 'Hossein Rahimi | Web, Mobile & Desktop App Developer',
        'nav-title': 'Portfolio',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'nav-home-mobile': 'Home',
        'nav-about-mobile': 'About',
        'nav-skills-mobile': 'Skills',
        'nav-projects-mobile': 'Projects',
        'nav-contact-mobile': 'Contact',
        // MODIFIED: Changed hero title for English.
        'hero-title': 'Hello! I\'m <span class="hero-title-effect text-blue-400">Hossein Rahimi</span>',
        'hero-subtitle': 'Multi-Disciplinary Developer 🚀 | Passionate about <span class="text-green-400">Python</span> and <span class="text-purple-400">Dart/Flutter</span>',
        'hero-btn-projects': 'View Projects ✨',
        'hero-btn-contact': 'Contact Me 📞',
        'about-heading': 'About Me 👋',
        'about-p1': 'I am a highly curious individual with a great passion for <span class="text-red-400">Bodybuilding</span>, <span class="text-yellow-400">Reading books</span>, and, of course, <span class="text-blue-400">Coding</span>.',
        'about-p2': 'In the world of technology, my main focus is on **Python**, **Dart**, and **JavaScript**. Besides software development, I am interested in **Cryptocurrencies** and **Professional Logo Design**, and I am always learning new concepts.',
        'about-p3': 'Nowadays, I am enthusiastically working with the **Linux** operating system, and at the same time, I am trying to strengthen my **English** language skills. My goal is to build creative and high-quality solutions.',
        'skills-heading': 'My Core Skills 🧠',
        'skill-python-title': 'Python',
        'skill-flutter-title': 'Dart / Flutter',
        'skill-js-title': 'JavaScript (JS)',
        'skill-python': 'Backend Development & Data Analysis',
        'skill-flutter': 'Cross-platform Mobile Apps',
        'skill-js': 'Frontend Web Development',
        'skill-logo-title': 'Logo Design',
        'skill-logo': 'Visual Creativity & Branding',
        'skill-linux-title': 'Linux',
        'skill-linux': 'Development Environment & CLI',
        'skill-tailwind': 'Responsive and Fast Design',
        'skill-crypto-title': 'Cryptocurrency',
        'skill-crypto': 'Blockchain & Web3 Familiarity',
        'skill-problem-title': 'Problem Solving',
        'skill-problem': 'Logical and Structured Approach',
        'projects-heading': 'Recent Projects 💻',
        'project1-title': 'Task Management Application',
        'project1-desc': 'A complete mobile application developed with Flutter and Dart, providing task management, deadlines, and notifications.',
        'project2-title': 'Python Backend API Service',
        'project2-desc': 'Building a robust and scalable API using Python and the FastAPI framework for managing users and data.',
        'project3-title': 'Simple Web Game',
        'project3-desc': 'Developing a small, interactive web game using vanilla JavaScript and HTML/CSS to strengthen frontend skills.',
        'project4-title': 'Strong Password Generator',
        'project4-desc': 'A tool to generate secure and unpredictable passwords with various customization options.',
        'project-link': 'View Details →',
        'contact-heading': 'Get in Touch for Collaboration 📧',
        'contact-name-label': 'Full Name',
        'contact-name-placeholder': 'E.g., John Doe',
        'contact-email-label': 'Email Address',
        'contact-message-label': 'Your Message',
        'contact-message-placeholder': 'Write your project description or question here...',
        'contact-send-btn': 'Send Message 📨',
        'contact-other-ways': 'Other ways to connect:',
        'footer-text': '&copy; 2025 Hossein Rahimi Portfolio. All rights reserved. | Designed with ✨ Tailwind CSS',
        'lang-switcher-text': 'فارسی'
    }
};

// 2. Language State Management
const defaultLang = 'en';
let currentLang = localStorage.getItem('lang') || defaultLang;

const htmlEl = document.documentElement;

/**
 * Sets the language of the entire page.
 * @param {string} lang - The target language ('fa' or 'en').
 */
function setLanguage(lang) {
    // Find all elements that need translation and update their content.
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholder text for form inputs.
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update the main <html> tag's lang and dir attributes for accessibility and styling.
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', (lang === 'fa') ? 'rtl' : 'ltr');
    
    // Save the user's language preference in their browser for future visits.
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

/**
 * Toggles the language between English and Persian.
 */
function toggleLanguage() {
    const newLang = (currentLang === 'en') ? 'fa' : 'en';
    setLanguage(newLang);
}


// B. UI INTERACTIVITY
// =================================================================

/**
 * Initializes the Scroll Reveal animation effect for elements.
 * This uses the Intersection Observer API for performance.
 */
function initializeScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it has been revealed.
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger the animation when the element is 10% visible.
        threshold: 0.1 
    });

    // Attach the observer to all elements with the '.scroll-reveal' class.
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Sets up the mobile menu toggle functionality.
 */
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            // The 'show' class controls the menu's visibility via CSS.
            mobileMenu.classList.toggle('show');
        });
    }
}

/**
 * Attaches click event listeners to the language switcher buttons.
 */
function setupLangSwitchers() {
    document.querySelectorAll('#lang-switcher-desktop, #lang-switcher-mobile').forEach(btn => {
        btn.addEventListener('click', toggleLanguage);
    });
}

// C. INITIALIZATION
// =================================================================

// This function runs after the entire HTML document has been loaded.
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupLangSwitchers();
    
    // Set the initial language based on user's saved preference or the default.
    setLanguage(currentLang);
    
    // Start the scroll animations.
    initializeScrollReveal();
});
