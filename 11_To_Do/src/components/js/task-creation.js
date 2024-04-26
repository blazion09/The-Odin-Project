import { editTaskDialog, editTaskForm, taskDialog, taskForm } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";
export class TaskDetails {
  constructor(title, description, dueDate, priorityLevel) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priorityLevel;
  }
}

export function addTaskBtn(projectID) {
  const btn = new DOMCreation("button", "add-task-btn", "Add Task");
  const projectDOM = document.querySelector(`.Project-${projectID}`);
  btn.element.addEventListener("click", function () {
    taskDialog.showModal();
    taskForm.reset();
    localStorage.setItem("selectedProject", projectID);
  });
  btn.appendTo(projectDOM);
}

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
  const projectDOM = document.querySelector(`.Project-${projectID}`);
  taskContainer.appendTo(projectDOM);
  //title
  const title = new DOMCreation("p", "task-title", task.title);
  title.appendTo(taskContainer.element);
  //edit button
  addEditTaskBtn(title.element, taskID);
  //description
  const description = new DOMCreation(
    "p",
    "task-description",
    task.description
  );
  description.appendTo(taskContainer.element);
  //due date
  const dueDate = new DOMCreation("p", "task-due", task.dueDate);
  dueDate.appendTo(taskContainer.element);
  //priority
  const priority = new DOMCreation("p", "task-priority", task.priority);
  priority.appendTo(taskContainer.element);
}

function addEditTaskBtn(taskContainer, taskID) {
  const editBtn = new DOMCreation("button", "edit-task", "Edit Task");
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
