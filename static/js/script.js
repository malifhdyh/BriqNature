// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // MENU TOGGLE FOR MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // ACTIVE NAVIGATION LINKS
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function setActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);
    window.addEventListener('load', setActiveNavLink);

    // BACK TO TOP BUTTON
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // TESTIMONIAL SLIDER
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (testimonialWrapper && testimonials.length > 0 && dots.length > 0) {
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });

        // Auto slide every 5 seconds
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
    }

    // FORM VALIDATION (CLIENT-SIDE)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;
            
            // Simple validation example
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name && name.value.trim() === '') {
                isValid = false;
                name.classList.add('invalid');
            } else if (name) {
                name.classList.remove('invalid');
            }
            
            if (email && (email.value.trim() === '' || !isValidEmail(email.value))) {
                isValid = false;
                email.classList.add('invalid');
            } else if (email) {
                email.classList.remove('invalid');
            }
            
            if (message && message.value.trim() === '') {
                isValid = false;
                message.classList.add('invalid');
            } else if (message) {
                message.classList.remove('invalid');
            }
            
            // If using client-side only validation
            // if (!isValid) {
            //     e.preventDefault();
            //     alert('Mohon lengkapi form dengan benar.');
            // }
        });
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    // ANIMATION ON SCROLL
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .product-card, .about-img, .about-text, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // HEADER HIDE ON SCROLL
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 10; // Minimum amount to scroll before showing/hiding

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Make sure they scrolled more than threshold
        if(Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) {
            return;
        }

        // Scrolling down
        if(currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
            header.classList.add('header-hidden');
        } 
        // Scrolling up
        else if(currentScrollTop < lastScrollTop) {
            header.classList.remove('header-hidden');
        }

        lastScrollTop = currentScrollTop;
    });

    // Set initial styles for animation
    document.querySelectorAll('.service-card, .product-card, .about-img, .about-text, .stat-item').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.5s ease-out';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});