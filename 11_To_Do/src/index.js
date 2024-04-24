import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";

import { createProject } from "./components/js/project-dom-creation";
import { TaskDetails } from "./components/js/task-creation";
import { Project } from "./components/js/project-creation";
import { LocalStorage } from "./components/js/local-storage-logic";
import { saveTask } from "./components/js/task-dom-creation";

export { projectDIV, projectDialog, projectForm, taskDialog, taskForm };

//FOR DEVELOPMENT PROCESS
localStorage.clear();
//
document.getElementById("taskDialogHTML").innerHTML = taskDialogHTML;
document.getElementById("projectDialogHTML").innerHTML = projectDialogHTML;
const projectDIV = document.querySelector(".project");

//Create Project
const createProjectBtn = document.querySelector(".create-project");
const projectDialog = document.querySelector(".project-dialog");
const projectForm = document.getElementById("project-form");

createProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});
projectForm.addEventListener("submit", createProject);

//Create Task
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", saveTask);
