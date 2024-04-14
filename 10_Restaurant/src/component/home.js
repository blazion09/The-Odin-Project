import { DomElement } from "./DomElement";
export { homeContent };

const homeContent = new DomElement("div", "home", "");

const intro = new DomElement(
  "div",
  "intro",
  "Welcome to the Best Burger in Town!"
);
intro.appendTo(homeContent.element);
