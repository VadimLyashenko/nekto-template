// Подключение функционала шаблона
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// (function(){

//   var doc = document.documentElement;
//   var w = window;

//   var prevScroll = w.scrollY || doc.scrollTop;
//   var curScroll;
//   var direction = 0;
//   var prevDirection = 0;

//   let header = document.getElementsByClassName('body-header');
//   header = header[0]

//   var checkScroll = function() {

//     /*
//     ** Find the direction of scroll
//     ** 0 - initial, 1 - up, 2 - down
//     */

//     curScroll = w.scrollY || doc.scrollTop;
//     if (curScroll > prevScroll) { 
//       //scrolled up
//       direction = 2;
//     }
//     else if (curScroll < prevScroll) { 
//       //scrolled down
//       direction = 1;
//     }

//     if (direction !== prevDirection) {
//       toggleHeader(direction, curScroll);
//     }

//     prevScroll = curScroll;
//   };

//   var toggleHeader = function(direction, curScroll) {
//     if (direction === 2 && curScroll > 52) { 

//       //replace 52 with the height of your header in px

//       header.classList.add('hide-body-header');
//       prevDirection = direction;
//     }
//     else if (direction === 1) {
//       header.classList.remove('hide-body-header');
//       prevDirection = direction;
//     }
//   };

//   window.addEventListener('scroll', checkScroll);

// })();


function toggleHeader () {
  // let header = document.getElementsByClassName('body-header');
  document.addEventListener('click', event => {
    document.documentElement.classList.toggle("body-header-hidden");
  });
}

toggleHeader ()