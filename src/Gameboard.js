import { Ship } from "./Ship";
import component from "./component";

//<------- How to place ships
//Needs to get input from the DOM.
//addEventListener('click') for each square in the battlefield.
// send the id of the clicked square to placeShip()

export function Gameboard() {
  let shipsHere = []; // <-- contains the coordinate locations on which ships have been placed
  let missedShots = [];
  let sunkShips = [];
  let ship;
  let shipsObject = {};
  let targetShip;
  let allCoordinatesOnMap = [];

  //For human boards:

  return {
    placeShip(shipModel, ...coordies) {
      ship = Ship(shipModel);
      let coordinates = coordies;
      // <-- register [{destroyer: 'A7'}, {anotherShip: 'coordinates'}, {etc...}];
      let obj = {};
      obj.ship = ship.getName();
      obj.damage = ship.damageReport();
      obj.hit = ship.hit;
      obj.isSunk = ship.isSunk;
      obj.getName = ship.getName;
      obj.getLength = ship.getLength;
      obj.positions = coordinates;
      shipsHere.push(obj); // <-- store each {ship:coord} inside [shipsHere];
      shipsObject[ship.getName()] = ship;
      allCoordinatesOnMap.push(coordies);
    },
    shipsPls() {
      return shipsHere;
    },
    shipsObjectPls() {
      return shipsObject;
    },
    receiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, hit() => false
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.
          targetShip.hit(coordinates);
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return `${targetShip.getName()} has been sunk`;
          }
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          return "miss"; // ('miss' for testing purposes, change to false!)<-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
    missedHere() {
      return missedShots;
    },
    reportSunk() {
      return sunkShips.length === shipsHere.length ? true : false;
    },
    hoverLength() {
      switch (shipsHere.length) {
        case 0:
          return 2; // <-- no ships have been placed, current ship is a destroyer (2 squares)
        // write some code to make the

        default:
          break;
      }
    },
    selectHoveredOverAsCoordies() {
      // <-- upon click, send to placeShips the IDs of the squares that have a class of hovered-over as the (...coordinates) parameter.
    },

    //ok just get the id of the clicked square.

    //Wait a minute. Why do we need to be able to attack our own board? We don't
    //The computer's attack process is as follows:
    //1) The computer sends a coordinate to be attacked on the human's board
    //2) The human's board receivesAttack to that coordinate

    //reportAttackedSquare will be called by computer only
    // reportAttackedSquare() {

    // }

    //reportClickedSquare will be called by human only

    reportClickedSquare() {
      let board2 = document.querySelector(".board2");
      board2.addEventListener("click", function (e) {
        if (e.target.classList == "squares-computer") {
          let allCoordinatesOnMapArray = allCoordinatesOnMap;
          allCoordinatesOnMapArray.forEach((arr) => {
            if (arr.includes(e.target.id)) {
              console.log("MATCH");
              let matchedSquare = e.target;
              matchedSquare.classList.add("coloured-in");
            }
          });
          // console.log(e.target.id);
          // return e.target.id;
        }
      });
    },
    //send that id to ReceiveAttacck
    newReceiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, hit() => false
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.
          targetShip.hit(coordinates);
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return `${targetShip.getName()} has been sunk`;
          }
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          return "miss"; // ('miss' for testing purposes, change to false!)<-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
    getAllCoordinatesOnMap() {
      console.log(allCoordinatesOnMap);
    },

    // At the same time,, or later, immediately apply a CSS class to the square in the DOM.
  };
}
