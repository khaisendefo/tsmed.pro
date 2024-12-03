// burger
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__content');
  const navLinks = document.querySelectorAll('.header__nav-link');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;

  function closeNav() {
    toggleButton.classList.remove('header__burger-is-active');
    nav.classList.remove('header__content-is-active');
    overlay.classList.remove('header__overlay-is-active');
    body.classList.remove('no-scroll');
  }

  toggleButton.addEventListener('click', function () {
    const isActive = toggleButton.classList.toggle('header__burger-is-active');
    nav.classList.toggle('header__content-is-active');
    overlay.classList.toggle('header__overlay-is-active');
    if (isActive) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
      closeNav();
    }
  });

  overlay.addEventListener('click', closeNav);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && nav.classList.contains('active')) {
      closeNav();
    }
  });

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      closeNav();
    });
  });
});

// equipment tab
document.querySelectorAll('.equipment__card').forEach((card) => {
  const buttons = card.querySelectorAll('.equipment__card-tab-nav-button');
  const contents = card.querySelectorAll('[data-content]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));

      button.classList.add('active');
      const tab = button.dataset.tab;
      card.querySelector(`[data-content="${tab}"]`).classList.add('active');
    });
  });
});

const splide = new Splide('.consumables__slider', {
  perPage: 4, 
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: '24px',
  // autoplay  : true,   
  // interval  : 2000,   
  // pauseOnHover: true, 
});

splide.mount();



const toggleModal = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal'); 
    const body = document.body; 
    const modalOpenButtons = document.querySelectorAll('.modal-open'); 
    const modalCloseButton = document.querySelector('.modal__close'); 
    const modalOverlay = modal.querySelector('.modal__overlay'); 

    function openModal() {
      modal.classList.add('active');
      body.classList.add('body-no-scroll'); 
    }

    function closeModal() {
      modal.classList.remove('active');
      body.classList.remove('body-no-scroll'); 
    }

    modalOpenButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });

    modalCloseButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
      const modalWindow = modal.querySelector('.modal__window');
      if (!modalWindow.contains(event.target)) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });
};

toggleModal(); 