        // Funcionalidad del menú hamburguesa
        const menuButton = document.getElementById('menuButton');
        const navigationBar = document.getElementById('navigationBar');
        
        menuButton.addEventListener('click', function() {
            navigationBar.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.navigation__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navigationBar.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav')) {
                navigationBar.classList.remove('active');
            }
        });