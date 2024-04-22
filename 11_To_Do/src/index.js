import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";
import { Project } from "./components/project-creation";
import { LocalStorage } from "./components/local-storage-logic";

//FOR DEVELOPMENT PROCESS
localStorage.clear();

function createTask() {
  const task4 = new TaskDetails("Task 4", "Description 4", "04/14", "Medium");
  task4.timeStamp = "1234567890";
  task4.addTaskToLocalStorage();
  const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");
  task3.addTaskToLocalStorage();
}

const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");
const task4 = new TaskDetails("Task 4", "Description 4", "04/14", "Medium");
task4.timeStamp = "1234567890";

const project1 = new Project("Project 1", "Description 1");
const project2 = new Project("Project 2", "Description 2");

LocalStorage.addTask(project2, task3);
LocalStorage.addTask(project1, task3);
LocalStorage.addTask(project2, task4);
LocalStorage.addTask(project1, task4);
