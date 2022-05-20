import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";

test("Players play", () => {
  let computer = ComputerPlayer();
  let humanBoard = Gameboard();
  let computerBoard = Gameboard();
  humanBoard.placeShip("submarine", "A1", "A2");
  computerBoard.placeShip("cruiser", "B4", "B5", "B6");

  console.debug(humanBoard.receiveAttack(computer.computerMove()));
});
