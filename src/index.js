// import { ShipClass } from "./ShipClass.js";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
