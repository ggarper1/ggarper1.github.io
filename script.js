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

// Highlight active navigation link
const navDots = document.querySelectorAll('nav a');

const highlightDot = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const dot = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      navDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    }
  });
};

const observerOptions = {
  threshold: 0.7,
};

const highlightObserver = new IntersectionObserver(highlightDot, observerOptions);

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
  highlightObserver.observe(section);
});


// Gallery modal
const gridItems = document.querySelectorAll('.grid-item');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');
const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';

modal.appendChild(modalContent);
modal.appendChild(closeBtn);
document.body.appendChild(modal);

gridItems.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      modal.style.display = 'flex';
      modalContent.src = item.querySelector('img').src;
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
