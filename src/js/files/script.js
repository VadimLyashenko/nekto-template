// Подключение функционала шаблона
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let page = document.querySelector("main");
let productsCodes = document.querySelectorAll(".featured__code_value");

productsCodes.forEach((code) => {
  code.addEventListener("click", () => {
    navigator.clipboard.writeText(code.innerText).then(() => {
      showAlert();
    });
  });
});

function showAlert() {
  if (page.classList.contains("show-alert")) return;
  setTimeout(() => page.classList.remove("show-alert"), 3600);
  page.classList.add("show-alert");
}

function initGalleries() {
  let galleries = document.querySelectorAll("[data-gallery]");

  let items_1 = [
    {
      src: "../img/products/chairs/chair_1/gallery_1.png",
      thumb: "../img/products/chairs/chair_1/thumb_1.png",
    },
    {
      src: "../img/products/chairs/chair_1/gallery_2.png",
      thumb: "../img/products/chairs/chair_1/thumb_2.png",
    },
    {
      src: "../img/products/chairs/chair_1/gallery_3.png",
      thumb: "../img/products/chairs/chair_1/thumb_3.png",
    },
    {
      src: "../img/products/chairs/chair_1/gallery_4.png",
      thumb: "../img/products/chairs/chair_1/thumb_4.png",
    },
  ];

  let items_2 = [
    {
      src: "../img/products/chairs/chair_2/gallery_1.png",
      thumb: "../img/products/chairs/chair_2/thumb_1.png",
    },
    {
      src: "../img/products/chairs/chair_2/gallery_2.png",
      thumb: "../img/products/chairs/chair_2/thumb_2.png",
    },
    {
      src: "../img/products/chairs/chair_2/gallery_3.png",
      thumb: "../img/products/chairs/chair_2/thumb_3.png",
    },
    {
      src: "../img/products/chairs/chair_2/gallery_4.png",
      thumb: "../img/products/chairs/chair_2/thumb_4.png",
    },
  ];

  let items_3 = [
    {
      src: "../img/products/chairs/chair_3/gallery_1.png",
      thumb: "../img/products/chairs/chair_3/thumb_1.png",
    },
    {
      src: "../img/products/chairs/chair_3/gallery_2.png",
      thumb: "../img/products/chairs/chair_3/thumb_2.png",
    },
    {
      src: "../img/products/chairs/chair_3/gallery_3.png",
      thumb: "../img/products/chairs/chair_3/thumb_3.png",
    },
    {
      src: "../img/products/chairs/chair_3/gallery_4.png",
      thumb: "../img/products/chairs/chair_3/thumb_4.png",
    },
  ];

  let items_4 = [
    {
      src: "../img/products/chairs/chair_4/gallery_1.png",
      thumb: "../img/products/chairs/chair_4/thumb_1.png",
    },
    {
      src: "../img/products/chairs/chair_4/gallery_2.png",
      thumb: "../img/products/chairs/chair_4/thumb_2.png",
    },
    {
      src: "../img/products/chairs/chair_4/gallery_3.png",
      thumb: "../img/products/chairs/chair_4/thumb_3.png",
    },
    {
      src: "../img/products/chairs/chair_4/gallery_4.png",
      thumb: "../img/products/chairs/chair_4/thumb_4.png",
    },
  ];

  let items_5 = [
    {
      src: "../img/products/chairs/chair_5/gallery_1.png",
      thumb: "../img/products/chairs/chair_5/thumb_1.png",
    },
    {
      src: "../img/products/chairs/chair_5/gallery_2.png",
      thumb: "../img/products/chairs/chair_5/thumb_2.png",
    },
    {
      src: "../img/products/chairs/chair_5/gallery_3.png",
      thumb: "../img/products/chairs/chair_5/thumb_3.png",
    },
    {
      src: "../img/products/chairs/chair_5/gallery_4.png",
      thumb: "../img/products/chairs/chair_5/thumb_4.png",
    },
  ];

  galleries.forEach((gallery) => {
    flsModules.gallery[0].galleryClass.getMediaContainerPosition = function () {
      var top = this.$toolbar.get().clientHeight || 0;
      var thumbContainer = this.outer.find(".lg-thumb-outer").get();
      var thumbHeight = thumbContainer ? 100 : 0;
      var bottom = thumbHeight;
      return {
        top: top,
        bottom: bottom,
      };
    };

    gallery.addEventListener("click", () => {
      let id = +gallery.getAttribute("data-id");

      if (id === 1) {
        flsModules.gallery[0].galleryClass.refresh(items_1);
      }
      if (id === 2) {
        flsModules.gallery[0].galleryClass.refresh(items_2);
      }
      if (id === 3) {
        flsModules.gallery[0].galleryClass.refresh(items_3);
      }

      if (id === 4) {
        flsModules.gallery[0].galleryClass.refresh(items_4);
      }

      if (id === 5) {
        flsModules.gallery[0].galleryClass.refresh(items_5);
      }

      flsModules.gallery[0].galleryClass.openGallery();
    });
  });
}


window.addEventListener("load", () => {
  initGalleries()
})