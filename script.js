// Φόρτωση menu από ξεχωριστό αρχείο
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.nav-menu-container').innerHTML = data;

    // Ενεργοποίηση drop-down και hamburger μετά τη φόρτωση
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(drop => {
      drop.addEventListener('click', e => {
        if(window.innerWidth <= 768){
          e.stopPropagation();
          drop.classList.toggle('active');
        }
      });
    });
  });
