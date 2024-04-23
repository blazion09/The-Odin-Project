import { projectDIV, projectDialog, projectForm } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";
import { Project } from "./project-creation";
import { taskModal } from "./task-dom-creation";

export function createProject() {
  projectDialog.showModal();
}

export function create() {
  //constructor(title, description)
  const title = projectForm.elements["project-title"].value;
  const description = projectForm.elements["project-description"].value;

  const project = new Project(title, description);
  LocalStorage.saveProject(project);
  projectDialog.close();

  createDOM(project.title, description, project);
}

//create DOM for Project Title, Project Description and Create Task Button(with Data of Project name)
function createDOM(projectName, projecDesc, projectObj) {
  const projectTitle = new DOMCreation("div", projectName, projectName);
  projectTitle.appendTo(projectDIV);

  const projectDescription = new DOMCreation(
    "div",
    `${projectName}-description`,
    projecDesc
  );
  projectDescription.appendTo(projectTitle.element);

  const addTaskBtn = new DOMCreation(
    "button",
    `${projectName}-btn`,
    "Add Task"
  );
  addTaskBtn.appendTo(projectTitle.element);
  if (!addTaskBtn.onclick) {
    addTaskBtn.element.addEventListener("click", function () {
      taskModal(projectObj);
    });
  }
}
