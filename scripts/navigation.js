// Disappearing navigation
const nav = document.querySelector('nav');
let timeout;

window.addEventListener('scroll', () => {
  nav.style.opacity = 1;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    nav.style.opacity = 0;
  }, 800);
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const highlightNavObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        navLinks.forEach(d => d.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  {
    threshold: 0.7,
  }
);

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const sectionActiveObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  sectionActiveObserver.observe(section);
  highlightNavObserver.observe(section);
});


