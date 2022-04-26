import { ComputerPlayer } from "./ComputerPlayer";
import { Gameboard } from "./Gameboard";
import { HumanPlayer } from "./HumanPlayer";

test("Players play", () => {
  let computer = ComputerPlayer();
  let human = HumanPlayer("kyle"); // <-- doesn't really need to be part of the game code. Just print chosen name to DOM
  let humanBoard = Gameboard();
  let computerBoard = Gameboard();
  humanBoard.placeShip("submarine", "A1", "A2");
  computerBoard.placeShip("cruiser", "B4", "B5", "B6");

  // console.debug(human.playerName);
  // console.debug(human.attack("A2")); // <-- DOM EvenListener('click'), when the player clicks the Computer's board, it takes that as input and fires Gameboard.receiveAttack() from the Computer's board. For multi-human functionality: on somebody.attack('coords'), run the other player's somebody.receiveAttack();
  console.debug(computerBoard.receiveAttack("A2"));
  console.debug(humanBoard.receiveAttack(computer.computerMove()));
  console.debug(computerBoard.receiveAttack("B5"));
  console.debug(humanBoard.receiveAttack("A1"));

  //
});
