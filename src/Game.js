import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";
import { HumanPlayer } from "./HumanPlayer";

export default function Game() {
  // <-- Only run functions, must not write new code here.
  let human = HumanPlayer();
  let computer = ComputerPlayer();

  let humanBoard = Gameboard();
  let computerBoard = Gameboard();

  //For now, placeholder Ships. Implement system for players to place ships manually later.
  humanBoard.clickToPlaceShip();

  document.body.addEventListener("click", function () {
    alert("test");
  });
  // humanBoard.placeShip("destroyer", "A1");
  // humanBoard.placeShip("submarine", "A8", "A9"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]
  // humanBoard.placeShip("cruiser", "B1", "B2", "B3");
  // humanBoard.placeShip("battleship", "A7", "B7", "C7", "D7");
  // humanBoard.placeShip("carrier", "F1", "F2", "F3", "F4", "F5", "F6");

  // humanBoard.placeShip("destroyer", "B1");
  // humanBoard.placeShip("submarine", "C3", "C4"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]
  // humanBoard.placeShip("cruiser", "A1", "A2", "A3");
  // humanBoard.placeShip("battleship", "D1", "D2", "D3", "D4");
  // humanBoard.placeShip("carrier", "E1", "E2", "E3", "E4", "E5", "E6");

  // <-- write modified computerMove() that places coordinates.
  //Loop through the ship's length starting at i = length, then i-- until 0.
}
