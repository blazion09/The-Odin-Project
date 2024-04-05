export { home };

class home {
  createAndAppendHomeElement(content) {
    let homeElement = document.createElement("div");
    homeElement.id = "home";
    homeElement.classList.add("tab");
    return content.appendChild(homeElement);
  }

  createAndAppendIntroText(content) {
    let introElement = document.createElement("div");
    introElement.classList.add("intro");
    introElement.textContent = "Welcome to the Best Burger in Town!";
    return content.appendChild(introElement);
  }
}
