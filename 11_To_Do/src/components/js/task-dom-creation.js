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
    localStorage.setItem("selectedProject", projectName);
  });
}

export function saveTask() {
  const title = taskForm.elements["task-title"].value;
  const description = taskForm.elements["task-description"].value;
  const dueDate = taskForm.elements["task-due"].value;
  const priorityLevel = taskForm.elements["task-priority"].value;

  const task = new TaskDetails(title, description, dueDate, priorityLevel);
  let x = localStorage.getItem("selectedProject");
  let selectedProject = JSON.parse(localStorage.getItem(x));
  selectedProject._task[task.timeStamp] = task;
  localStorage.setItem(x, JSON.stringify(selectedProject));

  createTaskDOM(title, task.timeStamp + "");
}

function createTaskDOM(title, taskTimestamp) {
  const taskTitle = new DOMCreation("div", title, title);
  taskTitle.appendTo(projectDIV);

  const editBtn = new DOMCreation("button", taskTimestamp, "Edit Task");
  editBtn.appendTo(projectDIV);
  editBtn.element.addEventListener("click", function () {
    taskDialog.showModal();
    localStorage.setItem("selectedTask", taskTimestamp);
  });
}
