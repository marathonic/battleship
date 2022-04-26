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

  //   for (let i = 0; i < 100; i++) {
  //     let square = document.createElement("div");
  //     square.classList.add("squares");
  //     board1.appendChild(square);
  //   }

  //TESTING A,B,C...

  let constructHorizontal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let constructVertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0; i < constructHorizontal.length; i++) {
    let currentLetter = constructVertical[i]; // <--- get a letter (example: A)
    //Then, loop through the numbers array 10 times,
    for (let j = 1; j <= 10; j++) {
      let square = document.createElement("div");
      square.id = currentLetter + constructHorizontal[j]; // making its id equal the current letter + a number, up to number 10. Example: A7
      square.classList.add("squares");
      board1.appendChild(square);
    }
  }
  //   constructVertical.forEach((boardLetter) => {

  //   });

  board1.addEventListener("click", function (e) {
    console.log(e.target.id);
  });

  //   for (let i = 0; i < 10; i++) {
  //     let square = document.createElement("div");
  //     square.id = "A" + i;
  //     square.classList.add("squares");
  //     board1.classList.add(square);
  //   }

  background.appendChild(title);
  background.appendChild(board1);
  element.appendChild(background);

  return element;
}
