function checkGameOver() {
  let allComputerPositions = document.querySelectorAll(
    ".squares-computer.coloured-in"
  );
  let allHumanPositions = document.querySelectorAll(".hit-position-human");
  if (allComputerPositions.length === 15) {
    alert("Human wins");
    return;
  }
  if (allHumanPOsitions.length === 15) {
    alert("Computer wins");
    return;
  }
}
