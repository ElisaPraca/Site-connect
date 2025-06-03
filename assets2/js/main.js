/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.classList.add('show');
        // Se quiser que só aconteça 1x, descomente a linha abaixo
        // observer.unobserve(container);
      } else {
        container.classList.remove('show');
      }
    });
  }, { threshold: 0.1 }); // dispara quando 10% da seção está visível

  observer.observe(container);
});

