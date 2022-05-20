export default function HumanPlayer(nameOfPlayer) {
  return {
    playerName() {
      return nameOfPlayer;
    },
    attacks(theComputersBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        theComputersBoard.receiveAttack(e.target.id);
      });
    },
    async sendsAttack(theComputersBoard, theComputerPlayer, theHumansBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        theComputersBoard.computerReceivesAttack(e.target.id);
        theComputerPlayer.attacks(theHumansBoard);
      });
    },
  };
}
