export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.task = {};
  }

  addTask(task) {
    this._task[task.timeStamp] = task;
  }

  deleteTask(task) {
    delete this._task[task.timeStamp];
  }
}
