import getNextLengthToBePlaced from "./getNextLengthToBePlaced";
import lastPaintedCoords from "./lastPaintedCoords";

export default function paintLength(imageIdee, squareIdee, orientation) {
  if (orientation === undefined) orientation = "horizontal";
  let theImage = document.getElementById(imageIdee);
  if (theImage.classList.contains("rotate-vertical")) orientation = "vertical";
  if (
    theImage.id === "battleship" &&
    !theImage.classList.contains("rotate-vertical")
  )
    orientation = "vertical";
  if (
    theImage.id === "battleship" &&
    theImage.classList.contains("rotate-vertical")
  )
    orientation = "horizontal";

  let letterCells = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  if (orientation === "vertical") {
    console.log("orientation is " + orientation);

    let lengthToFill = getNextLengthToBePlaced(imageIdee);
    let num = Number(squareIdee.substring(1));
    let theLetter = squareIdee.charAt(0);
    let indexOfLetter = letterCells.indexOf(theLetter);

    //do not proceed if vertical overflow

    if (indexOfLetter + lengthToFill > 10) {
      console.log(indexOfLetter + "would overflow the map, cannot place there");

      return false;
    }

    for (let i = 0; i < lengthToFill; i++) {
      let letter = letterCells[indexOfLetter];
      let coordData = letter + num;
      let coordToPaint = document.getElementById(coordData);
      console.log(coordData);
      console.log(coordToPaint);
      let classToAdd = "positioned-" + imageIdee;
      coordToPaint.classList.add(classToAdd);
      coordToPaint.classList.toggle("on-board");
      lastPaintedCoords(coordData);
      indexOfLetter++; // <--- A vertical line
    }
  }

  ///horizontal positioning

  if (orientation === "horizontal") {
    let lengthToFill = getNextLengthToBePlaced(imageIdee);
    let letter = squareIdee.charAt(0);
    let num = Number(squareIdee.substring(1));

    //do not proceed if horizontal overflow

    if (num + lengthToFill - 1 > 10) {
      console.log(`${num + lengthToFill} is larget than 10`);
      return false;
    }

    for (let i = 0; i < lengthToFill; i++) {
      let coordData = letter + num;
      let coordToPaint = document.getElementById(coordData);
      let classToAdd = "positioned-" + imageIdee;
      coordToPaint.classList.add(classToAdd);
      coordToPaint.classList.toggle("on-board");

      lastPaintedCoords(coordData);
      num++; // <-- a horizontal line
    }
  }
}
