import newGamePlus from "./newGamePlus";

export default function generateComputerHologram() {
  //Board for computer
  const board2 = document.createElement("div");
  board2.classList.add("boards");
  board2.classList.add("board2");

  let constructHorizontalComputer = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  let constructVerticalComputer = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];
  for (let i = 0; i < constructHorizontalComputer.length; i++) {
    let currentLetter = constructVerticalComputer[i]; // <--- get a letter (example: A)
    //Then, loop through the numbers array 10 times,
    for (let j = 0; j < constructVerticalComputer.length; j++) {
      let square = document.createElement("div");
      square.id = currentLetter + constructHorizontalComputer[j]; // making its id equal the current letter + a number, up to number 10. Example: A7
      square.classList.add("squares-computer");
      // square.classList.add("invisible");
      board2.appendChild(square);
    }
  }
  let bg = document.querySelector(".bg");
  bg.appendChild(board2);
  newGamePlus();
}
