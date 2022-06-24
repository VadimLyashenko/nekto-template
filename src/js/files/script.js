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