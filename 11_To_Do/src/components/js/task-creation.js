import { editTaskDialog, editTaskForm, taskDialog, taskForm } from "../..";
import { DOMCreation } from "./dom-creation";
import { LocalStorage } from "./local-storage-logic";
import { formatDistanceToNowStrict } from "date-fns";

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
  //task-basic-view
  const basicView = new DOMCreation("div", "task-basic-view");
  basicView.appendTo(taskContainer.element);
  //task-title-container
  const titleContainer = new DOMCreation("div", "task-title-container");
  titleContainer.appendTo(basicView.element);
  //task-action-container
  const actionContainer = new DOMCreation("div", "task-action-container");
  actionContainer.appendTo(basicView.element);
  //title
  const title = new DOMCreation("div", "task-title", task.title);
  title.element.setAttribute("id", `Task-Title-${taskID}`);
  title.appendTo(titleContainer.element);
  //Add due until
  const dueUntil = formatDistanceToNowStrict(new Date(task.dueDate), {
    addSuffix: true,
  });
  const dueDOM = new DOMCreation("div", "due-until", `Due ${dueUntil}`);
  dueDOM.element.setAttribute("id", `Task-Due-Until-${taskID}`);
  dueDOM.appendTo(actionContainer.element);
  //Add Edit Button
  addEditTaskBtn(actionContainer.element, taskID);
  //add task delete button
  const deleteBtn = new DOMCreation("button", "task-delete-btn", "Delete Task");
  deleteBtn.element.addEventListener("click", () => {
    taskContainer.element.remove();
    localStorage.removeItem(taskID);
  });
  deleteBtn.appendTo(actionContainer.element);
  addTaskCardListener(taskID);
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
  if (document.querySelector(`#Task-Due-${taskID}`) != null) {
    const dueDate = document.querySelector(`#Task-Due-${taskID}`);
    dueDate.textContent = `Due Date: ${loadedTask.dueDate}`;
  }
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
  //update task description
  if (document.querySelector(`#Task-Description-${taskID}`) != null) {
    document.querySelector(`#Task-Description-${taskID}`).textContent =
      loadedTask.description;
  }
  //update priority
  if (document.querySelector(`#Task-Priority-${taskID}`) != null) {
    document.querySelector(
      `#Task-Priority-${taskID}`
    ).textContent = `Task-Priority: ${loadedTask.priority}`;
  }
  //update due until
  const dueUntil = formatDistanceToNowStrict(new Date(loadedTask.dueDate), {
    addSuffix: true,
  });
  const dueDOM = document.querySelector(`#Task-Due-Until-${taskID}`);
  dueDOM.textContent = `Due ${dueUntil}`;
}

function addTaskCardListener(taskID) {
  const task = document.querySelector(`#Task-Container-${taskID}`);
  task.addEventListener("click", (event) => {
    const activeTask = LocalStorage.retrieveItem(taskID);
    if (
      event.target.classList.contains("task-delete-btn") ||
      event.target.classList.contains("edit-task-btn")
    ) {
      event.stopPropagation();
    } else if (document.querySelector(`#Task-Active-${taskID}`) == null) {
      //show task details
      const detailContainer = new DOMCreation("div", "task-detail-container");
      detailContainer.appendTo(task);
      detailContainer.element.setAttribute("id", `Task-Active-${taskID}`);
      //description
      const description = new DOMCreation(
        "p",
        "task-description",
        activeTask.description
      );
      description.element.setAttribute("id", `Task-Description-${taskID}`);
      description.appendTo(detailContainer.element);
      //due date
      const dueDate = new DOMCreation(
        "p",
        "task-due",
        `Due Date: ${activeTask.dueDate}`
      );
      dueDate.element.setAttribute("id", `Task-Due-${taskID}`);
      dueDate.appendTo(detailContainer.element);
      //priority
      const priority = new DOMCreation(
        "p",
        "task-priority",
        `Task-Priority: ${activeTask.priority}`
      );
      priority.element.setAttribute("id", `Task-Priority-${taskID}`);
      priority.appendTo(detailContainer.element);
    } else {
      document.querySelector(`#Task-Active-${taskID}`).remove();
    }
  });
}
