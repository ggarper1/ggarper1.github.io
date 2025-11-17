// Project data
const projectData = {
  CProblems: {
    image: 'images/cLogo.png',
    title: 'C Problems',
    description: 'This is a project where I solve numerous problems in C and build data structures from scratch to do so.',
    content: [
      {
        type: 'text',
        text: 'For now, this project only contains the solution for a few small problems. Currently I\'m focusing on building a AVL Tree and a Hash Table from scratch.'
      },
      {
        type: 'links',
        items: [
          { text: 'View on GitHub', url: 'https://github.com/ggarper1/SmallCProjects' },
        ]
      }
    ]
  },
  SimpleGame: {
    image: 'images/game.png',
    title: 'Simple Game',
    description: 'This project consists of three smaller projects: a frontend, a backend and a ML model to play a simple game I created.',
    content: [
      {
        type: 'text',
        text: 'Soon I will include a demonstration of how the game plays and document the progress of the project. The current focus now is implementing a ML model that can learn to play the game, refining the frontend and implementing a Go backend that supports multiplayer match making and playing against the AI.'
      },
      {
        type: 'links',
        items: [
          { text: 'GitHub - Frontend', url: 'https://github.com/ggarper1/SimpleGameFront' },
          { text: 'GitHub - Backend', url: 'https://github.com/ggarper1/SimpleGameBack' },
          { text: 'GitHub - AI Player', url: 'https://github.com/ggarper1/SimpleGameAI' }
        ]
      }
    ]
  }
};

function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;

  // Generate dynamic content
  const detailsContainer = document.getElementById('modalDetails');
  detailsContainer.innerHTML = ''; // Clear existing content

  project.content.forEach(item => {
    switch (item.type) {
      case 'text':
        const p = document.createElement('p');
        p.className = 'modal-text';
        p.textContent = item.text;
        detailsContainer.appendChild(p);
        break;

      case 'links':
        const linksDiv = document.createElement('div');
        linksDiv.className = 'modal-links';
        item.items.forEach(link => {
          const a = document.createElement('a');
          a.href = link.url;
          a.textContent = link.text;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          linksDiv.appendChild(a);
        });
        detailsContainer.appendChild(linksDiv);
        break;

      case 'image':
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = 'modal-content-image';
        detailsContainer.appendChild(img);
        break;
    }
  });

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal on Escape key
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

document.addEventListener('keydown', function (event) {
  if (event.key) {
    closeModal();
  }
});
