const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  mainMenu.style.paddingTop = '80px';
}

function close() {
  mainMenu.style.top = '-100%';
  mainMenu.style.paddingTop = '0';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
const navLink = document.querySelectorAll('.navLink');
navLink.forEach((n) => n.addEventListener('click', close));

const portfolioList = [{
  id: 1,
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: '',
  technologies: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
  live: 'https://github.com/Pazzo97/Portfolio-project',
  source: 'https://github.com/Pazzo97/Portfolio-project',
},
{
  id: 2,
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: '',
  technologies: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
  live: 'https://github.com/Pazzo97/Portfolio-project',
  source: 'https://github.com/Pazzo97/Portfolio-project',
},
{
  id: 3,
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: '',
  technologies: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
  live: 'https://github.com/Pazzo97/Portfolio-project',
  source: 'https://github.com/Pazzo97/Portfolio-project',
},
{
  id: 4,
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: '',
  technologies: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
  live: 'https://github.com/Pazzo97/Portfolio-project',
  source: 'https://github.com/Pazzo97/Portfolio-project',
}];

const portfolioSection = document.getElementById('works');
portfolioSection.innerHTML = portfolioList.map((portfolio) => `
      <div class="post-story">
            <div class="image-placeholder"></div>
            <div class="story">
              <div class="post-title">
                <h2>${portfolio.name}</h2>
              </div>

              <div class="story-paragraph">
                <p>
                 ${portfolio.description}
                </p>
              </div>

              <div class="desktop-story">
                <div class="story-languages">

                <ul class="desktop">
                ${portfolio.technologies.map((tech) => `<li>${tech}</li><li>
                      <img class="rectangle" src="images/Rectangle70.png" alt="rectangle" />
                    </li>`).join('')}
                  </ul>
                </div>
              </div>
              <div class="story-button ${portfolio.id % 2 === 0 ? 'desk-but' : ''}">
                <button data-modal-target="#modal" class="button button-1" type="submit">See Project</button>
              </div>
            </div>
            <div class="modal" id="modal">
              <div class="modalBox">
                <div class="modal-header">
                  <div class="title">${portfolio.name}</div>
                  <div><button type="button" data-close-button class="close-button"><img src="images/Icon.svg" alt="close"></button>
                  </div>
                </div>
                <div class="modal-picture"><img src="images/SnapshootPortfolio.png" alt="proect picture"></div>
                <div class="modal-body">
                  <p class="mobile-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever
                    since the 1500s, when an unknown printer took a galley of type veris lapoa todoe. </p>
                    <p class="destop-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
                  </div>
                <div class="story-languages">
                  <ul>
                    ${portfolio.technologies.map((tech) => `<li>${tech}</li><li>
                      <img class="rectangle" src="images/Rectangle70.png" alt="rectangle" />
                    </li>`).join('')}
                  </ul>
                </div>
                <div class="popupButton">
                  <button type="button" class="button button-1 modal-btn">
                  <a href="${portfolio.live}">
                    See Live </a>
                    <img src="images/see-live.svg" alt="see live">
                  </button>
                  <button type="button" class="button button-1 modal-btn">
                  <a href="${portfolio.source}">
                    See Source </a>
                    <img src="images/gitHub.svg" alt="see live">
                  </button>
                </div>
              </div>
            </div>
            <div id="overlay"></div>
          </div>

    `).join('');

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    // eslint-disable-next-line no-use-before-define
    openModal(modal);
  });
});
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

window.addEventListener('click', (e) => {
  const modalSection = document.querySelector('.modal.active');
  if (e.target === modalSection) {
    modalSection.classList.remove('active');
    overlay.classList.remove('active');
  }
});
