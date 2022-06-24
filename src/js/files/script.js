// Подключение функционала шаблона
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let page = document.querySelector("main")

function showAlert() {
  if (page.classList.contains("show-alert")) return
  setTimeout(() => page.classList.remove("show-alert"), 3600)
  page.classList.add("show-alert")
}