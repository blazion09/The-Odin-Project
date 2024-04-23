import { projectDIV } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";
import { Project } from "./project-creation";

export function createProject() {
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

    createDOM(title);
  });
}

//create DOM for Project Title, Project Description and Create Task Button(with Data of Project name)
function createDOM(projectName) {
  const projectTitle = new DOMCreation("div", projectName, projectName);
  projectTitle.appendTo(projectDIV);
}
