import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";

import { create, createProject } from "./components/js/project-dom-creation";
import { TaskDetails } from "./components/js/task-creation";
import { Project } from "./components/js/project-creation";
import { LocalStorage } from "./components/js/local-storage-logic";

export { projectDIV, projectDialog, projectForm };

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
createProjectBtn.addEventListener("click", createProject);
projectForm.addEventListener("submit", create);
