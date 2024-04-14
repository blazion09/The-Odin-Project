export class DomElement {
  constructor(elementType, className, content) {
    this.element = document.createElement(elementType);
    this.element.classList.add(className);
    this.element.textContent = content;
  }
  appendTo(parent) {
    parent.appendChild(this.element);
  }
}
