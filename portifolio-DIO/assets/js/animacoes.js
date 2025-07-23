    AOS.init({ duration: 1000, once: true });

    function toggleMenu() {
      document.getElementById('navbar').classList.toggle('active');
    }

    document.addEventListener('click', function(e) {
      const nav = document.getElementById('navbar');
      const toggle = document.querySelector('.menu-toggle');
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
      }
    });

    function toggleTheme() {
      document.body.classList.toggle('light-mode');
    }