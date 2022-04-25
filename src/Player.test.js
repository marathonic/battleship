import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

test("CPU plays", () => {
  let hooman = Player("human"); //DOM Input Form, takes place in main.js
  let computer = Player("CPU"); //automatically, takes place in main.js
  let humansBoard = Gameboard(); // <-- would it be a good idea to create one automatically inside of Player ?
  let computersBoard = Gameboard();
  // <-- place the ships for both sides (we'll automate this for the computer later)
  humansBoard.placeShip("destroyer", "4B");
  computersBoard.placeShip("submarine", "2A", "3A");
  // <-- we want the 'choose your move' prompt to run something like this: // we want to prompt the player to 'choose next move', and run something like this:
  //   console.debug(computersBoard.receiveAttack("9A")); // <-- human inputs a coordinate
  // <-- after a player's turn, we want the computer to play automatically
  //   console.debug(humansBoard.receiveAttack(computer.computerMove()));
  //   console.debug(computer.getComputerMoves());
  //   console.debug(computersBoard.receiveAttack("5G")); // <-- human inputs a coordinate
  //   console.debug(humansBoard.receiveAttack(computer.computerMove()));
  //   console.debug(computer.getComputerMoves());
  //quick check: does an exported async factory function return sync or async functions by return {functionA(){doSomething}, functionB(){doSomething}}?
  console.debug(humansBoard.shipsObjectPls());
  console.debug(computersBoard.shipsPls());
});
