export { menu };

class menu {
  createAndAppendMenuElement(content) {
    let menuElement = document.createElement("div");
    menuElement.id = "menu";
    menuElement.classList.add("tab");
    return content.appendChild(menuElement);
  }

  createAndAppendMenuTitle(content) {
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    return content.appendChild(menuTitle);
  }

  createAndAppendMenuText(content) {
    let introElement = document.createElement("[p]");
    introElement.classList.add("menu");
    introElement.textContent = "Burger";
    return content.appendChild(introElement);
  }
}
