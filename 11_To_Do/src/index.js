import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";
import editProjectDialogHTML from "./components/html/edit-project-modal.html";
import { TaskDetails } from "./components/js/task-creation";
import {
  Project,
  ProjectDOM,
  saveEditedProject,
  saveProject,
} from "./components/js/project-creation";
import { LocalStorage } from "./components/js/local-storage-logic";
import { DOMCreation } from "./components/js/dom-creation";

export {
  projectDIV,
  projectDialog,
  projectForm,
  taskDialog,
  taskForm,
  editProjectForm,
  editProjectDialog,
};

//FOR DEVELOPMENT PROCESS
localStorage.clear();
//
document.getElementById("taskDialogHTML").innerHTML = taskDialogHTML;
document.getElementById("projectDialogHTML").innerHTML = projectDialogHTML;
document.getElementById("editProjectDialogHTML").innerHTML =
  editProjectDialogHTML;
const projectDIV = document.querySelector(".project");

//Create Project
const createProjectBtn = document.querySelector(".create-project");
const projectDialog = document.querySelector(".project-dialog");
const projectForm = document.getElementById("project-form");

createProjectBtn.addEventListener("click", function () {
  projectDialog.showModal();
});

projectForm.addEventListener("submit", function () {
  saveProject();
});

//edit project
const editProjectDialog = document.querySelector(".edit-project-dialog");
const editProjectForm = document.getElementById("project-edit");
editProjectForm.addEventListener("submit", function () {
  saveEditedProject();
});

//Create Task
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.getElementById("task-form");

const task = new TaskDetails("Title 1", "Description 1", "2020-22-1", "Low");
