import { DomElement } from "./DomElement";
export { aboutContent };

const aboutContent = new DomElement("div", "about", "");

const aboutTitle = new DomElement("div", "about-title", "About");
aboutTitle.appendTo(aboutContent.element);

const desc = new DomElement(
  "div",
  "",
  "Welcome to Burger Palace! Where we serve up the juiciest, most flavorful burgers in town. Our passion for quality ingredients and expert craftsmanship ensures every bite is a delight."
);
desc.appendTo(aboutContent.element);

const address1 = new DomElement("div", "", "123 Burger Street ");
address1.appendTo(aboutContent.element);
