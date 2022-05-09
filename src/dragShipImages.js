import getNextLengthToBePlaced from "./getNextLengthToBePlaced";
import xWingy from "./img/xwing-cropped.png";
import enterprise from "./img/enterprise.png";
import isFirstToBePlaced from "./isFirstToBePlaced";
import lastPaintedCoords, {
  clearRecord,
  reportPaint,
} from "./lastPaintedCoords";
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
      //here we go. This is where we're going to remove old stylings
      if (e.target.parentNode.classList.contains("positioned-x-wing"))
        e.target.parentNode.classList.remove("positioned-x-wing");
      onDragStart(e);
      console.log(
        "WHY ARE WE GIVING X-WING ITS OWN EVENTLISTENER FOR DRAGSTART INSIDE OF DRAGSHIPIMAGES.JS INSTEAD OF RUNNING ITS DRAG FUNCTIONALITY FROM "
      );
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
      console.log("not our first rodeo");
      // let pictureToPlace = whatPic();
      // let currentlyBeingPlaced = e.target;
      // console.log(currentlyBeingPlaced.id); // <-- let's see what this returns. We want to get the id of the picture (in this case, 'x-wing')
      e.target.setAttribute("[last-placed-picture]");
      // let nextPic = getNextLengthToBePlaced();
    }
  });
}

// export function belongsToShip(coord) {
//   colouredCoordBelongsToShip.push(coord);
// }
// export function getColouredShipLocations() {
//   return colouredCoordBelongsToShip;
// }

function onDragStart(e) {
  ////////////////////////////<-----------------------WE'RE LEAVING OFF HERE FOR TODAY, CONTINUE HERE TOMORROW!!! READ BELOW!!!!! -------------------------------->\\\\\\\\\\\\\\\\\\\\\\\\
  //I think we know how we can make it so we can remove the paint when we reposition a ship (only the current positions will be filled in, the old ones will have their styling removed)
  // LIKE THIS:
  //Upon dragging an image (an img that's already been placed on the board), check its parentNode! (or just parent, not sure of the terminology)
  //So we want to check if the parentNode contains a classList of 'squares'. If so, it means it's on the board already, right?
  //So if that's true, we want to activate an eventListener of 'mouseleave', I think. Hmmmmm, let's think about that one.
  //<----------
  //loop over the coordinates with paint on them, and remove the styling
  if (e.currentTarget.parentNode.classList.contains("squares")) {
    // <-- translation: 'If the image we're dragging has already been placed in the gameboard'

    let oldPaint = reportPaint();
    for (let i = 0; i < oldPaint.length; i++) {
      let elementToDepaint = document.getElementById(oldPaint[i]);
      elementToDepaint.classList.remove("colour-this-square");
    }
    clearRecord();
    // let parentSquareOfImg = e.currentTarget.parentNode.id;
    // let actualParentSquareOfImgElement =
    //   document.getElementById(parentSquareOfImg);
  }
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setDragImage(e.target, 0, 0);
  console.log("grabbing image");
  if (e.currentTarget.classList.contains("grabbing")) return;
  e.currentTarget.classList.add("grabbing");
}
