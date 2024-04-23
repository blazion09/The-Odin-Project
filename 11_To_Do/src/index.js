import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";

import { projectDOM } from "./components/js/project-dom-creation";
import { TaskDetails } from "./components/js/task-creation";
import { Project } from "./components/js/project-creation";
import { LocalStorage } from "./components/js/local-storage-logic";

//FOR DEVELOPMENT PROCESS
localStorage.clear();
//
document.getElementById("taskDialogHTML").innerHTML = taskDialogHTML;
document.getElementById("projectDialogHTML").innerHTML = projectDialogHTML;

//Create Project
const createProjectBtn = document.querySelector(".create-project");
createProjectBtn.addEventListener("click", projectDOM);

const project1 = new Project("Project 1", "Description 1");

const createTask = document.querySelector(".create-task");
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.getElementById("task-form");

createTask.addEventListener("click", () => {
  taskDialog.showModal();
});

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //constructor(title, description, dueDate, priorityLevel, project)
  const title = taskForm.elements["task-title"].value;
  const description = taskForm.elements["task-description"].value;
  const dueDate = taskForm.elements["task-due"].value;
  const priorityLevel = taskForm.elements["task-priority"].value;

  const task = new TaskDetails(title, description, dueDate, priorityLevel);
  LocalStorage.addTask(project1, task);
  taskDialog.close();
});
