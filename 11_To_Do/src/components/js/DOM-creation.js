export class DOMCreation {
  constructor(elementType, className, content) {
    this.element = document.createElement(elementType);
    if (className) {
      className = className;
      this.element.classList.add(className);
    }
    this.element.textContent = content;
  }
  appendTo(parent) {
    parent.appendChild(this.element);
  }
}
