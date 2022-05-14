import coinToss, { randomLimiterFor, randomOutOfTen } from "./coinToss";

export const randomPositionsFor = (typeOfShip) => {
  let coordsToSet = []; // <-- this is where we're storing all the coords we'll be returning
  let shipLength;
  let horizontalNumberArray = [
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
  let verticalLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  let orientation = coinToss();
  //   let ySpot = randomOutOfTen();
  //   let xSpot = randomOutOfTen();
  // let verticalCoord = verticalLetterArray[ySpot];
  // let horizontalCoord = horizontalNumberArray[xSpot];

  let ySpot;
  let xSpot;

  switch (typeOfShip) {
    case "destroyer":
      shipLength = 1;
      break;

    case "submarine":
      shipLength = 2;
      break;

    case "cruiser":
      shipLength = 3;
      break;

    case "battleship":
      shipLength = 4;
      break;

    case "carrier":
      shipLength = 5;
      break;

    default:
      break;
  }

  //Depending on its orientation, if horizontal, just add number on iteration. If vertical, iterate through the letters array.
  if (orientation == "horizontal") {
    //The limiter allows us to make sure we're not placing spots outside of the board
    xSpot = randomLimiterFor(typeOfShip);
    ySpot = randomOutOfTen();

    for (let i = 0; i < shipLength; i++) {
      let newShipCoordinate =
        verticalLetterArray[ySpot] + horizontalNumberArray[xSpot];
      coordsToSet.push(newShipCoordinate);
      //get sibling IDs here, not the DOM.
      xSpot++;
    }
  }

  if (orientation == "vertical") {
    //The limiter allows us to make sure we're not placing spots outside of the board
    ySpot = randomLimiterFor(typeOfShip);
    xSpot = randomOutOfTen();

    for (let i = 0; i < shipLength; i++) {
      let newShipCoordinate =
        verticalLetterArray[ySpot] + horizontalNumberArray[xSpot];
      coordsToSet.push(newShipCoordinate);
      ySpot++;
    }
  }

  return coordsToSet;
};

//
//
//we don't need the following here because we're checking for this in Gameboard, in generateComputerPositionsFor()
//     while (previou.includes(computerShot)) {
//       xMove = Math.floor(Math.random() * 10);
//       yMove = Math.floor(Math.random() * 10);
//       computerShot = vertical[yMove] + horizontal[xMove];
//     }
//     previou.push(computerShot); // <-- always adds a new position;
//     return computerShot;
//     // return cpuMoves[cpuMoves.length - 1];
//   };
