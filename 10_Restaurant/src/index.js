import "./css/reset.css";
import "./css/style.css";
import { home } from "./component/home.js";
import { menuItem } from "./component/menu.js";

const mainContent = document.querySelector("#content");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");

const Home = new home();
let homeTab = Home.createAndAppendHomeElement(mainContent);
Home.createAndAppendIntroText(homeTab);

// menu Tab
// const Menu = new menu();
// let menuTab = Menu.createAndAppendMenuElement(mainContent);
// Menu.createAndAppendMenuTitle(menuTab);
// Menu.createAndAppendMenuItem(menuTab);

let menu = new menuItem();
menu.createMenuList(mainContent);
