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

function editTask(object, key, value) {
  if (key in object) {
    object[key] = value;
  } else {
    console.error("Key not available");
  }
}

class Task {
  constructor(title, description, dueDate, priorityLevel) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priorityLevel;
  }

  set title(newTitle) {
    this._title = newTitle;
  }
  set description(newDescription) {
    this._description = newDescription;
  }
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }
  set priorityLevel(newPriorityLevel) {
    this._priority = newPriorityLevel;
  }

  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get dueDate() {
    return this._dueDate;
  }
  get priorityLevel() {
    return this._priority;
  }
}

const task3 = new Task("Task 3", "Description 3", "04/12", "High");
task3.title = "Task4";

console.dir(task3);

// const task1 = new CreateTask("Task 1", "Description 1");

// task1.addDueDate("20", "04");
// task1.addPriority("High");

// editTask(task1, "title", "Title2");

// console.dir(task1);
