import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";
import HumanPlayer from "./HumanPlayer";
import setPositionLogic from "./setPositionLogic";

//This is a newer version of our Game()

export default function newGamePlus() {
  // <-- Only run functions, must not write new code here.
  let human = HumanPlayer("John");
  let humanBoard = Gameboard();
  let computer = ComputerPlayer();
  let computerBoard = Gameboard();

  computerBoard.placeShip("destroyer", setPositionLogic("destroyer"));
  computerBoard.placeShip("submarine", "C3", "C4"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]

  humanBoard.getAllCoordinatesOnMap();
  computerBoard.getAllCoordinatesOnMap();
  computerBoard.reportClickedSquare(); // <---- COMPUTER BOARD COLOURS IN MATCHING POSITIONS
  humanBoard.reportComputersAttacksOnBoard();

  // humanBoard.reportAllHumanPositionsAttacked(); // <-- fill in when a human coordinate is attacked

  human.sendsAttack(computerBoard, computer, humanBoard); //// <--------ATTENTION!!! WE LEFT OFF ON LINE 33 (THE LINE BELOW THIS ONE) PICK IT BACK UP THERE, WE ALREADY HAVE THAT LOGIC WRITTEN SOMEWHERE.
  //computer attacks here.

  //lets run some
  // human.attack('A2')
  // <-- write modified computerMove() that places coordinates.
  //Loop through the ship's length starting at i = length, then i-- until 0.
}
