import { Ship } from "./Ship";
import component from "./component";
import coinToss, { randomOutOfTen } from "./coinToss";
import { randomPositionsFor } from "./randomPositionsFor";

//<------- How to place ships
//Needs to get input from the DOM.
//addEventListener('click') for each square in the battlefield.
// send the id of the clicked square to placeShip()

export function Gameboard() {
  let shipsHere = []; // <-- contains the coordinate locations on which ships have been placed
  let spotsTaken = []; // <-- does the same as shipsHere, but for computer (???)
  let missedShots = [];
  let sunkShips = [];
  let ship;
  let shipsObject = {};
  let targetShip;
  let allCoordinatesOnMap = [];
  let testLocationArray = ["A1", "A8", "A9"]; // <-------- WE'RE GOING TO SEND THE PLACEMENT COORDINATES THE USER CHOOSES TO AN ARRAY, JUST LIKE THIS.
  let registeredHitsOnHuman = [];
  //For human boards:

  return {
    placeShip(shipModel, [...coordies]) {
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

    //OK LET'S THINK ABOUT THIS:
    //Over here, we don't actually need to write all of the functionality in here.
    //What we want in here is to just check if the result of running a function is returning us a valid value.
    //In this case, a valid value would need to pass 2 conditions:
    //1) The returned coordinates are not being used by any other ships.
    //2) The returned coordinates are not outside of the map... <-- Is that appropriate for here?

    registerComputerPositionsFor(typeOfShip) {
      // let ship; you already have typeOfShip.
      // if we need the length, we can get it from the length of the array
      let newPositionsToPlace = randomPositionsFor(typeOfShip);

      // while (spotsTaken.includes(newPositionsToPlace))
      // <-- while newPositionsToPlace includes ANY coord that exists in spotsTaken, re-run the code
      if (spotsTaken.length > 0) {
        spotsTaken.forEach((arrai) => {
          while (newPositionsToPlace.some((val) => arrai.indexOf(val) !== -1)) {
            newPositionsToPlace = randomPositionsFor(typeOfShip);
          }
          // newPositionsToPlace.forEach((positionInArr) => {

          // if(arrai.includes())
        });

        // for (let i = 0; i < newPositionsToPlace.length; i++) {
        //   //spotsTaken is an array of arrays, therefore we should be able to access each array:
        //   let currentArrayOfSpotsTaken = [...spotsTaken[i]];
        //   console.log(currentArrayOfSpotsTaken);
        //   let currentNewPosition = newPositionsToPlace[i];
        //   while (currentArrayOfSpotsTaken.includes(currentNewPosition)) {
        //     currentNewPosition = randomPositionsFor(typeOfShip);
        //   }
        //   // while(currentArrayOfSpotsTaken.some((coord) => currentNewPosition.indexOf(coord) !== -1)){
        //   //   newPositionsToPlace = randomPositionsFor(typeOfShip);
        //   // }
        // }
      }

      // while (
      //   // switcharoo'd order, testing placing unique positions
      //   // spotsTaken.some((coord) => newPositionsToPlace.indexOf(coord) !== -1)
      //   newPositionsToPlace.some((coord) => spotsTaken.indexOf(coord) !== -1)
      //   //Update: Still sharing coords between ships. Try another way
      // ) {
      //   newPositionsToPlace = randomPositionsFor(typeOfShip);
      // }
      spotsTaken.push(newPositionsToPlace);
      // shipsHere.push(newPositionsToPlace);
      console.log(spotsTaken);
      return newPositionsToPlace;
    },
    receiveAttack(coordinates) {
      try {
        let actualCoordinateDiv = document.querySelector("#" + coordinates);
        if (actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-hit");
        }
        if (!actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-miss");
        }
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          // console.log("cant hit same position twice");
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);
          //currentShipDamage means the damage that's been inflicted upon the current ship

          if (sunkShips.length === 5) {
            console.log("THE GAME IS OVER, ALL SHIPS ARE SUNK DUDE");
            alert("ALL SHIPS SUNK");
            return false;
            return "THE GAME IS OVER, ALL SHIPS ARE SUNK";
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            console.log(`Direct hit! ${targetShip.getName()} has been sunk`);
            return true;
            return `${targetShip.getName()} has been sunk`;
          }
          let shipAttacked = document.querySelector(
            "#" + coordinates + ".squares-computer"
          );
          console.log(
            `${targetShip.getName()} has been hit. HP Reamining: ${targetShip.getLength()}`
          );
          return true;
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          console.log("MISS");
          return false;
          return "miss"; // ('miss' for testing purposes, change to false!)<-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
    computerReceivesAttack(coordinates) {
      try {
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          // console.log("cant hit same position twice");
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);
          //currentShipDamage means the damage that's been inflicted upon the current ship

          // setTimeout(() => {
          //   let currentShipDamage = targetShip.damageReport();
          //   for (let i = 0; i < currentShipDamage.length; i++) {
          //     let currentID = currentShipDamage[i];
          //     let selectComputersID = document.querySelector(
          //       "#" + currentID + ".squares-computer"
          //     );
          // selectComputersID.classList.add("position-hit");
          // }
          // }, 230);
          if (sunkShips.length === 5) {
            console.log("THE GAME IS OVER, ALL SHIPS ARE SUNK DUDE");
            alert("ALL SHIPS SUNK");
            return false;
            return "THE GAME IS OVER, ALL SHIPS ARE SUNK";
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            console.log(`Direct hit! ${targetShip.getName()} has been sunk`);
            return true;
            return `${targetShip.getName()} has been sunk`;
          }
          let shipAttacked = document.querySelector(
            "#" + coordinates + ".squares-computer"
          );
          // if (!shipAttacked.classList.contains("on-board")) {
          //   //if this is running, that means this is a human ship
          //   // how can we make sure it's not also a computer ship?
          //   shipAttacked.classList.add("hit-position-human");
          //   registeredHitsOnHuman.push(coordinates);
          // }
          console.log(
            `${targetShip.getName()} has been hit. HP Reamining: ${targetShip.getLength()}`
          );
          return true;
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          console.log("MISS");
          return false;
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
      if (sunkShips.length === 5) {
        alert("all ships sunk");
        return true;
      }
      // return sunkShips.length === shipsHere.length ? true : false;
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

    //reportAttackedSquare will be called by human only
    // reportAttackedSquare() {

    // }

    //reportClickedSquare will be called by computer only

    reportClickedSquare() {
      let board2 = document.querySelector(".board2");
      board2.addEventListener("click", function (e) {
        if (e.target.classList == "squares-computer") {
          let allCoordinatesOnMapArray = allCoordinatesOnMap; // <-- why am I storing a reference here?
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
        // <--- We're still running insde the eventListener for the computer board
        // <-- We're giving an ample 2 sec timeout for the computer to play its turn, and then
        // <-- by the time the timeout runs, the newly hit coordinate will have been added to the array
        setTimeout(() => {
          let alltheGoddarnSquaresAgain =
            document.querySelectorAll(".squares-computer");
          alltheGoddarnSquaresAgain.forEach((sq) => {
            if (missedShots.includes(sq.id)) {
              sq.classList.add("missed-shot");
              console.log(
                "This message means the missedShots array in human gameboard does include the coordinate"
              );
            }
          });
        }, 100);
      });
    },
    // reportComputersAttacksOnBoard() {
    //   let boardGetsClicked = document.querySelector(".board2");
    //   boardGetsClicked.addEventListener("click", function () {
    //     //now let's create the one for the human board
    //     setTimeout(() => {
    //       let humanSquares = document.querySelectorAll(".squares");
    //       humanSquares.forEach((sq) => {
    //         if (missedShots.includes(sq.id)) {
    //           sq.classList.add("missed-shot-from-computer");
    //         }
    //         if (sq.classList.contains("allied-ship-location")) {
    //           sq.classList.add("coloured-in-from-computer");
    //         }
    //       });
    //     }, 300);
    //   });
    // },
    // reportAllHumanPositionsAttacked() {
    //   let alltheGoddarnSquaresAgain = document.querySelectorAll(".squares");
    //   alltheGoddarnSquaresAgain.forEach((sq) => {
    //     if (missedShots.includes(sq)) {
    //       sq.classList.add("missed-shot");
    //     }
    //   });
    // },

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
            return true;
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
    showAlliedShips() {
      let alliedBattlefield = document.querySelectorAll(".squares");
      alliedBattlefield.forEach((sq) => {
        if (testLocationArray.includes(sq.id)) {
          sq.classList.add("allied-ship-location");
        }
      });
    },

    // At the same time,, or later, immediately apply a CSS class to the square in the DOM.
  };
}
