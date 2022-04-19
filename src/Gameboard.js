import { ShipFactory } from "./ShipFactory";

export function Gameboard() {
  let hereBeShips = [] // <-- holds coordinates on which there are ships
  let hereBeTheShipsNames = [] // <-- holds ship names at the same index as hereBeShips 

  let {positionsHit} = ShipFactory;
  return {
    freeSpaces: 100,
    placeShip(existingShip, ...coords) {
      existingShip.coordinates = coords;
      hereBeShips.push(coords);
      return existingShip.coordinates;
    },
    receiveAttack(coordie){
      if(hereBeShips.includes(coordie) && (!positionsHit().includes(coordie))){
        //hmmm, we need to figure out what ships the coordinate belongs to
        //OK I have an idea. When creating a ship, we're already pushing its
        //coordinates to hereBeShips[], so what if we immediately
        // push the ship's name to an array (that's hereBeTheShipsNames[]) ?
        //that way, they're indexed 1:1 (1 to 1) on their respective arrays.
        //so then we only need to get indexOf(positionHit) to get the index
        //and then we retrieve the value stored at that index in HBShipsNames[]
        //, so for example, if i's index 1 and we pushed 'destroyer' to HBSNames,
        //then we'll get back a value of 'destroyer'. Nice! Let's implement that.
      }
    },
    
    testHello() {
      return "hello";
    },
    receiveAttack(callPositionsHitFromShipFactory, )

    //we need to write some code before testing out hit() function
  };
  //to test, first create a ship, like
  // let battleship = ShipFactory('battleship'),
  //then place it on the board with
  //  Gameboard.placeship(battleship,'A1',''A2','A3')

  // function placeShip(existingShip, ...coords) {
  //   existingShip.coordinates = coords;
  //   let coordinateArray = [];
  //   coords.forEach((coord) => {
  //     coordinateArray.push(coord);
  //   });
  //   return coordinateArray;
  // }

  // function placeShipTest(existingShip, ...coords) {

  //   existingShip.coordinates = coords;
  //   // let coordinateArray = [];
  //   // coords.forEach((coord) => {
  //   // coordinateArray.push(coord);
  //   // });
  //   return existingShip.coordinates;
  // }

  // function testHello() {
  //   return "hello";
  // }

  // return { placeShipTest, testHello };
}
