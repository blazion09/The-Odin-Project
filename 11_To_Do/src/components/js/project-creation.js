import {
  projectForm,
  projectDIV,
  editProjectDialog,
  editProjectForm,
} from "../..";
import { LocalStorage } from "./local-storage-logic";
import { DOMCreation } from "./dom-creation";

export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.task = {};
  }

  addTask(task) {
    this._task[task.timeStamp] = task;
  }

  deleteTask(task) {
    delete this._task[task.timeStamp];
  }
}

export function saveProject(projectID) {
  const title = projectForm.elements["project-title"].value;
  const description = projectForm.elements["project-description"].value;
  const project = new Project(title, description);
  projectID = Date.now();
  LocalStorage.saveItem(projectID, project);

  addProjectDOM(projectID, project);
  addEditProjectBtn(projectID);
}

function addProjectDOM(projectID, project) {
  const projectDOM = new DOMCreation("div", `Project-${projectID}`);
  projectDOM.appendTo(projectDIV);
  const projectTitle = new DOMCreation("p", "project-title", project.title);
  projectTitle.element.setAttribute("id", `Project-Title-${projectID}`);
  projectTitle.appendTo(projectDOM.element);
}

function addEditProjectBtn(projectID) {
  const editProjectBtn = new DOMCreation(
    "button",
    "edit-project",
    "Edit Project"
  );
  editProjectBtn.element.setAttribute("id", projectID);
  editProjectBtn.element.addEventListener("click", function () {
    editProject(projectID);
  });
  const projectDOM = document.querySelector(`.Project-${projectID}`);
  editProjectBtn.appendTo(projectDOM);
}

function editProject(projectID) {
  editProjectDialog.showModal();
  const loadedProject = LocalStorage.retrieveItem(projectID);
  localStorage.setItem("selected", projectID);
  editProjectForm.elements["project-title"].value = loadedProject.title;
  editProjectForm.elements["project-description"].value =
    loadedProject.description;
}

export function saveEditedProject() {
  const projectID = localStorage.getItem("selected");
  const loadedProject = LocalStorage.retrieveItem(projectID);
  loadedProject.title = editProjectForm.elements["project-title"].value;
  loadedProject.description =
    editProjectForm.elements["project-description"].value;
  LocalStorage.saveItem(projectID, loadedProject);
  const projectTitle = document.querySelector(`#Project-Title-${projectID}`);
  projectTitle.textContent = loadedProject.title;
}

// function updateProjectDOM(projectID) {
//   const projectDOM = document.querySelector(`.Project${projectID}`);
//   const loadedProject = LocalStorage.retrieveItem(projectID);
//   projectDOM.textContent = loadedProject.title;
// }
