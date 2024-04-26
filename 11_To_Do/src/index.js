import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";
import editProjectDialogHTML from "./components/html/edit-project-modal.html";
import editTaskDialogHTML from "./components/html/edit-task-modal.html";
import {
  saveEditedProject,
  saveProject,
} from "./components/js/project-creation";
import { addTaskDOM, saveTask } from "./components/js/task-creation";

export {
  projectDIV,
  projectDialog,
  projectForm,
  taskDialog,
  taskForm,
  editProjectForm,
  editProjectDialog,
  editTaskDialog,
  editTaskForm,
};

//FOR DEVELOPMENT PROCESS
localStorage.clear();
//
document.getElementById("taskDialogHTML").innerHTML = taskDialogHTML;
document.getElementById("projectDialogHTML").innerHTML = projectDialogHTML;
document.getElementById("editProjectDialogHTML").innerHTML =
  editProjectDialogHTML;
document.getElementById("editTaskDialogHTML").innerHTML = editTaskDialogHTML;
const projectDIV = document.querySelector(".project");

//Create Project
const createProjectBtn = document.querySelector(".create-project");
const projectDialog = document.querySelector(".project-dialog");
const projectForm = document.getElementById("project-form");

createProjectBtn.addEventListener("click", function () {
  projectDialog.showModal();
  projectForm.reset();
});

projectForm.addEventListener("submit", function () {
  saveProject();
});

//Edit Project
const editProjectDialog = document.querySelector(".edit-project-dialog");
const editProjectForm = document.getElementById("project-edit");

editProjectForm.addEventListener("submit", function () {
  saveEditedProject();
});

//Create Task
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function () {
  saveTask();
});

//Edit Task
const editTaskDialog = document.querySelector(".edit-task-dialog");
const editTaskForm = document.getElementById("edit-task-form");
