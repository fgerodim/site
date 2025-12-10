// Φόρτωση menu από ξεχωριστό αρχείο
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.nav-menu-container').innerHTML = data;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Dropdowns 1ου επιπέδου
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(drop => {
      const link = drop.querySelector('a');
      link.addEventListener('click', e => {
        if(window.innerWidth <= 768){
          e.preventDefault(); // Αποτροπή navigation
          drop.classList.toggle('active'); // Toggle show/hide
        }
      });
    });

    // Sub-dropdowns (2ου επιπέδου)
    const subDropdowns = document.querySelectorAll('.has-subdropdown');
    subDropdowns.forEach(drop => {
      const link = drop.querySelector('a');
      link.addEventListener('click', e => {
        if(window.innerWidth <= 768){
          e.preventDefault(); // Αποτροπή navigation
          drop.classList.toggle('active'); // Toggle show/hide
        }
      });
    });
  });
