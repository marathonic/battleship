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
