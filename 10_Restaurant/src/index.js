import "./css/reset.css";
import "./css/style.css";
import { home } from "./component/home.js";

let mainContent = document.querySelector("#content");

const Home = new home();
let homeTab = Home.createAndAppendHomeElement(mainContent);
Home.createAndAppendIntroText(homeTab);
