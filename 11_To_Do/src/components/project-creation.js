export class Project {
  constructor(title, description) {
    this._title = title;
    this._description = description;
    this._task = {};
  }

  set title(newTitle) {
    this._title = newTitle;
  }
  set description(newDescription) {
    this._description = newDescription;
  }
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get task() {
    return this._task;
  }

  addTask(task) {
    this._task[task.timeStamp] = task;
  }

  deleteTask(task) {
    delete this._task[task.timeStamp];
  }

  saveToLocalStorage() {
    localStorage.setItem(this._title, JSON.stringify(this));
  }
  deleteFromLocalStorage() {
    localStorage.removeItem(this._title);
  }
}
