import paintLength from "./paintLength";
import presentNextImage from "./presentNextImage";
import { rotateImg } from "./rotateImg";

export default function generateHumanHologram() {
  let markedAsPlaced = [];
  let btn = document.querySelector(".deploy-ships-btn");
  btn.addEventListener("click", function (e) {
    const board1 = document.createElement("div");
    board1.classList.add("boards");
    board1.classList.add("board1");

    let constructHorizontal = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ];
    let constructVertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < constructHorizontal.length; i++) {
      let currentLetter = constructVertical[i]; // <--- get a letter (example: A)
      //Then, loop through the numbers array 10 times,
      for (let j = 0; j < constructVertical.length; j++) {
        let square = document.createElement("div");
        square.id = currentLetter + constructHorizontal[j]; // making its id equal the current letter + a number, up to number 10.
        square.classList.add("squares");
        square.classList.add("placement-stage");
        square.classList.add("squares-animation");

        board1.appendChild(square);
      }
    }
    board1.classList.add("board-placement-stage");
    let bg = document.querySelector(".bg");
    let dragBoi = document.querySelector(".drag-div");
    dragBoi.appendChild(board1);
    bg.appendChild(dragBoi);
    e.target.parentNode.removeChild(e.target); // <--- removes the 'ENGAGE' button upon click

    // give this hologram Drag & Drop functionality:

    board1.addEventListener("dragover", function (e) {
      onDragOver(e);
    });
    board1.addEventListener("drop", function (e) {
      onDrop(e);
    });
    function onDragOver(e) {
      e.preventDefault();
    }

    function onDrop(e) {
      let id = e.dataTransfer.getData("text");
      let draggableElement = document.getElementById(id);
      let dropzone = e.target;
      dropzone.appendChild(draggableElement);
      // Get the next image:
      markedAsPlaced.push(id);
      if (markedAsPlaced.length > 1) markedAsPlaced.shift();
      console.log(markedAsPlaced[0]);
      console.log(e.target.id);
      let imgID = markedAsPlaced[0];
      let sqID = e.target.id;
      paintLength(imgID, sqID);
      e.dataTransfer.clearData();
      draggableElement.classList.remove("example-draggable-img");
      draggableElement.classList.remove("grabbing");
      presentNextImage(markedAsPlaced);
    }
    setTimeout(() => {
      let btnContainerDiv = document.createElement("div");
      btnContainerDiv.id = "btn-container-div";
      let rotateBtn = document.createElement("button");
      rotateBtn.id = "rotate-button";
      rotateBtn.innerHTML = "rotate";
      rotateBtn.classList = "rotate-btn";
      btnContainerDiv.classList.add("rotate-btn-container");
      btnContainerDiv.appendChild(rotateBtn);

      board1.appendChild(btnContainerDiv);
      rotateImg();
    }, 300);
  });
}
