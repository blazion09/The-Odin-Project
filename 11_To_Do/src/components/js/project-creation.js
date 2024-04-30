import {
  projectForm,
  projectDIV,
  editProjectDialog,
  editProjectForm,
  projectList,
} from "../..";
import { LocalStorage } from "./local-storage-logic";
import { DOMCreation } from "./dom-creation";
import { addTaskBtn } from "./task-creation";

export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.task = {};
  }
}

export function saveProject(projectID) {
  const title = projectForm.elements["project-title"].value;
  const description = projectForm.elements["project-description"].value;
  const project = new Project(title, description);
  projectID = Date.now();
  LocalStorage.saveItem(projectID, project);
  projectList.push(projectID);
  //Project
  addProjectDOM(projectID, project);
  //Task
  addTaskBtn(projectID);
}

function addProjectDOM(projectID, project) {
  const wrapper = new DOMCreation("div", `Project-${projectID}`);
  wrapper.appendTo(projectDIV);
  const projectContainer = new DOMCreation("div", "project-container");
  projectContainer.appendTo(wrapper.element);
  //Title
  const projectTitle = new DOMCreation("p", "project-title", project.title);
  projectTitle.element.setAttribute("id", `Project-Title-${projectID}`);
  projectTitle.appendTo(projectContainer.element);
  //Description
  const projectDescription = new DOMCreation(
    "p",
    "project-description",
    project.description
  );
  projectDescription.element.setAttribute(
    "id",
    `Project-Description-${projectID}`
  );
  projectDescription.appendTo(projectContainer.element);
  //Button
  addEditProjectBtn(projectID, projectContainer.element);
  //Nav
  addNavInteraction(projectID, project);
}

function addNavInteraction(projectID, project) {
  //Nav
  const nav = document.querySelector(".nav-list");
  const list = new DOMCreation("li", `List-${projectID}`, project.title);
  //switch between active project DOM
  list.element.addEventListener("click", function () {
    //remove active color if there is any active
    if (document.querySelector(".li-selected") != null) {
      const activeProject = document.querySelector(".li-selected");
      activeProject.classList.remove("li-selected");
    }
    projectList.forEach((project) => {
      const allProjectContainer = document.querySelector(`.Project-${project}`);
      allProjectContainer.style.display = "none";
      const activeContainer = document.querySelector(`.Project-${projectID}`);
      activeContainer.style.display = "block";
      list.element.classList.add("li-selected");
    });
  });
  //show current projectDOM
  projectList.forEach((project) => {
    const allProjectContainer = document.querySelector(`.Project-${project}`);
    allProjectContainer.style.display = "none";
    const activeContainer = document.querySelector(`.Project-${projectID}`);
    activeContainer.style.display = "block";
  });
  list.appendTo(nav);
}

function addEditProjectBtn(projectID, projectContainer) {
  const editProjectBtn = new DOMCreation(
    "button",
    "edit-project",
    "Edit Project"
  );
  editProjectBtn.element.setAttribute("id", projectID);
  editProjectBtn.element.addEventListener("click", function () {
    showEditProjectModal(projectID);
  });
  editProjectBtn.appendTo(projectContainer);
}

export function showEditProjectModal(projectID) {
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
  //Save new project details
  loadedProject.title = editProjectForm.elements["project-title"].value;
  loadedProject.description =
    editProjectForm.elements["project-description"].value;
  //
  LocalStorage.saveItem(projectID, loadedProject);

  updateProjectDOM(projectID);
}

export function updateProjectDOM(projectID) {
  const loadedProject = LocalStorage.retrieveItem(projectID);
  //Project Title
  const projectTitle = document.querySelector(`#Project-Title-${projectID}`);
  projectTitle.textContent = loadedProject.title;

  //Project Description
  const projectDescription = document.querySelector(
    `#Project-Description-${projectID}`
  );
  projectDescription.textContent = loadedProject.description;
}
