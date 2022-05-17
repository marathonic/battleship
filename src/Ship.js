export function Ship(shipType) {
  //   let hits = 0;
  let length;
  let previouslyHit = [];
  let shipName;
  let originalLength;
  switch (shipType) {
    case "destroyer":
      length = 1;
      originalLength = 1;
      shipName = "destroyer";
      break;

    case "submarine":
      length = 2;
      originalLength = 2;
      shipName = "submarine";
      break;

    case "cruiser":
      length = 3;
      originalLength = 3;
      shipName = "cruiser";
      break;

    case "battleship":
      length = 4;
      originalLength = 4;
      shipName = "battleship";
      break;

    case "carrier":
      length = 5;
      originalLength = 5;
      shipName = "carrier";
      break;

    default:
      break;
  }
  return {
    getLength() {
      return length;
    },
    hit(position) {
      if (previouslyHit.includes(position)) return false;
      length--;
      previouslyHit.push(position);
      console.log("HIT IS BEING CALLED FROM SHIP");
      return;
    },
    isSunk() {
      if (previouslyHit.length === originalLength || length <= 0) {
        return true;
      } else {
        return false;
      }
    },
    getName() {
      return shipName;
    },
    damageReport() {
      return previouslyHit;
    },
  };
}
