export class LocalStorage {
  static saveProject(projectName) {
    localStorage.setItem(projectName, JSON.stringify(project));
  }

  static loadProject(projectName) {
    JSON.parse(localStorage.getItem(projectName));
  }

  static deleteProject(project) {
    localStorage.removeItem(project.title);
  }

  //add to both local storage and project property
  static addTask(project, task) {
    project.task[task.timeStamp] = task;
    this.saveProject(project);
  }

  //remove both local storage and project property
  static deleteTask(project, task) {
    delete project.task[task.timeStamp];
    this.saveProject(project);
  }

  static editProjectTitle(project, newTitle) {
    localStorage.removeItem(project.title);
    project.title = newTitle;
    this.saveProject(project);
  }

  static editTaskTitle(task, newTitle) {}
}
