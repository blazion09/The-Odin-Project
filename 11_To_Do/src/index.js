import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";

//FOR DEVELOPMENT PROCESS
localStorage.clear();

function createTask() {
  const task4 = new TaskDetails("Task 4", "Description 4", "04/14", "Medium");
  task4.timeStamp = "1234567890";
  task4.addTaskToLocalStorage();
  const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");
  task3.addTaskToLocalStorage();
}

createTask();
