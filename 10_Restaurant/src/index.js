import "./css/reset.css";
import "./css/style.css";
import { homeContent } from "./component/home.js";
import { menuContent } from "./component/menu.js";
import { aboutContent } from "./component/about.js";

const mainContent = document.querySelector("#content");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");

homeContent.appendTo(mainContent);
menuContent.appendTo(mainContent);
aboutContent.appendTo(mainContent);

const homeTab = document.querySelector(".home");
const menuTab = document.querySelector(".menu");
const aboutTab = document.querySelector(".about");
menuTab.style.display = "none";
aboutTab.style.display = "none";

menuBtn.addEventListener("click", function () {
  homeTab.style.display = "none";
  menuTab.style.display = "block";
  aboutTab.style.display = "none";
});

homeBtn.addEventListener("click", function () {
  homeTab.style.display = "block";
  menuTab.style.display = "none";
  aboutTab.style.display = "none";
});

aboutBtn.addEventListener("click", function () {
  homeTab.style.display = "none";
  menuTab.style.display = "none";
  aboutTab.style.display = "block";
});
