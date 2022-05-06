export default function getLengthOf(imgID) {
  switch (imgID) {
    case "x-wing":
      return 1;

    case "submarine":
      return 2;

    case "cruiser":
      return 3;

    case "battleship":
      return 4;

    case "carrier":
      return 5;

    default:
      break;
  }
}
