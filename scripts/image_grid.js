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
