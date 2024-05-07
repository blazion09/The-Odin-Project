import { projectList } from "../..";
import { LocalStorage } from "./local-storage-logic";

export function loadProject() {
  const allProject = LocalStorage.retrieveItem(projectList);
  console.log(allProject);
}
