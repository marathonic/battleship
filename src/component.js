import printMe from "./print";

export default function component() {
  const element = document.createElement("div");
  const background = document.createElement("div");
  background.classList.add("bg");

  //Title
  const title = document.createElement("h1");
  title.innerHTML = "Battleship";
  const btn = document.createElement("button");

  //Board for human
  const board1 = document.createElement("div");
  board1.classList.add("boards");
  board1.classList.add("board1");
  for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    board1.appendChild(square);
  }

  background.appendChild(title);
  background.appendChild(board1);
  element.appendChild(background);

  return element;
}
