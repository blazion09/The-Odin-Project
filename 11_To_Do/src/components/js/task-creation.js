import { editTaskDialog, editTaskForm, taskDialog, taskForm } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";

import editIcon from "../../img/edit-text.png";
export class TaskDetails {
  constructor(title, description, dueDate, priorityLevel) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevel;
  }
}

export function addTaskBtn(projectID, projectContainer) {
  const btn = new DOMCreation("button", "add-task-btn", "Add Task");
  btn.element.addEventListener("click", function () {
    taskDialog.showModal();
    taskForm.reset();
    localStorage.setItem("selectedProject", projectID);
  });
  btn.appendTo(projectContainer);
}

//Function to activate when submitting task form
export function saveTask() {
  const title = taskForm.elements["task-title"].value;
  const description = taskForm.elements["task-description"].value;
  const dueDate = taskForm.elements["task-due"].value;
  const priorityLevel = taskForm.elements["task-priority"].value;
  const taskID = Date.now();
  const task = new TaskDetails(title, description, dueDate, priorityLevel);
  LocalStorage.saveItem(taskID, task);
  addTaskDOM(taskID);
}

export function addTaskDOM(taskID) {
  const projectID = localStorage.getItem("selectedProject");
  const task = LocalStorage.retrieveItem(taskID);
  //container
  const taskContainer = new DOMCreation("div", "task-container");
  taskContainer.element.setAttribute("id", `Task-Container-${taskID}`);
  const taskSection = document.querySelector(`#Task-Section-${projectID}`);
  taskContainer.appendTo(taskSection);
  //set color based on priority
  switch (task.priority) {
    case "Low":
      taskContainer.element.style.backgroundColor = "#ADD8E6";
      break;
    case "Medium":
      taskContainer.element.style.backgroundColor = "#FFFF00";
      break;
    case "High":
      taskContainer.element.style.backgroundColor = "#FF0000";
  }
  //task-title-container
  const titleContainer = new DOMCreation("div", "task-title-container");
  titleContainer.appendTo(taskContainer.element);
  //title
  const title = new DOMCreation("div", "task-title", task.title);
  title.element.setAttribute("id", `Task-Title-${taskID}`);
  title.appendTo(titleContainer.element);
  //Add Edit Button
  addEditTaskBtn(titleContainer.element, taskID);
  //description
  const description = new DOMCreation(
    "p",
    "task-description",
    task.description
  );
  description.element.setAttribute("id", `Task-Description-${taskID}`);
  description.appendTo(taskContainer.element);
  //due date
  const dueDate = new DOMCreation("p", "task-due", `Task Due: ${task.dueDate}`);
  dueDate.element.setAttribute("id", `Task-Due-${taskID}`);
  dueDate.appendTo(taskContainer.element);
  //priority
  const priority = new DOMCreation("p", "task-priority", task.priority);
  priority.element.setAttribute("id", `Task-Priority-${taskID}`);
  priority.appendTo(taskContainer.element);
}

function addEditTaskBtn(taskContainer, taskID) {
  const editBtn = new DOMCreation("img", "edit-task-btn");
  editBtn.element.src = editIcon;
  editBtn.appendTo(taskContainer);
  editBtn.element.addEventListener("click", function () {
    showEditTaskModal(taskID);
  });
}

function showEditTaskModal(taskID) {
  editTaskDialog.showModal();
  const loadedTask = LocalStorage.retrieveItem(taskID);
  localStorage.setItem("selectedTask", taskID);

  editTaskForm.elements["task-title"].value = loadedTask.title;
  editTaskForm.elements["task-description"].value = loadedTask.description;
  editTaskForm.elements["task-due"].value = loadedTask.dueDate;
  editTaskForm.elements["task-priority"].value = loadedTask.priority;
}

export function saveEditedTask() {
  const taskID = localStorage.getItem("selectedTask");
  const loadedTask = LocalStorage.retrieveItem(taskID);
  //Save new task details
  loadedTask.title = editTaskForm.elements["task-title"].value;
  loadedTask.description = editTaskForm.elements["task-description"].value;
  loadedTask.dueDate = editTaskForm.elements["task-due"].value;
  loadedTask.priority = editTaskForm.elements["task-priority"].value;
  LocalStorage.saveItem(taskID, loadedTask);

  updateTaskDOM(taskID);
}

function updateTaskDOM(taskID) {
  const loadedTask = LocalStorage.retrieveItem(taskID);

  const title = document.querySelector(`#Task-Title-${taskID}`);
  title.textContent = loadedTask.title;

  const desc = document.querySelector(`#Task-Description-${taskID}`);
  desc.textContent = loadedTask.description;

  const dueDate = document.querySelector(`#Task-Due-${taskID}`);
  dueDate.textContent = loadedTask.dueDate;

  const priority = document.querySelector(`#Task-Priority-${taskID}`);
  priority.textContent = loadedTask.priority;
  //set color based on priority
  const taskContainer = document.querySelector(`#Task-Container-${taskID}`);
  switch (loadedTask.priority) {
    case "Low":
      taskContainer.style.backgroundColor = "#ADD8E6";
      break;
    case "Medium":
      taskContainer.style.backgroundColor = "#FFFF00";
      break;
    case "High":
      taskContainer.style.backgroundColor = "#FF0000";
  }
}
