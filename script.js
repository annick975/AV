// === MAIN APPLICATION === //
class ImpaktInfo {
    constructor() {
        this.init();
    }

    init() {
        this.initializeComponents();
        this.setupEventListeners();
        this.startAnimations();
    }

    initializeComponents() {
        this.darkMode = new DarkModeToggle();
        this.dateDisplay = new DateDisplay();
        this.breakingNews = new BreakingNewsTicker();
        this.categoryFilter = new CategoryFilter();
        this.scrollAnimations = new ScrollAnimations();
        this.navbar = new NavbarController();
        this.newsletter = new NewsletterHandler();
        this.search = new SearchHandler();
    }

    setupEventListeners() {
        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
    }

    startAnimations() {
        // Initialize scroll-triggered animations
        this.scrollAnimations.observe();
        
        // Start breaking news ticker
        this.breakingNews.start();
    }

    closeModals() {
        // Close any open modals or dropdowns
        document.querySelectorAll('.modal, .dropdown').forEach(el => {
            el.classList.remove('active');
        });
    }
}

// === DARK MODE TOGGLE === //
class DarkModeToggle {
    constructor() {
        this.toggle = document.getElementById('darkModeToggle');
        this.icon = this.toggle.querySelector('i');
        this.isDark = localStorage.getItem('theme') === 'dark' || 
                     (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListener();
    }

    setupEventListener() {
        this.toggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.isDark = e.matches;
                    this.applyTheme();
                }
            });
        }
    }

    toggleTheme() {
        this.isDark = !this.isDark;
        this.applyTheme();
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
        this.icon.className = this.isDark ? 'fas fa-sun' : 'fas fa-moon';
        
        // Update meta theme color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', this.isDark ? '#111827' : '#ffffff');
        }
    }
}

// === DATE DISPLAY === //
class DateDisplay {
    constructor() {
        this.element = document.getElementById('currentDate');
        this.init();
    }

    init() {
        this.updateDate();
        // Update every minute
        setInterval(() => this.updateDate(), 60000);
    }

    updateDate() {
        const now = new Date();
        const options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        
        this.element.textContent = now.toLocaleDateString('en-US', options);
    }
}

// === BREAKING NEWS TICKER === //
class BreakingNewsTicker {
    constructor() {
        this.ticker = document.getElementById('breakingNewsTicker');
        this.tickerText = this.ticker.querySelector('.ticker-text');
        this.isVisible = true;
        this.init();
    }

    init() {
        this.setupCloseButton();
        this.makeTickerInteractive();
    }

    setupCloseButton() {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.className = 'ticker-close';
        closeBtn.style.cssText = `
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            transition: all 0.2s ease;
        `;

        closeBtn.addEventListener('click', () => this.hideTicker());
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        this.ticker.style.position = 'relative';
        this.ticker.appendChild(closeBtn);
    }

    makeTickerInteractive() {
        this.ticker.addEventListener('mouseenter', () => {
            this.tickerText.style.animationPlayState = 'paused';
        });

        this.ticker.addEventListener('mouseleave', () => {
            this.tickerText.style.animationPlayState = 'running';
        });
    }

    hideTicker() {
        this.ticker.style.transform = 'translateY(-100%)';
        this.ticker.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
            this.ticker.style.display = 'none';
            this.adjustNavbarPosition();
        }, 300);
    }

    adjustNavbarPosition() {
        const navbar = document.querySelector('.navbar');
        navbar.style.top = '0';
    }

    start() {
        // Ticker is already running via CSS animation
        console.log('Breaking news ticker started');
    }
}

// === CATEGORY FILTER === //
class CategoryFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.articleCards = document.querySelectorAll('.article-card');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });
    }

    handleFilterClick(button) {
        // Update active state
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.textContent.toLowerCase();
        this.filterArticles(category);
    }

    filterArticles(category) {
        this.articleCards.forEach(card => {
            const cardCategory = card.querySelector('.card-category');
            const cardCategoryText = cardCategory ? cardCategory.textContent.toLowerCase() : '';
            
            if (category === 'all' || cardCategoryText.includes(category)) {
                this.showCard(card);
            } else {
                this.hideCard(card);
            }
        });
    }

    showCard(card) {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Trigger reflow
        card.offsetHeight;
        
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }

    hideCard(card) {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }
}

// === SCROLL ANIMATIONS === //
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll(
            '.article-card, .sidebar-section, .hero-content, .section-header'
        );
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
    }

    observe() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                    }
                });
            }, this.observerOptions);

            this.animatedElements.forEach(el => {
                this.observer.observe(el);
            });
        }
    }

    animateElement(element) {
        element.classList.add('fade-in-up');
        
        // Add staggered animation for grid items
        if (element.classList.contains('article-card')) {
            const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
            element.style.animationDelay = `${delay}ms`;
        }
        
        this.observer.unobserve(element);
    }
}

// === NAVBAR CONTROLLER === //
class NavbarController {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.lastScrollY = window.scrollY;
        this.scrollThreshold = 100;
        this.init();
    }

    init() {
        this.setupScrollListener();
        this.setupNavLinks();
    }

    setupScrollListener() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class for styling
        if (currentScrollY > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScrollY > this.lastScrollY && currentScrollY > this.scrollThreshold * 2) {
            this.navbar.style.transform = 'translateY(-100%)';
        } else {
            this.navbar.style.transform = 'translateY(0)';
        }

        this.lastScrollY = currentScrollY;
    }

    setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
}

