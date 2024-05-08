import { projectList } from "../..";
import { LocalStorage } from "./local-storage-logic";
import { addProjectDOM } from "./project-creation";

export function loadProject() {
  const savedProject = LocalStorage.retrieveItem("savedProject");
  for (let key in savedProject) {
    addProjectDOM(key, savedProject[key]);
    projectList.push(key);
  }
}
