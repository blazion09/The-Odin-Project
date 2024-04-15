import { DomElement } from "./DomElement";
export { menuContent };

const menuContent = new DomElement("div", "menu");

const menuTitle = new DomElement("div", "menu-title", "Menu");
menuTitle.appendTo(menuContent.element);

const menuUL = new DomElement("ul", "menuList", "");
menuUL.appendTo(menuContent.element);

//item list for menu
const menuItems = [
  "Classic Burger ",
  "Bacon Cheeseburger",
  "Mushroom Swiss Burger",
  "Veggie Burger",
  "BBQ Bacon Burger",
];
for (let i = 0; i < menuItems.length; i++) {
  let menuLI = new DomElement("li", "menuList", menuItems[i]);
  menuLI.appendTo(menuUL.element);
}
