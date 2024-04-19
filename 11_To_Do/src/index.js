import "./css/reset.css";
import "./css/style.css";

class CreateTask {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.timestamp = Date.now();
  }

  addDueDate(DD, MM) {
    this.dueDate = `Due on ${DD}/${MM}`;
  }

  addPriority(priorityLevel) {
    this.priorityLevel = priorityLevel;
  }
}

const task1 = new CreateTask("Task 1", "Description 1");

task1.addDueDate("20", "04");
task1.addPriority("High");
console.dir(task1);
