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

    // Dropdown toggle (mobile)
    navMenu.addEventListener('click', e => {
      if(window.innerWidth <= 768){
        const li = e.target.closest('.has-dropdown');
        if(li && e.target.tagName === 'A'){
          e.preventDefault();
          li.classList.toggle('active');
        }
      }
    });
  });
