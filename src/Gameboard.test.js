const { Gameboard } = require("./Gameboard");
const { ShipFactory } = require("./ShipFactory");

test("place ship on board", () => {
  let board = Gameboard(); // <-- creates a board
  let destroyer = ShipFactory("destroyer"); // <-- creates a ship
  board.placeShip(destroyer, "A7"); // <-- the board places chosen ship on itself

  let submarine = ShipFactory("submarine");
  board.placeShip(submarine, "B2", "B3");
  console.debug(board.getHereBeShips());
  board.receiveAttack("B3"); //<-- next we'll figure out the hit() function
  // console.debug(board.getHereBeShips());
  // console.debug(board.getPositionsHit());
  // console.debug(board.receiveAttack("A8"));
  // console.debug(board.getPositionsHit());
  // console.debug(board.getHereBeShips());

  // console.debug(board.getShipsNames());
  console.debug(board.getFilteredShipNames()); // <-- we also need to make this the same as getHereBeShips so that it groups ships by sub-arrays, like [ ['destroyer'], ['submarine','submarine'] ]
  // console.debug(board.receiveAttack("A7"));

  // console.debug(destroyer.getLength()); <-- length was set by 'destroyer'
  //console.debug(destroyer.getCoordinates());// <-- the ship knows where it is!

  // console.debug(destroyer.hit("A2"));
  // console.debug(destroyer.isSunk());
  // console.debug(destroyer.hit("A2", board.placeShip()));
  // expect(Gameboard.placeShipTest(destroyer, "A1")).toEqual(["A1"]);
});
