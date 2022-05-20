export default function justPlaced(iDee) {
  //iDee is the id from the picture being dropped at that exact moment in time.
  //Read the iDee and return the next starship to be placed
  let nextImage;
  switch (iDee) {
    case "x-wing":
      nextImage = "submarine";
      break;

    case "submarine":
      nextImage = "cruiser";
      break;

    case "cruiser":
      nextImage = "battleship";
      break;

    case "battleship":
      nextImage = "carrier";
      break;

    default:
      break;
  }
  return nextImage;
}
