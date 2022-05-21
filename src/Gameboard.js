import { Ship } from "./Ship";
import { randomPositionsFor } from "./randomPositionsFor";
import onGameOver from "./onGameOver";

export function Gameboard() {
  let shipsHere = []; // <-- contains the coordinate locations on which ships have been placed
  let spotsTaken = []; // <-- does the same as shipsHere, but for computer (???)
  let missedShots = [];
  let sunkShips = [];
  let ship;
  let shipsObject = {};
  let targetShip;
  let allCoordinatesOnMap = [];
  let registeredHitsOnHuman = [];

  return {
    placeShip(shipModel, [...coordies]) {
      ship = Ship(shipModel);
      let coordinates = coordies;
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

    registerComputerPositionsFor(typeOfShip) {
      let newPositionsToPlace = randomPositionsFor(typeOfShip);

      // <-- while newPositionsToPlace includes ANY coord that exists in spotsTaken, re-run the code
      if (spotsTaken.length > 0) {
        spotsTaken.forEach((arrai) => {
          while (newPositionsToPlace.some((val) => arrai.indexOf(val) !== -1)) {
            newPositionsToPlace = randomPositionsFor(typeOfShip);
          }
        });
      }

      spotsTaken.push(newPositionsToPlace);
      return newPositionsToPlace;
    },
    receiveAttack(coordinates) {
      try {
        let actualCoordinateDiv = document.querySelector("#" + coordinates);
        if (actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-hit");
          onGameOver();
        }
        if (!actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-miss");
        }
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);

          if (sunkShips.length === 5) {
            alert("ALL SHIPS SUNK");
            return false;
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }

          return true;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    computerReceivesAttack(coordinates) {
      try {
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);
          if (sunkShips.length === 5) {
            return false;
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }

          return true;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    missedHere() {
      return missedShots;
    },
    reportSunk() {
      if (sunkShips.length === 5) {
        alert("all ships sunk");
        return true;
      }
    },
    hoverLength() {
      switch (shipsHere.length) {
        case 0:
          return 2; // <-- no ships have been placed, current ship is a destroyer (2 squares)

        default:
          break;
      }
    },

    reportClickedSquare() {
      let board2 = document.querySelector(".board2");
      board2.addEventListener("click", function (e) {
        if (e.target.classList == "squares-computer") {
          let allCoordinatesOnMapArray = allCoordinatesOnMap; // <-- why am I storing a reference here?
          allCoordinatesOnMapArray.forEach((arr) => {
            if (arr.includes(e.target.id)) {
              let matchedSquare = e.target;
              matchedSquare.classList.add("coloured-in");
              onGameOver();
            }
          });
        }
        // <-- add event to callback queue; by runtime, the newly hit coordinate will have been added to the array
        setTimeout(() => {
          let alltheGoddarnSquaresAgain =
            document.querySelectorAll(".squares-computer");
          alltheGoddarnSquaresAgain.forEach((sq) => {
            if (missedShots.includes(sq.id)) {
              sq.classList.add("missed-shot");
            }
          });
        }, 100);
      });
    },

    //send that id to ReceiveAttacck
    newReceiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, hit() => false
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; //
          targetShip.hit(coordinates);
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    getAllCoordinatesOnMap() {
      console.log(
        "MESSAGE FROM COMMANDER DATA: \n Commander, Lt. Commander LaForge has repurposed the corbo-handwavium drive to reveal enemy coordinates..."
      );
      console.table(allCoordinatesOnMap);
    },
  };
}
