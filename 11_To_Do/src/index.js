import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";
import { Project } from "./components/project-creation";

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
console.log(task3.timeStamp);

const project1 = new Project("Project 1", "Description 1");

project1.addTask(task3);
project1.addTask(task4);
console.log(project1.task);
project1.saveToLocalStorage();

project1.deleteTask(task4);
console.log(project1.task);
project1.saveToLocalStorage();
