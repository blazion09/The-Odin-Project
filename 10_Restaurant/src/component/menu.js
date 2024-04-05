export { menu };
export { menuItem };

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

  createAndAppendMenuItem(content) {
    let list = document.createElement("ul");
    list.classList.add("menu-list");

    for (let i = 0; i < 6; i++) {
      let item = document.createElement("li");
      item.classList.add("item");
      list.appendChild(item);
    }

    return content.appendChild(list);
  }
}

class menuItem {
  menuItem = [
    "Classic Burger ",
    "Bacon Cheeseburger",
    "Mushroom Swiss Burger",
    "Veggie Burger",
    "BBQ Bacon Burger",
  ];

  createMenuList(content) {
    let list = document.createElement("ul");
    list.classList.add("menu-list");

    for (let i = 0; i < menuItem.length; i++) {
      let item = document.createElement("li");
      item.classList.add("item");
      item.textContent = menuItem[i];
      list.appendChild(item);
    }

    return content.appendChild(list);
  }
}
