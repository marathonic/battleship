import { Gameboard } from "./Gameboard";

export function ComputerPlayer() {
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

  //This is the function we're talking about in newGamePlus.js
  // <--- commenting this out on 14 May 2022 at 10:47
  // function randomlyPosition(shipType) {
  //   let xPosition = Math.floor(Math.random() * 10);
  //   let yPosition = Math.floor(Math.random() * 10);
  //   let firstSquarePosition = vertical[yPosition] + horizontal[xPosition];
  //   switch (shipType) {
  //     case "submarine":
  //       break;

  //     default:
  //       break;
  //   }
  // }

  return {
    computerMove,
    getComputerMoves() {
      return cpuMoves;
    },
    async attacks(theHumansBoard) {
      theHumansBoard.receiveAttack(computerMove());
    },
  };
}
