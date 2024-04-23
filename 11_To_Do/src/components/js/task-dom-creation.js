import { LocalStorage } from "./local-storage-logic";
import { TaskDetails } from "./task-creation";
import { taskDialog, taskForm } from "../..";

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
  taskDialog.close();
}
