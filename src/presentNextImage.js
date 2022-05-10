import submarine from "./img/resurrection.png";
import cruiser from "./img/enterprise2.png";
import battleship from "./img/gundam-suit.png";

export default function presentNextImage(arrayOfPictureIDs) {
  let nextImage = document.createElement("img");
  // let dragBoi = document.querySelector('drag-div')
  let exampleOrigin = document.querySelector(".example-origin");

  // xWing.classList.add("example-draggable-img");
  // xWing.draggable = true;
  // exampleOrigin.appendChild(xWing);
  switch (arrayOfPictureIDs[0]) {
    case "x-wing":
      nextImage.src = submarine;
      nextImage.id = "submarine";

      break;
    case "submarine":
      nextImage.src = cruiser;
      nextImage.id = "cruiser";
      break;

    case "cruiser":
      nextImage.src = battleship;
      nextImage.id = "battleship";
      break;

    default:
      break;
  }

  nextImage.classList.add("example-draggable-img");
  nextImage.classList.add("aboslute-position");
  nextImage.draggable = true;
  //check how many divs in example-origin (the div where new images appear)
  if (exampleOrigin.childElementCount > 0) return;
  //the code below will only run if exampleOrigin is empty
  exampleOrigin.appendChild(nextImage);
  nextImage.addEventListener("dragstart", function (e) {
    function onDragStart(e) {
      let starShipName = arrayOfPictureIDs[0];
      let classToRemove = "positioned-" + starShipName;
      if (e.target.parentNode.classList.contains(classToRemove)) {
        //REMOVE THE STYLING FROM ALL OF THE TARGET'S ASSOCIATED POSITIONS!!! AS SOON AS WE DROP THE IMAGE BACK INTO A SQUARE, THE STYLING WILL BE RE-ADDED TO THE NEW POSITIONS

        let oldPositionsToRemove = document.querySelectorAll(
          "." + classToRemove
        );
        for (let i = 0; i < oldPositionsToRemove.length; i++) {
          let toBeRestyled = oldPositionsToRemove[i];
          toBeRestyled.classList.remove(classToRemove);
        }
      }

      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.setDragImage(e.target, 0, 0);
      console.log("grabbing image");
      e.currentTarget.classList.add("grabbing");
      console.log(
        "THIS IS NOT X-WING, BUT WHY ARE WE GIVING X-WING ITS OWN EVENTLISTENER FOR ONDRAGSTART() INSTEAD OF BUNDLING IT WITH THE OTHERS? Lets fix that"
      );
    }

    onDragStart(e);
    // currentlyBeingPlaced = e.target;
    // currentlyBeingPlacedID = e.target.id;
  });
}
