// Translation dictionary
const translations = {
    en: {
        nav_features: "Features",
        nav_products: "Products",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title_1: "Where",
        hero_title_2: "design",
        hero_title_3: "meets",
        hero_title_4: "health",
        hero_subtitle: "A revolution in daily dental care",
        features_badge: "Features",
        features_title_1: "Why",
        features_title_2: "exactly",
        features_title_3: "us?",
        feature_1_title: "Premium Design",
        feature_1_desc: "Each brush is crafted by leading designers with attention to every detail. Art in every line.",
        feature_2_title: "Eco-Materials",
        feature_2_desc: "We use only biodegradable and planet-safe materials. Caring for nature.",
        feature_3_title: "Innovative Tech",
        feature_3_desc: "Ultra-thin bristles with silver nano-particles for perfect hygiene and whitening.",
        showcase_aurora_badge: "Collection",
        showcase_aurora_title_1: "Aurora",
        showcase_aurora_title_2: "Collection",
        showcase_aurora_desc_1: "Inspired by the northern lights, this collection combines fluid lines and pearlescent shades.",
        showcase_aurora_desc_2: "Ergonomic handle with soft-touch coating and medium-stiffness bristles ensure perfect cleaning without damaging enamel.",
        showcase_aurora_colors: "Available in three colors: Moon Silver, Polar Lavender, and Ice Mint.",
        showcase_minimal_badge: "Collection",
        showcase_minimal_title_1: "Minimal",
        showcase_minimal_title_2: "Series",
        showcase_minimal_desc_1: "For those who value pure forms and functionality. Japanese minimalism in dentistry.",
        showcase_minimal_desc_2: "Monochrome palette and geometric precision. Every detail thought out to perfection.",
        showcase_minimal_desc_3: "Bamboo handle and activated charcoal bristles for natural whitening.",
        stats_badge: "Stats",
        stats_title_1: "Our",
        stats_title_2: "Achievements",
        stat_1_desc: "Happy Clients",
        stat_2_desc: "Recommend to Friends",
        stat_3_desc: "Design Awards",
        stat_4_desc: "Eco-Materials",
        footer_copy: "© 2024 BRUSHĒ. All rights reserved. Created with love for design and health.",
        tag_quality: "Quality",
        tag_tech: "Tech",
        tag_premium: "Premium",
        tag_ergonomic: "Ergonomic",
        tag_eco: "Eco",
        tag_minimal: "Minimal",
        cursor_more: "More",
        marquee_text_1: "Aurora Collection",
        marquee_text_2: "Minimal Series"
    },
    uk: {
        nav_features: "Особливості",
        nav_products: "Продукція",
        nav_about: "Про нас",
        nav_contact: "Контакти",
        hero_title_1: "Де",
        hero_title_2: "дизайн",
        hero_title_3: "зустрічає",
        hero_title_4: "здоров'я",
        hero_subtitle: "Революція в щоденному догляді за зубами",
        features_badge: "Переваги",
        features_title_1: "Чому",
        features_title_2: "саме",
        features_title_3: "ми?",
        feature_1_title: "Преміальний дизайн",
        feature_1_desc: "Кожна щітка створена провідними дизайнерами з увагою до найменших деталей. Мистецтво в кожній лінії.",
        feature_2_title: "Еко-матеріали",
        feature_2_desc: "Використовуємо лише біорозкладні та безпечні для планети матеріали. Турбота про природу.",
        feature_3_title: "Інноваційні технології",
        feature_3_desc: "Ультратонкі щетинки з нано-частинками срібла для ідеальної гігієни та відбілювання.",
        showcase_aurora_badge: "Колекція",
        showcase_aurora_title_1: "Колекція",
        showcase_aurora_title_2: "Aurora",
        showcase_aurora_desc_1: "Натхненна північним сяйвом, ця колекція поєднує плавні лінії та перламутрові відтінки.",
        showcase_aurora_desc_2: "Ергономічна ручка з м'яким покриттям та щетинки середньої жорсткості забезпечують ідеальне очищення без пошкодження емалі.",
        showcase_aurora_colors: "Доступна в трьох кольорах: місячне срібло, полярна лаванда та льодяний мінт.",
        showcase_minimal_badge: "Колекція",
        showcase_minimal_title_1: "Серія",
        showcase_minimal_title_2: "Minimal",
        showcase_minimal_desc_1: "Для тих, хто цінує чистоту форм та функціональність. Японський мінімалізм у стоматології.",
        showcase_minimal_desc_2: "Монохромна палітра та геометрична точність. Кожна деталь продумана до досконалості.",
        showcase_minimal_desc_3: "Бамбукова ручка та щетинки з активованим вугіллям для природного відбілювання.",
        stats_badge: "Статистика",
        stats_title_1: "Наші",
        stats_title_2: "досягнення",
        stat_1_desc: "Задоволених клієнтів",
        stat_2_desc: "Рекомендують друзям",
        stat_3_desc: "Дизайнерських нагород",
        stat_4_desc: "Еко-матеріали",
        footer_copy: "© 2024 BRUSHĒ. Всі права захищені. Створено з любов'ю до дизайну та здоров'я.",
        tag_quality: "Якість",
        tag_tech: "Технології",
        tag_premium: "Преміум",
        tag_ergonomic: "Ергономіка",
        tag_eco: "Еко",
        tag_minimal: "Мінімалізм",
        cursor_more: "Більше",
        marquee_text_1: "Колекція Aurora",
        marquee_text_2: "Серія Minimal"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Handle language button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update split text for H2 animations to reflect new language
    const allH2 = document.querySelectorAll('h2.section-title');
    allH2.forEach(heading => {
        splitCharacters(heading);
    });
}

function splitCharacters(heading) {
    const container = heading.cloneNode(true);
    heading.innerHTML = '';
    let charIndex = 0;

    const processNode = (node, parent) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const chars = node.textContent.split('');
            chars.forEach(char => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.transitionDelay = `${charIndex * 0.03}s`;
                parent.appendChild(span);
                charIndex++;
            });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if it's a [data-i18n] element inside a heading
            const newNode = node.cloneNode(false);
            parent.appendChild(newNode);
            Array.from(node.childNodes).forEach(child => processNode(child, newNode));
        }
    };

    Array.from(container.childNodes).forEach(child => processNode(child, heading));
}

