import submarine from "./img/resurrection.png";
import cruiser from "./img/enterprise.png";

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

    default:
      break;
  }

  nextImage.classList.add("example-draggable-img");
  nextImage.draggable = true;
  exampleOrigin.appendChild(nextImage);
  nextImage.addEventListener("dragstart", function (e) {
    function onDragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.setDragImage(e.target, 0, 0);
      console.log("grabbing image");
      e.currentTarget.classList.add("grabbing");
    }

    onDragStart(e);
    // currentlyBeingPlaced = e.target;
    // currentlyBeingPlacedID = e.target.id;
  });
}
