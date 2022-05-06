import { getNextLengthToBePlaced } from "./getNextLengthToBePlaced";
import xWingy from "./img/xwing-cropped.png";
import enterprise from "./img/enterprise.png";
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
    ///a third one, this time an image
    //LETS JUST CREATE ALL THE IMAGES AND PUT THEM IN AN ARRAY
    //BUT WAIT, THIS ONLY FIRES ONCE, THE TIME WE CLICK THE ENGAGE BUTTON
    //WE NEED TO FIRE THIS EVERY TIME A SHIP IS DROPPED ON THE BOARD
    const xWing = document.createElement("img");
    xWing.id = "x-wing";
    xWing.src = xWingy;
    xWing.classList.add("example-draggable-img");
    xWing.draggable = true;
    exampleOrigin.appendChild(xWing);
    let currentlyBeingPlaced;
    let currentlyBeingPlacedID;
    xWing.addEventListener("dragstart", function (e) {
      onDragStart(e);
      currentlyBeingPlaced = e.target;
      currentlyBeingPlacedID = e.target.id;
    });
    //<<<<<<<<<<----------------------------------------------->>>>>>>>>>>>>
    //<-----------------IMPORTANT!!!!!!!!!!!!!!!!-------------------------->
    //IF YOU ONLY TAKE ONE THING FROM THIS SESSION TODAY, LET IT BE THIS:
    /////// dropzone DOESN'T MATTER ANYMORE, IT'S BEING HANDLED BY generateHumanHologram

    let bg = document.querySelector(".bg");
    setTimeout(() => {
      let draggit = document.querySelector(".drag-div");
      draggit.appendChild(exampleOrigin);
    }, 320);

    //check for ['previous-pic'] data attribute. If false, we're placing our first ship (destroyer).
    if (isFirstToBePlaced()) {
      //code to colour the square we click / are hovering over
      //since we're only running this function if we're placing destroyer, it's only the 1 square
      console.log("first to be placed");
    }

    if (!isFirstToBePlaced()) {
      let pictureToPlace = whatPic();

      // let currentlyBeingPlaced = e.target;
      // console.log(currentlyBeingPlaced.id); // <-- let's see what this returns. We want to get the id of the picture (in this case, 'x-wing')
      // e.target.setAttribute("[last-placed-picture]");

      // let nextPic = getNextLengthToBePlaced();
    }
  });
}

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setDragImage(e.target, 0, 0);

  e.currentTarget.classList.add("grabbing");
}
