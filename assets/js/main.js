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


document.querySelectorAll('.equipment__card').forEach((card) => {
  const buttons = card.querySelectorAll('.equipment__card-tab-nav-button');
  const contents = card.querySelectorAll('[data-content]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Убираем активность у всех кнопок и контента
      buttons.forEach((btn) => btn.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));

      // Активируем текущую кнопку и контент
      button.classList.add('active');
      const tab = button.dataset.tab;
      card.querySelector(`[data-content="${tab}"]`).classList.add('active');
    });
  });
});

