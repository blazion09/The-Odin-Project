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

class TaskDetails {
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

  addTaskToArray(array) {
    array.push(this);
  }

  removeTask(array) {}
}

const list = [];
const task3 = new TaskDetails("Task 3", "Description 3", "04/12", "High");

task3.addTaskToArray(list);
task3.title = "Title has Changed";

console.dir(list);
console.dir(task3);
