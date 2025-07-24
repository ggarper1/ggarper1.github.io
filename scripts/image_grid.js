// Gallery modal
const gridItems = document.querySelectorAll('.grid-item');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');

modal.appendChild(modalContent);
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

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
