import { Ship } from "./Ship";

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
  };
}
