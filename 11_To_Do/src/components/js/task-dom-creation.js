import { LocalStorage } from "./local-storage-logic";
import { TaskDetails } from "./task-creation";

export function taskModal(projectName) {
  const taskDialog = document.querySelector(".task-dialog");
  taskDialog.showModal();

  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", saveTask);
}

function saveTask(event) {
  event.preventDefault();
  const taskDialog = document.querySelector(".task-dialog");
  taskDialog.showModal();

  const taskForm = document.getElementById("task-form");

  const title = taskForm.elements["task-title"].value;
  const description = taskForm.elements["task-description"].value;
  const dueDate = taskForm.elements["task-due"].value;
  const priorityLevel = taskForm.elements["task-priority"].value;

  const task = new TaskDetails(title, description, dueDate, priorityLevel);
  console.log("Before:");
  console.log(projectName.task);
  LocalStorage.addTask(projectName, task);
  console.log("After:");
  console.log(projectName.task);
  taskDialog.close();
}
