fetch('menu.html')
  .then(r => r.text())
  .then(html => {
    const menuContainer = document.querySelector('.nav-menu-container');
    menuContainer.innerHTML = html;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const container = document.querySelector('.container');

    // Συνάρτηση για άνοιγμα/κλείσιμο του μενού (Sidebar Toggle)
    const toggleMenu = (forceClose = false) => {
      // Αν forceClose είναι true Ή αν είναι mobile και το menu είναι ανοιχτό
      if (forceClose || (window.innerWidth <= 768 && navMenu.classList.contains('active'))) {
        navMenu.classList.remove('active');
        menuContainer.classList.remove('active');
        container.classList.remove('menu-open');
        hamburger.textContent = '☰';
      } else if (window.innerWidth <= 768) {
        // Ανοίγει μόνο αν είναι mobile και είναι κλειστό
        navMenu.classList.add('active');
        menuContainer.classList.add('active');
        container.classList.add('menu-open');
        hamburger.textContent = '✕';
      }
    };

    // 1. Άνοιγμα/Κλείσιμο Sidebar με το Hamburger
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      toggleMenu();
    });

    // 2. Λογική Mobile Dropdown/Accordion
    navMenu.addEventListener('click', e => {
      // Στο desktop αφήνουμε το CSS hover να δουλέψει
      if (window.innerWidth > 768) return;

      const link = e.target.closest('a');
      if (!link) return;
      
      const li = link.parentNode;

      // Αν είναι dropdown (πρώτου επιπέδου)
      if (li.classList.contains('has-dropdown')) {
        e.preventDefault();
        
        // Toggle το dropdown
        li.classList.toggle('active');

        // Κλείνει τα άλλα dropdowns του ίδιου επιπέδου (Accordion)
        Array.from(li.parentNode.children).forEach(child => {
          if (child !== li && child.classList.contains('has-dropdown')) {
            child.classList.remove('active');
          }
        });
      } else if (link.getAttribute('href') !== '#') {
          // Αν είναι απλό link (ή link μέσα σε dropdown), κλείνουμε το sidebar
          toggleMenu(true);
      }
    });

    // 3. Κλείσιμο Sidebar με κλικ έξω (στο background overlay)
    menuContainer.addEventListener('click', e => {
      if (e.target === menuContainer && window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        toggleMenu(true);
      }
    });
    
    // 4. Προσαρμογή μεγέθους
    window.addEventListener('resize', () => {
      // Εξασφαλίζει ότι το mobile menu κλείνει αν ο χρήστης αλλάξει σε desktop
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
         toggleMenu(true);
      }
    });

  })
  .catch(err => console.error('Menu error:', err));