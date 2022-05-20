import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";
import HumanPlayer from "./HumanPlayer";
import setPositionLogic from "./setPositionLogic";

//This file runs the main game loop. I have noted that I need to name my functions more clearly.

export default function newGamePlus() {
  // <-- Only run functions, must not write new code here.
  let human = HumanPlayer("human");
  let humanBoard = Gameboard();
  let computer = ComputerPlayer();
  let computerBoard = Gameboard();

  humanBoard.placeShip("destroyer", setPositionLogic("x-wing"));
  humanBoard.placeShip("submarine", setPositionLogic("submarine"));
  humanBoard.placeShip("cruiser", setPositionLogic("cruiser"));
  humanBoard.placeShip("battleship", setPositionLogic("battleship"));
  humanBoard.placeShip("carrier", setPositionLogic("carrier"));

  computerBoard.placeShip(
    "destroyer",
    computerBoard.registerComputerPositionsFor("destroyer")
  );
  computerBoard.placeShip(
    "submarine",
    computerBoard.registerComputerPositionsFor("submarine")
  );
  computerBoard.placeShip(
    "cruiser",
    computerBoard.registerComputerPositionsFor("cruiser")
  );
  computerBoard.placeShip(
    "battleship",
    computerBoard.registerComputerPositionsFor("battleship")
  );
  computerBoard.placeShip(
    "carrier",
    computerBoard.registerComputerPositionsFor("carrier")
  );

  computerBoard.getAllCoordinatesOnMap(); // <-- reveal computer ships in the console
  computerBoard.reportClickedSquare(); // <---- Computer board colours in matching positions

  human.sendsAttack(computerBoard, computer, humanBoard);
}
