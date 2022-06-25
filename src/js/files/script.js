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
  gallery.addEventListener('click', () => {
    const newItems = [
      {
        src: '../img/products/chairs/chair_9.png',
        thumb: '../img/products/chairs/chair_9.png',
      },
      {
        src: '../img/products/chairs/chair_1.png',
        thumb: '../img/products/chairs/chair_1.png',
      },
      {
        src: '../img/products/chairs/chair_2.png',
        thumb: '../img/products/chairs/chair_2.png',
      },
    ];
    flsModules.gallery[0].galleryClass.refresh(newItems);
    flsModules.gallery[0].galleryClass.openGallery()
  })
})