import { Gameboard } from "./Gameboard";

export default function HumanPlayer(nameOfPlayer) {
  // Each player's boards and methods will be assigned automatically
  //Main Game Loop (make elsewhere):
  //  playerOne's turn ? playerTwo will receive attacks during this turn
  //  playerTwo's turn ? playerOne will receive attacks during this turn

  //<-- InputForm Regex for playerName: Reserve "computer" for computer Players
  //Regex for coordinates: take 1 letter and 1 or 2 digits. OR just
  //delimit coordinates by naming the physical DOM squares. choice = id;

  return {
    playerName() {
      return nameOfPlayer;
    },
    attack(...returnCoordsAsInputForReceiveAttack) {
      return returnCoordsAsInputForReceiveAttack;
    },
  };
}
