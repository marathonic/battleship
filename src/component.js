import clickBoardToPlaceShip from "./clickBoardToPlaceShip";
import { Gameboard } from "./Gameboard";
import printMe from "./print";

export default function component() {
  const element = document.createElement("div");
  const background = document.createElement("div");
  background.classList.add("bg");

  //Title
  const title = document.createElement("h1");
  title.innerHTML = "Starship";
  // const btn = document.createElement("button");

  //Get the coordinates with ships on them. shipsHere[] from variable
  // can we use the Game Module as an escrow for DOM and logic?
  //would it have to be async?
  //

  //before allowing players to place their ships, we'ŕe doing it manually.
  //let's just get shipsHere inside of here.
  //map through shipsHere to

  //   for (let i = 0; i < 100; i++) {
  //     let square = document.createElement("div");
  //     square.classList.add("squares");
  //     board1.appendChild(square);
  //   }

  //Board squares get IDs!

  //send that id to ReceiveAttacck

  // At the same time,, or later, immediately apply a CSS class to the square in the DOM.
  // When you send the ID pof the clicked square to the Gameboard, the Gameboard takes that id and marks that position as hit, which disables it from being hit again on the Gameboard.
  //When you hit a square two times, you get <false>. So when the Gameboard's receiveAttack function returns false, we need to let the DOM signal that.

  //DEV TEST: Console log the IDs when clicking a square

  // board1.addEventListener("click", function (e) {
  //   console.log(e.target.id);
  // });

  //Make a class for each ship to be placed. The hover length changes with each ship that's loaded to play next.
  //Then, a switch statement applies the appropriate class to each ship to be placed next
  //First ship (destroyer): Square hovered over + next sibling.
  //Last ship (carrier): Square hovered + next 5 siblings.

  //<----------------------------------------Let's pick it up here. We could try our idea from above.
  // board1.addEventListener("mouseover", function (e) {
  //   if (e.target.classList == "squares") {
  //     e.target.classList.add("hovered-ship");
  //     //<-- Take the return value of a function that reports the ship currently being placed
  //   }
  // });

  //Div to attach both gameboard and draggable images to
  const dragDiv = document.createElement("div");
  dragDiv.classList.add("drag-div");
  background.appendChild(title);
  background.appendChild(dragDiv);
  //let's try creating out rotate button here
  //
  element.appendChild(background);
  return element;
}
