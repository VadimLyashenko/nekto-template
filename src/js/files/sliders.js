/*
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Autoplay } from "swiper";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  if (document.querySelector(".slider__swiper")) {
    new Swiper(".slider__swiper", {
      modules: [Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      */

      pagination: {
        el: ".slider__pagination",
        clickable: true,
      },

      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      /*
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      */
      // События
      on: {},
    });
  }
  if (document.querySelector(".featured-slider__swiper")) {
    new Swiper(".featured-slider__swiper", {
      modules: [Pagination, Autoplay],
      observer: true,
      observeParents: true,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".featured-slider__pagination",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        398: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
      },
    });
  }
  if (document.querySelector(".top-categories__swiper")) {
    new Swiper(".top-categories__swiper", {
      modules: [Pagination, Autoplay],
      observer: true,
      observeParents: true,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },

      pagination: {
        el: ".top-categories__pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        398: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
