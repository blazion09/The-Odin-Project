import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";
import editProjectDialogHTML from "./components/html/edit-project-modal.html";
import editTaskDialogHTML from "./components/html/edit-task-modal.html";
import {
  Project,
  saveEditedProject,
  saveProject,
  showEditProjectModal,
} from "./components/js/project-creation";
import {
  addTaskDOM,
  saveEditedTask,
  saveTask,
} from "./components/js/task-creation";
import { LocalStorage } from "./components/js/local-storage-logic";

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
  projectList,
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
const projectList = ["default"];

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

editTaskForm.addEventListener("submit", function () {
  saveEditedTask();
});

//default
const editProjectBtn = document.querySelector(".edit-project");
editProjectBtn.addEventListener("click", () => showEditProjectModal("default"));
const project = new Project("Project Title 1", "Project Description 1");
LocalStorage.saveItem("default", project);

const defaultTaskBtn = document.querySelector(".add-task-btn");
defaultTaskBtn.addEventListener("click", function () {
  taskDialog.showModal();
  taskForm.reset();
  localStorage.setItem("selectedProject", "default");
});

const defaultList = document.querySelector(".default-list");
defaultList.addEventListener("click", function () {
  if (document.querySelector(".li-selected") != null) {
    const activeProject = document.querySelector(".li-selected");
    activeProject.classList.remove("li-selected");
  }
  projectList.forEach((project) => {
    const allProjectContainer = document.querySelector(`.Project-${project}`);
    allProjectContainer.style.display = "none";
    const activeContainer = document.querySelector(`.Project-default`);
    activeContainer.style.display = "block";
    defaultList.classList.add("li-selected");
  });
});
