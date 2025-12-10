fetch('menu.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.nav-menu-container').innerHTML = data;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle Hamburger Menu
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Mobile dropdown toggle με σωστό behavior
    navMenu.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        const li = e.target.closest('.has-dropdown');
        if (li && e.target.tagName === 'A') {
          const dropdown = li.querySelector('.dropdown');

          if (dropdown) {
            // Αν έχει υπομενού, toggle χωρίς να πηγαίνουμε στο link
            e.preventDefault();

            // Κλείνουμε τα υπόλοιπα dropdowns
            navMenu.querySelectorAll('.has-dropdown.active').forEach(other => {
              if (other !== li) other.classList.remove('active');
            });

            // Toggle του τρέχοντος
            li.classList.toggle('active');
          }
          // Αν δεν έχει dropdown, αφήνουμε το link να φορτώσει τη σελίδα
        }
      }
    });
  });
