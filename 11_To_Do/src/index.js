import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";

//FOR DEVELOPMENT PROCESS
localStorage.clear();

const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");
alert("Creating Task 4");
const task4 = new TaskDetails("Task 4", "Description 4", "04/14", "Medium");

task3.title = "Title has Changed";

console.dir(task3);
task3.addTaskToLocalStorage();
task4.addTaskToLocalStorage();
task3.removeTaskFromLocalStorage();
