export { DomElement };
import "./css/reset.css";
import "./css/style.css";
import { homeContent } from "./component/home.js";
import { menuContent } from "./component/menu.js";

class DomElement {
  constructor(elementType, className, content) {
    this.element = document.createElement(elementType);
    this.element.classList.add(className);
    this.element.textContent = content;
  }
  appendTo(parent) {
    parent.appendChild(this.element);
  }
}

const mainContent = document.querySelector("#content");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");

homeContent.appendTo(mainContent);
menuContent.appendTo(mainContent);

const homeTab = document.querySelector(".home");
const menuTab = document.querySelector(".menu");
menuTab.style.display = "none";

menuBtn.addEventListener("click", function () {
  homeTab.style.display = "none";
  menuTab.style.display = "block";
});

homeBtn.addEventListener("click", function () {
  homeTab.style.display = "block";
  menuTab.style.display = "none";
});
