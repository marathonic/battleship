import submarine from "./img/resurrection.png";
import cruiser from "./img/enterprise2.png";
import battleship from "./img/gundam-suit.png";
import carrier from "./img/super-star-destroyer.png";
import createReadyBtn from "./createReadyBtn";

export default function presentNextImage(arrayOfPictureIDs) {
  let nextImage = document.createElement("img");
  let exampleOrigin = document.querySelector(".example-origin");

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

    case "battleship":
      nextImage.src = carrier;
      nextImage.id = "carrier";
      break;

    case "carrier":
      createReadyBtn();
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
      e.currentTarget.classList.add("grabbing");
    }

    onDragStart(e);
  });
}
