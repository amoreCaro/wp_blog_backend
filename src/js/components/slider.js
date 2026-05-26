import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function slider() {
  document.querySelectorAll('.slider').forEach((el) => {
    const parent = el.closest('.post-card');

    const nextBtn = parent.querySelector('.slider__btn-next');
    const prevBtn = parent.querySelector('.slider__btn-prev');
    const pagination = parent.querySelector('.slider__pagination');

    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      loop: false,
      slidesPerView: 1,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },

      pagination: {
        el: pagination,
        clickable: true,
      },

      on: {
        init: (swiper) => {
          updateButtons(swiper, prevBtn, nextBtn);
        },

        slideChange: (swiper) => {
          updateButtons(swiper, prevBtn, nextBtn);
        },
      },
    });
  });
}