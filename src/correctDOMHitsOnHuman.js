export default function correctDOMHitsOnHuman() {
  let computerBoard = document.querySelector(".board2");
  computerBoard.addEventListener("click", function (e) {
    if (e.target.classList.contains("hit-position-human")) {
      alert("HUMAN POSITION");
    }
    setTimeout(() => {
      let sharedIDWrong = e.target.id;
      let testComputerBoard = document.querySelector(".board2");
      let testHumanBoard = document.querySelector(
        ".board1." + "#" + sharedIDWrong
      );
      //   let located = testComputerBoard.querySelector(sharedIDWrong);
      alert(testHumanBoard);
    }, 150);
  });
}
