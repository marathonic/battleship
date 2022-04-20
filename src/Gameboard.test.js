const { Gameboard } = require("./Gameboard");
const { ShipFactory } = require("./ShipFactory");

test("place ship on board", () => {
  let board = Gameboard(); // <-- creates a board
  let destroyer = ShipFactory("destroyer"); // <-- creates a ship
  board.placeShip(destroyer, "A7"); // <-- the board places chosen ship on itself
  console.debug(board.getHereBeShips());
  console.debug(board.getPositionsHit());
  console.debug(board.receiveAttack("A7"));
  console.debug(board.getPositionsHit());
  console.debug(board.getHereBeShips());
  // console.debug(board.receiveAttack("A7"));

  // console.debug(destroyer.getLength()); <-- length was set by 'destroyer'
  //console.debug(destroyer.getCoordinates());// <-- the ship knows where it is!

  // console.debug(destroyer.hit("A2"));
  // console.debug(destroyer.isSunk());
  // console.debug(destroyer.hit("A2", board.placeShip()));
  // expect(Gameboard.placeShipTest(destroyer, "A1")).toEqual(["A1"]);
});
