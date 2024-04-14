import { DomElement } from "./DomElement";
export { aboutContent };

const aboutContent = new DomElement("div", "about", "");
const aboutTitle = new DomElement("div", "about-title", "About");
aboutTitle.appendTo(aboutContent.element);
