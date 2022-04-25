import { Gameboard } from "./Gameboard";

export function Player(playerName) {
  // Each player's boards and methods will be assigned automatically
  //Main Game Loop (make elsewhere):
  //  playerOne's turn ? playerTwo will receive attacks during this turn
  //  playerTwo's turn ? playerOne will receive attacks during this turn

  //<-- InputForm Regex for playerName: Reserve "computer" for computer Players
  //Regex for coordinates: take 1 letter and 1 or 2 digits. OR just
  //delimit coordinates by naming the physical DOM squares. choice = id;
  if (playerName !== "CPU") {
    return playerName;
  }

  //begin CPU functionality
  let horizontal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let cpuMoves = [];
  // Players take turns at playing the game

  const computerMove = () => {
    let xMove = Math.floor(Math.random() * 10);
    let yMove = Math.floor(Math.random() * 10);
    let computerShot = vertical[yMove] + horizontal[xMove];
    // <-- don't shoot the same location twice! Definitely not the most performant implementation, but let's test it out
    while (cpuMoves.includes(computerShot)) {
      xMove = Math.floor(Math.random() * 10);
      yMove = Math.floor(Math.random() * 10);
      computerShot = vertical[yMove] + horizontal[xMove];
    }
    cpuMoves.push(computerShot); // <-- always adds a new position;
    return computerShot;
    // return cpuMoves[cpuMoves.length - 1];
  };

  return {
    playerName,
    computerMove,
    getComputerMoves() {
      return cpuMoves;
    },
    attack(...coordinates) {
      return coordinates;
    },
  };
}
