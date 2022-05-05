import { getNextLengthToBePlaced } from "./getNextLengthToBePlaced";
import xWingy from "./img/xwing-cropped.png";
import isFirstToBePlaced from "./isFirstToBePlaced";
//import more pics

//array to loop over to check for data attribute

export default function dragShipImages() {
  //Wait for ENGAGE button click to present the ships:
  let engageBtn = document.querySelector(".deploy-ships-btn");
  engageBtn.addEventListener("click", function () {
    //Then wait just enough for the board animation to complete:
    //NOw for the images:
    // const exampleParent = document.createElement("div");
    // exampleParent.classList.add("example-parent");
    const exampleOrigin = document.createElement("div");
    exampleOrigin.classList.add("example-origin");
    // exampleParent.appendChild(exampleOrigin);
    // ///draggable
    // const divDraggable = document.createElement("div");
    // divDraggable.id = "draggable-1";
    // divDraggable.classList.add("example-draggable");
    // divDraggable.innerHTML = "draggable";
    // divDraggable.draggable = true;
    // exampleOrigin.appendChild(divDraggable);
    // divDraggable.addEventListener("dragstart", function (e) {
    //   onDragStart(e);
    // });
    ///another one, draggable 2
    // const divDraggable2 = document.createElement("div");
    // divDraggable2.id = "draggable-2";
    // divDraggable2.classList.add("example-draggable");
    // divDraggable2.innerHTML = "thingy-2";
    // divDraggable2.draggable = true;
    // exampleOrigin.appendChild(divDraggable2);
    // divDraggable2.addEventListener("dragstart", function (e) {
    //   onDragStart(e);
    // });
    ///a third one, this time an image
    const xWing = document.createElement("img");
    xWing.id = "x-wing";
    xWing.src = xWingy;
    xWing.classList.add("example-draggable-img");
    xWing.draggable = true;
    exampleOrigin.appendChild(xWing);
    xWing.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    /////// dropzone

    const dropzone = document.createElement("div");
    dropzone.classList.add("example-dropzone");
    dropzone.innerHTML = "dropzone";
    dropzone.addEventListener("dragover", function (e) {
      onDragOver(e); // <-------------------- PAY ATTENTION! Divs don't drop by default, but images do!
      // When we switch to an img, if our img isn't dropping, take this part out!
    });
    dropzone.addEventListener("drop", function (e) {
      onDrop(e);
    });
    // exampleParent.appendChild(dropzone);
    //   const xWing = document.createElement("img");
    //   xWing.src = "./img/enterprise-sideview.png";
    let bg = document.querySelector(".bg");
    setTimeout(() => {
      let draggit = document.querySelector(".drag-div");
      draggit.appendChild(exampleOrigin);
    }, 320);
  });
}

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setDragImage(e.target, 0, 0);

  e.currentTarget.classList.add("grabbing");
}
function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  let id = e.dataTransfer.getData("text");
  let draggableElement = document.getElementById(id);
  let dropzone = e.target;
  dropzone.appendChild(draggableElement);
  draggableElement.classList.add("painted-square");
  e.dataTransfer.clearData();

  //check for ['previous-pic'] data attribute. If false, we're placing our first ship (destroyer).
  if (isFirstToBePlaced) {
    //code to colour the square we click / are hovering over
    //since we're only running this function if we're placing destroyer, it's only the 1 square
    let xWing = document.querySelector("#x-wing");
    xWing.setAttribute("last-placed-picture");
  }

  if (!isFirstToBePlaced) {
    let thePreviousPicture = document.querySelector("[last-placed-picture]");
    thePreviousPicture.removeAttribute("last-placed-picture");
    let currentlyBeingPlaced = e.target;
    console.log(currentlyBeingPlaced.id); // <-- let's see what this returns. We want to get the id of the picture (in this case, 'x-wing')
    e.target.setAttribute("[last-placed-picture]");
    // let nextPic = getNextLengthToBePlaced();
  }
}
