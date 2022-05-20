import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

test("CPU plays", () => {
  let hooman = Player("human"); //DOM Input Form, takes place in main.js
  let computer = Player("CPU"); //automatically, takes place in main.js
  let humansBoard = Gameboard(); //
  let computersBoard = Gameboard();
  humansBoard.placeShip("destroyer", "4B");
  computersBoard.placeShip("submarine", "2A", "3A");
  console.debug(humansBoard.shipsObjectPls());
  console.debug(computersBoard.shipsPls());
});
