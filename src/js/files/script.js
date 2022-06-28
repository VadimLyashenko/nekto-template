// Подключение функционала шаблона
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let page = document.querySelector("main")
let productsCodes = document.querySelectorAll('.featured__code_value')

productsCodes.forEach(code => {
  code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.innerText).then(() => {
      showAlert()
    });
  })
})

function showAlert() {
  if (page.classList.contains("show-alert")) return
  setTimeout(() => page.classList.remove("show-alert"), 3600)
  page.classList.add("show-alert")
}

let galleries = document.querySelectorAll('[data-gallery]')

galleries.forEach(gallery => {

  flsModules.gallery[0].galleryClass.getMediaContainerPosition = function () {
    var top = this.$toolbar.get().clientHeight || 0;
    var thumbContainer = this.outer.find('.lg-thumb-outer').get();
    var thumbHeight = thumbContainer ? 100 : 0;
    var bottom = thumbHeight;
    return {
        top: top,
        bottom: bottom,
    };
  }

  gallery.addEventListener('click', () => {
    const items = [
      {
        src: '../img/products/chairs/chair_1/gallery_1.png',
        thumb: '../img/products/chairs/chair_1/chair_1.png',
      },
      {
        src: '../img/products/chairs/chair_1/gallery_2.png',
        thumb: '../img/products/chairs/chair_1/chair_1.png',
      },
      {
        src: '../img/products/chairs/chair_1/gallery_3.png',
        thumb: '../img/products/chairs/chair_1/chair_1.png',
      },
      {
        src: '../img/products/chairs/chair_1/gallery_4.png',
        thumb: '../img/products/chairs/chair_1/chair_1.png',
      },
    ];
    flsModules.gallery[0].galleryClass.refresh(items)
    flsModules.gallery[0].galleryClass.openGallery()
  })
})