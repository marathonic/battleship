import coinToss, { randomLimiterFor, randomOutOfTen } from "./coinToss";

export const randomPositionsFor = (typeOfShip) => {
  let coordsToSet = []; // <-- this stores all the coords that will be returned
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

  //Depending on its orientation, add value on iteration.
  //The limiters allow us to make sure we're not placing spots outside of the board
  if (orientation == "horizontal") {
    xSpot = randomLimiterFor(typeOfShip);
    ySpot = randomOutOfTen();

    for (let i = 0; i < shipLength; i++) {
      let newShipCoordinate =
        verticalLetterArray[ySpot] + horizontalNumberArray[xSpot];
      coordsToSet.push(newShipCoordinate);
      xSpot++;
    }
  }

  if (orientation == "vertical") {
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
