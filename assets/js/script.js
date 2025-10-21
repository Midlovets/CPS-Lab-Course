      document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });


      document.addEventListener('DOMContentLoaded', function () {
            const wrapper = document.querySelector('.user-menu-wrapper');
            if (!wrapper) return;
            const dropdown = wrapper.querySelector('.user-dropdown');
            let closeTimer = null;
            const CLOSE_DELAY = 200;

            function openMenu() {
                clearTimeout(closeTimer);
                wrapper.classList.add('open');
            }

            function scheduleClose() {
                clearTimeout(closeTimer);
                closeTimer = setTimeout(() => {
                    wrapper.classList.remove('open');
                }, CLOSE_DELAY);
            }

            wrapper.addEventListener('mouseenter', openMenu);
            wrapper.addEventListener('mouseleave', scheduleClose);

            if (dropdown) {
                dropdown.addEventListener('mouseenter', () => {
                    clearTimeout(closeTimer);
                    wrapper.classList.add('open');
                });
                dropdown.addEventListener('mouseleave', scheduleClose);
            }
        });

          document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-list a');
            const profileContent = document.getElementById('profile-content');
            const accountContent = document.getElementById('account-content');

            function showSection(targetSection) {
                profileContent.style.display = (targetSection === 'profile') ? 'block' : 'none';
                accountContent.style.display = (targetSection === 'account') ? 'block' : 'none';
            }

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    const target = this.getAttribute('data-section');
                    showSection(target);
                });
            });

            showSection('profile');
        });