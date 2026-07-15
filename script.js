// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Set active link based on current page
function setActiveLinkByPage() {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    const linkFile = href.split('/').pop();
    
    // Treat index.html and / as Home
    const isHomePage = currentFile === 'index.html' || currentFile === '' || currentFile === '/';
    const linkIsHome = linkFile === 'index.html' || href === '/';

    if (isHomePage && linkIsHome) {
      link.classList.add('active');
    } else if (!isHomePage && linkFile === currentFile) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveLinkByPage);
