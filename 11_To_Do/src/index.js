import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";
import { Project } from "./components/project-creation";
import { LocalStorage } from "./components/local-storage-logic";

//FOR DEVELOPMENT PROCESS
localStorage.clear();
//

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
