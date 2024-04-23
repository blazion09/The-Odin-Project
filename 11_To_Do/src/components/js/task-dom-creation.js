import { LocalStorage } from "./local-storage-logic";
import { TaskDetails } from "./task-creation";
import { projectDIV, taskDialog, taskForm } from "../..";
import { DOMCreation } from "./dom-creation";

export function addTaskModalOpener(projectName) {
  const openModal = document.querySelector(
    `.${projectName.replace(/ /g, "")}-btn`
  );
  openModal.addEventListener("click", function () {
    taskDialog.showModal();
  });
}

export function saveTask(projectObj) {
  const title = taskForm.elements["task-title"].value;
  const description = taskForm.elements["task-description"].value;
  const dueDate = taskForm.elements["task-due"].value;
  const priorityLevel = taskForm.elements["task-priority"].value;

  const task = new TaskDetails(title, description, dueDate, priorityLevel);
  LocalStorage.addTask(projectObj, task);
  createTaskDOM(title);
  taskDialog.close();
}

function createTaskDOM(title) {
  const taskTitle = new DOMCreation("div", title, title);
  taskTitle.appendTo(projectDIV);
}