// Hero images following mouse
const heroSection = document.querySelector('.hero');
const heroImagesContainer = document.querySelector('.hero-images');
// Using your uploaded images with crossorigin attribute
const images = [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1473232117565-983b7931317d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1559591937-e620fb975bb5?auto=format&fit=crop&q=80&w=800'
];
let activeImages = [];
let lastMoveTime = 0;
let imageIndex = 0; // Global counter to cycle through images correctly
const maxImages = 5;

heroSection.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();

    // Check if we need to add a new image (every 0.5 seconds while moving)
    if (currentTime - lastMoveTime > 500) {
        lastMoveTime = currentTime;
        createImage(e.clientX, e.clientY);
    }
});

function createImage(x, y) {
    // Remove oldest if we're at max
    if (activeImages.length >= maxImages) {
        const oldest = activeImages.shift();
        oldest.element.classList.remove('visible');
        setTimeout(() => {
            oldest.element.remove();
        }, 500);
    }

    // Create new image
    const img = document.createElement('div');
    img.className = 'hero-image';

    // Create img element for actual photo
    const photoImg = document.createElement('img');
    photoImg.src = images[imageIndex % images.length];
    imageIndex++; // Increment index for the next image
    photoImg.crossOrigin = 'anonymous';
    photoImg.style.width = '100%';
    photoImg.style.height = '100%';
    photoImg.style.objectFit = 'cover';
    photoImg.style.borderRadius = '4px';

    // Add load handler to only show once ready
    photoImg.onload = function () {
        img.classList.add('visible');
    };

    // Add error handler
    photoImg.onerror = function () {
        console.error('Failed to load image:', this.src);
        // Remove the element entirely if it fails to load
        img.remove();
        // Remove from activeImages array as well
        activeImages = activeImages.filter(item => item.element !== img);
    };

    img.appendChild(photoImg);

    // Add tags
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';

    const tag1 = document.createElement('div');
    tag1.className = 'image-tag';
    tag1.textContent = translations[currentLang].tag_quality;
    tagsContainer.appendChild(tag1);

    const tag2 = document.createElement('div');
    tag2.className = 'image-tag';
    tag2.textContent = translations[currentLang].tag_tech;
    tagsContainer.appendChild(tag2);

    img.appendChild(tagsContainer);

    img.style.left = (x - 100) + 'px';
    img.style.top = (y - 100) + 'px';

    heroImagesContainer.appendChild(img);

    const imgData = {
        element: img,
        x: x,
        y: y
    };

    activeImages.push(imgData);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navCta = document.querySelector('.nav-cta');
const nav = document.querySelector('nav');
const heroCta = document.querySelector('.hero .cta-button');

let lastScrollY = window.scrollY;
let scrollTimer;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Parallax logic for hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${currentScrollY * 0.5}px)`;
        heroContent.style.opacity = 1 - currentScrollY / 600;
    }

    // Parallax for stats background
    const statsSection = document.querySelector('.stats');
    const statsBgImage = document.querySelector('.stats-bg-image');
    if (statsSection && statsBgImage) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.3;
            statsBgImage.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
    }

    // Nav CTA visibility
    if (heroCta) {
        const heroCtaRect = heroCta.getBoundingClientRect();
        const navHeight = nav.offsetHeight;
        if (heroCtaRect.bottom < navHeight) {
            navCta.classList.add('visible');
        } else {
            navCta.classList.remove('visible');
        }
    }

    // Nav background (scrolled state)
    if (currentScrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Smart Header: Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    // Show header after 1 second of inactivity
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        nav.classList.remove('hidden');
    }, 1000);

    lastScrollY = currentScrollY;
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Initial language setup
    setLanguage('en');

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });

    // Custom Cursor Follower Logic
    const customCursor = document.querySelector('.custom-cursor');
    const showcaseImages = document.querySelectorAll('.showcase-image');

    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });

        showcaseImages.forEach(image => {
            image.addEventListener('mouseenter', () => {
                customCursor.classList.add('active');
            });
            image.addEventListener('mouseleave', () => {
                customCursor.classList.remove('active');
                // Reset tilt on leave
                const content = image.querySelector('img');
                if (content) {
                    content.style.transform = 'scale(1) rotateX(0) rotateY(0)';
                }
            });

            image.addEventListener('mousemove', (e) => {
                const rect = image.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                const content = image.querySelector('img');
                if (content) {
                    content.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });
        });
    }
});

// Animations on scroll
const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            if (entry.target.classList.contains('stat-item') && !entry.target.classList.contains('animated')) {
                animateStat(entry.target.querySelector('h3'));
                entry.target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .showcase-image, .showcase-content, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0, 0.2, 1)';
    fadeObserver.observe(el);
});

function animateStat(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix');
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current).toLocaleString() + suffix;
        }
    }, 16);
}

// Re-observe headings
document.querySelectorAll('h2.section-title').forEach(h => headingObserver.observe(h));

// Re-observe headings
document.querySelectorAll('h2.section-title').forEach(h => headingObserver.observe(h));
