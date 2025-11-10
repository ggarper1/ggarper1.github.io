// Project data
const projectData = {
  CProblems: {
    image: 'images/cLogo.png',
    title: 'C Problems',
    description: 'This is a project where I solve numerous problems in C and build data structures from scratch to do so.',
    details: 'For now, this project only contains the solution for a few small problems. Currently I\'m focusing on building a AVL Tree and a Hash Table from scratch.'
  },
  SimpleGame: {
    image: 'images/game.png',
    title: 'Simple Game',
    description: 'This project consists of three smaller projects: a frontend, a backend and a ML model to play a simple game I created.',
    details: 'Soon more information will be posted about this game. The current focus now is implementing a ML model that can play the game, refining the frontend and implementing a Go backend that supports multiplayer match making and playing against the AI.'
  }
};

function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalDetails').textContent = project.details;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModal();
  }
}

// Close modal on Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
