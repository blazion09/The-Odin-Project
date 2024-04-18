import "./css/reset.css";
import "./css/style.css";

class CreateTask {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.timestamp = Date.now();
  }
}

const task1 = new CreateTask("Task 1", "Description 1", "High");
console.log(task1);

// function generateTask( ) {

// }
