export default function readyBtnClick() {
  let board1 = document.querySelector(".board1");
  let allSquares = document.querySelectorAll(".squares");
  let allImages = document.querySelectorAll("img");
  board1.classList.remove("board-placement-stage");
  allSquares.forEach((sq) => {
    sq.classList.remove("placement-stage");
    sq.classList.remove("squares-animation");
  });
  allImages.forEach((img) => img.parentNode.removeChild(img));
}

export function repositionBoardOne() {
  let allSq = document.querySelectorAll(".squares");
  allSq.forEach((sq) => sq.classList.add("fade"));
  removeBtnContainerDiv();
  let boardOneInContainer = document.querySelector(".board1");
  let board1Outside;
  board1Outside = boardOneInContainer;
  let dragDiv = document.querySelector(".drag-div");
  dragDiv.removeChild(boardOneInContainer); // <-- remove from dragDiv
  dragDiv.parentNode.removeChild(dragDiv); // <-- remove dragDiv
  let bg = document.querySelector(".bg");
  board1Outside.classList.add("board1-outside");
  bg.appendChild(board1Outside);
}

function removeBtnContainerDiv() {
  let btnContainerDiv = document.querySelector("#btn-container-div");
  btnContainerDiv.parentNode.removeChild(btnContainerDiv);
}