// === NEWSLETTER HANDLER === //
class NewsletterHandler {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.input = document.querySelector('.newsletter-input');
        this.button = document.querySelector('.newsletter-btn');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupEventListener();
        }
    }

    setupEventListener() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const email = this.input.value.trim();
        
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address', 'error');
            return;
        }

        this.setLoadingState(true);

        try {
            // Simulate API call
            await this.simulateSubscription(email);
            this.showMessage('Successfully subscribed! Welcome to Impakt Info.', 'success');
            this.input.value = '';
        } catch (error) {
            this.showMessage('Something went wrong. Please try again.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async simulateSubscription(email) {
        // Simulate network delay
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
    }

    setLoadingState(loading) {
        this.button.disabled = loading;
        this.button.textContent = loading ? 'Subscribing...' : 'Subscribe';
        this.button.style.opacity = loading ? '0.7' : '1';
    }

    showMessage(message, type) {
        // Remove existing message
        const existingMessage = this.form.querySelector('.newsletter-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `newsletter-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            margin-top: 0.5rem;
            padding: 0.5rem;
            border-radius: 6px;
            font-size: 0.875rem;
            font-weight: 500;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
        `;

        this.form.appendChild(messageEl);

        // Trigger animation
        requestAnimationFrame(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
        });

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateY(-10px)';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
}

// === SEARCH HANDLER === //
class SearchHandler {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchIcon = document.querySelector('.search-icon');
        this.init();
    }

    init() {
        if (this.searchInput) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        this.searchInput.addEventListener('focus', () => {
            this.searchIcon.style.color = 'var(--primary-color)';
        });

        this.searchInput.addEventListener('blur', () => {
            this.searchIcon.style.color = 'var(--text-muted)';
        });

        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(e.target.value);
            }
        });
    }

    handleSearch(query) {
        // Real-time search suggestions could be implemented here
        if (query.length > 2) {
            this.highlightResults(query);
        } else {
            this.clearHighlights();
        }
    }

    highlightResults(query) {
        const articles = document.querySelectorAll('.article-card');
        const searchTerm = query.toLowerCase();

        articles.forEach(article => {
            const title = article.querySelector('.card-title').textContent.toLowerCase();
            const excerpt = article.querySelector('.card-excerpt').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                article.style.opacity = '1';
                article.style.border = '2px solid var(--primary-color)';
            } else {
                article.style.opacity = '0.4';
                article.style.border = '1px solid var(--border-color)';
            }
        });
    }

    clearHighlights() {
        const articles = document.querySelectorAll('.article-card');
        articles.forEach(article => {
            article.style.opacity = '1';
            article.style.border = '1px solid var(--border-color)';
        });
    }

    performSearch(query) {
        if (query.trim()) {
            console.log(`Performing search for: ${query}`);
            // In a real application, this would redirect to search results page
            alert(`Search functionality would redirect to results for: "${query}"`);
        }
    }
}

// === PERFORMANCE OPTIMIZATIONS === //
class PerformanceOptimizer {
    static init() {
        // Lazy loading for images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Setup intersection observer for performance monitoring
        this.setupPerformanceMonitoring();
    }

    static setupLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    static preloadCriticalResources() {
        // Preload hero image
        const heroImg = document.querySelector('.hero-image img');
        if (heroImg && heroImg.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = heroImg.src;
            document.head.appendChild(link);
        }
    }

    static setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            // This would require web-vitals library in a real implementation
            console.log('Performance monitoring initialized');
        }
    }
}

// === ACCESSIBILITY ENHANCEMENTS === //
class AccessibilityEnhancer {
    static init() {
        this.setupKeyboardNavigation();
        this.setupARIALabels();
        this.setupFocusManagement();
    }

    static setupKeyboardNavigation() {
        // Tab navigation for interactive elements
        const interactiveElements = document.querySelectorAll(
            'button, a, input, [tabindex]:not([tabindex="-1"])'
        );

        interactiveElements.forEach((el, index) => {
            if (!el.hasAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }
        });
    }

    static setupARIALabels() {
        // Add ARIA labels for screen readers
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.setAttribute('aria-label', 'Search articles');
        }

        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
        }
    }

    static setupFocusManagement() {
        // Ensure focus is visible
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// === INITIALIZATION === //
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main application
    new ImpaktInfo();
    
    // Initialize performance optimizations
    PerformanceOptimizer.init();
    
    // Initialize accessibility enhancements
    AccessibilityEnhancer.init();
    
    console.log('🚀 Impakt Info loaded successfully!');
    
    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-color) !important;
            outline-offset: 2px;
        }
        
        .loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        
        img:not(.loaded) {
            opacity: 0;
        }
        
        .newsletter-message {
            animation: slideInUp 0.3s ease;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// === ERROR HANDLING === //
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // In production, this would send errors to logging service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, this would send errors to logging service
});

// === EXPORT FOR TESTING === //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ImpaktInfo,
        DarkModeToggle,
        CategoryFilter,
        NewsletterHandler
    };
}