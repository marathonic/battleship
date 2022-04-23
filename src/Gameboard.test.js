import { Gameboard } from "./Gameboard";

test("Creates ships from Gameboard", () => {
  let board = Gameboard();
  board.placeShip("destroyer", "A1");
  board.placeShip("submarine", "2D", "3D");
  // console.debug(board.shipsPls());
  console.debug(board.receiveAttack("A7"));
  console.debug(board.receiveAttack("A1"));
  console.debug(board.receiveAttack("2D"));
  console.debug(board.receiveAttack("3D"));
  console.debug(board.missedHere());
  console.debug(board.reportSunk());
});
