fetch('menu.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.nav-menu-container').innerHTML = data;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Hamburger toggle
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation(); // σημαντικό
      navMenu.classList.toggle('active');
      hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Κλικ μέσα στο μενού (μόνο σε κινητό)
    navMenu.addEventListener('click', (e) => {
      if (window.innerWidth > 768) return; // μόνο για mobile

      const clickedLink = e.target.closest('a');
      if (!clickedLink) return;

      const parentLi = clickedLink.parentElement;

      // Αν το <a> είναι μέσα σε .has-dropdown (δηλ. είναι το "Θεωρία" ή "Ασκήσεις")
      if (parentLi.classList.contains('has-dropdown')) {
        // Είναι το γονικό μενού → ανοίγω/κλείνω το dropdown, ΜΗΝ πας στη σελίδα
        e.preventDefault();
        parentLi.classList.toggle('active');
      }
      // αλλιώς είναι κανονικός σύνδεσμος (Αρχική, Κεφάλαιο 1, Επικοινωνία κλπ)
      // → ΔΕΝ κάνουμε preventDefault → ο browser πάει κανονικά στη σελίδα
    });

    // Κλείσιμο μενού όταν πατάμε έξω
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
      }
    });

  })
  .catch(err => console.error('Error loading menu:', err));