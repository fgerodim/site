fetch('menu.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.nav-menu-container').innerHTML = data;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Toggle Hamburger Menu (Mobile)
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // 2. Toggle Dropdown Menu (Mobile)
    navMenu.addEventListener('click', e => {
      if(window.innerWidth <= 768){
        const li = e.target.closest('.has-dropdown');
        if(li && e.target.tagName === 'A'){
          const dropdown = li.querySelector('.dropdown');

          if(dropdown){
            e.preventDefault(); // Μόνο για parent με dropdown

            // Κλείνουμε τα υπόλοιπα dropdowns
            navMenu.querySelectorAll('.has-dropdown.active').forEach(other => {
              if(other !== li) other.classList.remove('active');
            });

            // Toggle το τρέχον
            li.classList.toggle('active');
          }
        }
      }
    });
  });
