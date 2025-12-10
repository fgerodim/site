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

    // Dropdown toggle (mobile) με κλείσιμο άλλων dropdowns
    navMenu.addEventListener('click', e => {
      if(window.innerWidth <= 768){
        const li = e.target.closest('.has-dropdown');
        if(li && e.target.tagName === 'A'){
          e.preventDefault();

          // Αν το li είναι ήδη active, κλείνουμε μόνο αυτό
          if(li.classList.contains('active')){
            li.classList.remove('active');
          } else {
            // Κλείνουμε όλα τα άλλα dropdowns
            navMenu.querySelectorAll('.has-dropdown.active').forEach(other => {
              other.classList.remove('active');
            });
            // Ανοίγουμε το επιλεγμένο
            li.classList.add('active');
          }
        }
      }
    });
  });
