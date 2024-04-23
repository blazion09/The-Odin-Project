import { LocalStorage } from "./local-storage-logic";
import { Project } from "./project-creation";

export function projectDOM() {
  const projectDialog = document.querySelector(".project-dialog");
  projectDialog.showModal();

  const projectForm = document.getElementById("project-form");
  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //constructor(title, description)
    const title = projectForm.elements["project-title"].value;
    const description = projectForm.elements["project-description"].value;

    const project = new Project(title, description);
    LocalStorage.saveProject(project);
    projectDialog.close();
  });
}
