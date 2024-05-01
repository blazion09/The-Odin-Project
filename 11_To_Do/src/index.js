import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";
import editProjectDialogHTML from "./components/html/edit-project-modal.html";
import editTaskDialogHTML from "./components/html/edit-task-modal.html";
import removeProjectConfirmationHTML from "./components/html/comfirm-remove.html";

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
document.getElementById("removeProjectConfirmationHTML").innerHTML =
  removeProjectConfirmationHTML;

const projectDIV = document.querySelector(".project");
const projectList = [];

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

//Delete Project
const yesDelete = document.querySelector("#yesDelete");
yesDelete.addEventListener("click", () => {
  const projectID = localStorage.getItem("selectedProject");
  const wrapper = document.querySelector(`.Project-${projectID}`);
  wrapper.remove();
  const navLi = document.querySelector(`.List-${projectID}`);
  navLi.remove();
  localStorage.removeItem(projectID);
  const confirmationDialog = document.querySelector(
    "#delete-project-confirmation"
  );
  confirmationDialog.close();
});
const cancelDelete = document.querySelector("#cancelDelete");
cancelDelete.addEventListener("click", () => {
  const confirmationDialog = document.querySelector(
    "#delete-project-confirmation"
  );
  confirmationDialog.close();
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

//default project
function defaultPage() {
  //project details
  projectForm.elements["project-title"].value = "Project Title";
  projectForm.elements["project-description"].value =
    "This is the project description.";
  saveProject();
  //defaul task
  taskForm.elements["task-title"].value = "Task Title";
  taskForm.elements["task-description"].value = "This is the task description";
  taskForm.elements["task-due"].value = "2024-05-05";
  taskForm.elements["task-priority"].value = "Low";
  saveTask();
}
defaultPage();
