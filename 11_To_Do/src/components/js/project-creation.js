export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.task = {};
    this.timeStamp = Date.now();
  }

  addTask(task) {
    this._task[task.timeStamp] = task;
  }

  deleteTask(task) {
    delete this._task[task.timeStamp];
  }
}
