import { taskDialog, taskForm } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";
export class TaskDetails {
  constructor(title, description, dueDate, priorityLevel) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priorityLevel;
  }

  set title(newTitle) {
    this._title = newTitle;
  }
  set description(newDescription) {
    this._description = newDescription;
  }
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }
  set priorityLevel(newPriorityLevel) {
    this._priority = newPriorityLevel;
  }

  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get dueDate() {
    return this._dueDate;
  }
  get priorityLevel() {
    return this._priority;
  }
}

export function addTaskBtn(projectID) {
  const btn = new DOMCreation("button", "add-task-btn", "Add Task");
  const projectDOM = document.querySelector(`.Project-${projectID}`);
  btn.element.addEventListener("click", function () {
    taskDialog.showModal();
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
  addTaskDOM();
}

function addTaskDOM() {
  const taskContainer = new DOMCreation("div", "task-container", "here ");
  const projectID = localStorage.getItem("selectedProject");
  const projectDOM = document.querySelector(`.Project-${projectID}`);
  taskContainer.appendTo(projectDOM);
}
