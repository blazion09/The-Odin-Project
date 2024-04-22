import "./css/reset.css";
import "./css/style.css";
import { TaskDetails } from "./components/task-creation";

const list = [];
const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");

task3.addTaskToArray(list);
task3.title = "Title has Changed";

console.dir(list);
console.dir(task3);
