// static/js/about.js

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Change icon
            const icon = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
    
    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animate counter
    function animateCounter(counter, target) {
        let count = 0;
        const duration = 2000; // 2 seconds
        const interval = duration / target;
        
        const timer = setInterval(() => {
            count++;
            counter.textContent = count;
            
            if (count === target) {
                clearInterval(timer);
                
                // Add plus sign if needed
                if (counter.dataset.count.includes('+')) {
                    counter.textContent = count + '+';
                }
                
                // Add percentage sign if needed
                if (counter.dataset.count.includes('%')) {
                    counter.textContent = count + '%';
                }
            }
        }, interval);
    }
    
    // Start animation when scrolled into view
    let animated = false;
    
    function checkScroll() {
        if (!animated && stats.length > 0 && isInViewport(stats[0])) {
            animated = true;
            
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.count);
                animateCounter(stat, target);
            });
        }
    }
    
    // Initial check and check on scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Team member hover effect for mobile
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('touchstart', function() {
            this.classList.toggle('hover');
        });
    });
});