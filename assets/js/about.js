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

// Yandex maps API 
ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [55.777160, 37.611554], 
        zoom: 10,
        controls: [] 
    });

    const customPlacemark = new ymaps.Placemark(
        [55.777373, 37.612075], 
        {
            hintContent: 'ТСМЕД',
            balloonContent: 'Москва, 1-й Самотёчный пер., д.15 стр.1, помещ.1п' 
        },
        {
            iconLayout: 'default#image', 
            iconImageHref: '/assets/icon/location.svg', 
            iconImageSize: [50, 50], 
            iconImageOffset: [-25, -50] 
        }
    );

    map.geoObjects.add(customPlacemark);
}

// input mask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7(999) 999-99-99');
im.mask(inputs);

const toggleModal = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal'); 
    const body = document.body; 
    const modalOpenButtons = document.querySelectorAll('.modal-open'); 
    const modalCloseButton = document.querySelector('.modal__close'); 
    const modalOverlay = modal.querySelector('.modal__overlay'); 

    const modalThanks = document.querySelector('.modal-thanks');
    const modalThanksCloseButton = modalThanks.querySelector('.modal-thanks__close');

    function openModal() {
      modal.classList.add('active');
      body.classList.add('body-no-scroll'); 
    }

    function closeModal() {
      modal.classList.remove('active');
      body.classList.remove('body-no-scroll'); 
    }

    function openModalThanks() {
      modalThanks.classList.add('active');
      body.classList.add('body-no-scroll');
    }

    function closeModalThanks() {
      modalThanks.classList.remove('active');
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

    modalThanksCloseButton.addEventListener('click', closeModalThanks);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });

    var forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Ошибка отправки данных: " + response.status);
          }
          return response.json();
        })
        .then(data => {
          closeModal();

          openModalThanks();

          console.log(data);
          this.reset();
        })
        .catch(error => {
          console.error("Ошибка отправки данных: " + error.message);
        });
      });
    });
  });
};

toggleModal();

// privacy
const togglePrivacyModal = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const privacyModal = document.querySelector('.privacy');
    const body = document.body;
    const privacyOpenButtons = document.querySelectorAll('.privacy-open');
    const privacyCloseButton = document.querySelector('.privacy__close');
    const privacyOverlay = privacyModal.querySelector('.privacy__overlay');

    function openPrivacyModal() {
      privacyModal.classList.add('active');
      body.classList.add('body-no-scroll');
    }

    function closePrivacyModal() {
      privacyModal.classList.remove('active');
      body.classList.remove('body-no-scroll');
    }

    privacyOpenButtons.forEach(button => {
      button.addEventListener('click', openPrivacyModal);
    });

    privacyCloseButton.addEventListener('click', closePrivacyModal);

    privacyOverlay.addEventListener('click', (event) => {
      const privacyWindow = privacyModal.querySelector('.privacy__window');
      if (!privacyWindow.contains(event.target)) {
        closePrivacyModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closePrivacyModal();
      }
    });
  });
};

togglePrivacyModal();