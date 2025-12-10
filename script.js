fetch('menu.html')
  .then(r => r.text())
  .then(html => {
    document.querySelector('.nav-menu-container').innerHTML = html;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    navMenu.addEventListener('click', e => {
      if (window.innerWidth > 768) return;

      const link = e.target.closest('a');
      if (!link) return;

      const li = link.parentNode;

      if (li.classList.contains('has-dropdown') || li.classList.contains('has-subdropdown')) {
        e.preventDefault();
        li.classList.toggle('active');

        // κλείνει τα υπόλοιπα του ίδιου επιπέδου
        Array.from(li.parentNode.children).forEach(child => {
          if (child !== li && (child.classList.contains('has-dropdown') || child.classList.contains('has-subdropdown'))) {
            child.classList.remove('active');
          }
        });
      }
    });

    // κλείσιμο με κλικ έξω
    document.addEventListener('click', e => {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
      }
    });

  })
  .catch(err => console.error('Menu error:', err));