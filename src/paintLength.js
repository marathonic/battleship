import getNextLengthToBePlaced from "./getNextLengthToBePlaced";

//we had to rename getLengthOf() back to getNextLengthToBePlaced() because errors started popping up, but it's fine now. It's fine now.

export default function paintLength(imageIdee, squareIdee, orientation) {
  // add a parameter: orientation. <-- if set to vertical, loop over
  if (orientation === undefined) orientation = "horizontal";

  if (orientation === "vertical") {
    console.log("orientation is " + orientation);

    let letterCells = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let lengthToFill = getNextLengthToBePlaced(imageIdee);
    let num = Number(squareIdee.substring(1)); // <-- store the number
    let theLetter = squareIdee.charAt(0); // <-- store the letter
    let indexOfLetter = letterCells.indexOf(theLetter);
    let letter = letterCells[indexOfLetter];
    //figure out what the last square is

    //do not proceed if vertical overflow

    if (indexOfLetter > 5) {
      console.log(
        indexOfLetter +
          "is higher than 5, would overflow the map, cannot place there"
      );

      return false;
    }

    //do not proceed if horizontal overflow

    if (num + lengthToFill > 10) {
      console.log(`${num + lengthToFill} is larget than 10`);
      return false;
    }

    for (let i = 0; i < lengthToFill; i++) {
      let coordData = letter + num;
      let coordToPaint = document.getElementById(coordData);
      console.log(coordData);
      console.log(coordToPaint);
      coordToPaint.classList.add("colour-this-square");
      indexOfLetter++; // <--- first loop: A1, second loop: B10, etc...a vertical line
    }
  }

  let lengthToFill = getNextLengthToBePlaced(imageIdee);
  let letter = squareIdee.charAt(0); // <-- store the letter
  let num = Number(squareIdee.substring(1)); // <-- store the number
  for (let i = 0; i < lengthToFill; i++) {
    let coordData = letter + num;
    let coordToPaint = document.getElementById(coordData);
    coordToPaint.classList.add("colour-this-square");
    num++; // <-- a horizontal line
  }

  //1) filter squareIdee to only return the number part of the coordinate, let's call it num.
  //2) but also record the letter in a variable, let's call the variable: 'letter'
  //3) loop over that number num (from step 1) using the length of the ship from lengthToFill
  //4) initialise an empty array, let's call it coordsToPaint. coordsToPaint = [];
  //5) our loop looks quite like this:
  //      let i = 0; i < lengthToFill; i++ { let coord = letter + num,
  //                                         coordsToPaint.push(coord),
  //                                         let coordToPaint = document.getElementById(coord),
  //                                         coordToPaint.classList.add('colour-this-square')
  //                                         num++ }
  // after the loop is over, something like --->  coordsToPaint.forEach(coord =>)
  //6) each time we run the loop, create a var that holds = letter + num, see above ^
  //7) each time we run the loop,

  //
  //figure out how to use lengthToFill to delimit a length len to style their backgrounds starting from squareIdee, up to squareIdee + (lengthToFill - 1 (to account for sqID) )
}