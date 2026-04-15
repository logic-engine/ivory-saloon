   // Initialize Icons
        lucide.createIcons();

        // Scroll Function
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Form Submission Interaction
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'SENDING...';
            btn.disabled = true;

            // Simulate sending
            setTimeout(() => {
                btn.innerHTML = 'REQUEST SENT! WE WILL CALL YOU.';
                btn.classList.remove('gold-gradient');
                btn.classList.add('bg-green-500');
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.add('gold-gradient');
                    btn.classList.remove('bg-green-500');
                    btn.disabled = false;
                    e.target.reset();
                }, 3000);
            }, 1500);
        });

        // Simple Fade In Animation on Scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });
