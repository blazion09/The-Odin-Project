import "./css/reset.css";
import "./css/style.css";

import taskDialogHTML from "./components/html/task-modal.html";
import projectDialogHTML from "./components/html/project-modal.html";
import editProjectDialogHTML from "./components/html/edit-project-modal.html";
import { TaskDetails } from "./components/js/task-creation";
import { Project } from "./components/js/project-creation";
import { LocalStorage } from "./components/js/local-storage-logic";
import { DOMCreation } from "./components/js/dom-creation";

export { projectDIV, projectDialog, projectForm, taskDialog, taskForm };

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

//edit project
const editProjectDialog = document.querySelector(".edit-project-dialog");
const editProjectForm = document.getElementById("project-edit");

function checkKeyExist(key) {
  return localStorage.getItem(key) !== null;
}

createProjectBtn.addEventListener("click", function () {
  projectDialog.showModal();
});

projectForm.addEventListener("submit", function () {
  //get value from form
  const title = projectForm.elements["project-title"].value;
  const description = projectForm.elements["project-description"].value;
  const project = new Project(title, description);
  const projectID = Date.now();
  LocalStorage.saveItem(projectID, project);

  const editProjectBtn = new DOMCreation(
    "button",
    "edit-project",
    "Edit Project"
  );
  editProjectBtn.element.setAttribute("id", projectID);
  editProjectBtn.element.addEventListener("click", function () {
    console.log(projectID);
    editProject(projectID);
  });
  editProjectBtn.appendTo(projectDIV);

  //create Button to Add Task
  //   const addTaskBtn = new DOMCreation("button", project.timeStamp, "Add Task");
  //   addTaskBtn.appendTo(projectDIV);
});

function editProject(projectID) {
  editProjectDialog.showModal();
  const loadedProject = LocalStorage.retrieveItem(projectID);
  editProjectForm.elements["project-title"].value = loadedProject.title;
  editProjectForm.elements["project-description"].value =
    loadedProject.description;
}

//Create Task
const taskDialog = document.querySelector(".task-dialog");
const taskForm = document.getElementById("task-form");

const task = new TaskDetails("Title 1", "Description 1", "2020-22-1", "Low");
