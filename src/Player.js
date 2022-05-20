export function Player(playerName) {
  //<-- InputForm Regex for playerName: Reserve "computer" and "CPU" for computer Players

  let horizontal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let cpuMoves = [];

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
