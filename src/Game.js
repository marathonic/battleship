import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";
import HumanPlayer from "./HumanPlayer";

export default function Game() {
  // <-- Only run functions, must not write new code here.
  let human = HumanPlayer("John");
  let humanBoard = Gameboard();
  let computer = ComputerPlayer();
  let computerBoard = Gameboard();
  //For now, placeholder Ships. Implement system for players to place ships manually later.
  // humanBoard.clickToPlaceShip();

  // document.body.addEventListener("click", function () {
  //  humanBoard.clickToPlaceShip();
  //   alert("test");
  // });

  humanBoard.placeShip("destroyer", "A1");
  humanBoard.placeShip("submarine", "A8", "A9"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]

  computerBoard.placeShip("destroyer", "B1");
  computerBoard.placeShip("submarine", "C3", "C4"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]

  humanBoard.getAllCoordinatesOnMap();

  computerBoard.getAllCoordinatesOnMap();
  computerBoard.reportClickedSquare(); // <---- COMPUTER BOARD COLOURS IN MATCHING POSITIONS

  human.attacks();

  //lets run some
  // human.attack('A2')
  // <-- write modified computerMove() that places coordinates.
  //Loop through the ship's length starting at i = length, then i-- until 0.
}
