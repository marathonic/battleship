export function ShipFactory(typeOfShip, ...coordinates) {
  let length;
  let shipModel;
  let shipSpans = [];
  let orientation = "horizontal";

  switch (typeOfShip) {
    case "destroyer":
      length = 1;
      shipModel = "destroyer";
      break;

    case "submarine":
      length = 2;
      shipModel = "submarine";
      break;

    case "cruiser":
      length = 3;
      shipModel = "cruiser";
      break;

    case "battleship":
      length = 4;
      shipModel = "battleship";
      break;

    case "carrier":
      length = 5;
      shipModel = "carrier";
      break;

    default:
      break;
  }

  let hp = [];
  for (let i = length; i > 0; i--) {
    hp.push(i);
    //  ((we really could pass anything here, like [HP,HP,HP]))
  }
  hp === [4, 3, 2, 1];
  //

  //Give the ship the input coordinates
  (function setCoordinates() {
    let coordinateArray = coordinates;
    coordinateArray.forEach((coordinate) => {
      shipSpans.push(coordinate);
    });
    return shipSpans;
  })();

  const getCoordinates = () => shipSpans;

  function hit(strikePosition) {
    if (shipSpans.includes(strikePosition)) {
      length--;
      let index = strikePosition;
      let target = shipSpans.indexOf(index);
      // before, we were doing it like the line below, but now we're splicing.
      // this.shipSpans[target] = "x"; <-- this.shipSpans == [untouched, 'x']

      //now we just remove from the array the element that's been hit
      shipSpans.splice([target], 1); //<--this finally works!
      //remove any undefined elements in array:
      shipSpans = shipSpans.filter((element) => {
        return element !== undefined;
      });
      return true;
      //if (shipSpans.length === 0) return true;  <-- if health depleted, hit() => true
      //return shipSpans;  <-- we should comment this out in favour of the above line.
    } else {
      return false; // <-- if calling hit() => false, register miss in Gameboard.
    }
  }

  // function isSunk() {
  //   if (length === 0) return "sunk";
  //   return false;
  // }

  const getLength = () => length;

  //if the above works, uncomment the following and try:
  const isSunk = () => (length === 0 ? true : false);

  return { orientation, hit, getLength, isSunk, getCoordinates };

  // save for later:
  // const hit = (boardPosition) => {
  //   return (boardPosition.hit = true);
  // };

  //we could also just make it so that:
  // we add an array entry for each unit of length
  //such as:
  //
  // function shipFactory(length){
  // let hp = [];
  // for(i = length; i > 0; i--){
  //  hp.push(i)
  //  ((we really could pass anything here, like [HP,HP,HP]))
  //    }
  //  hp === [4,3,2,1]
  //
  //  const hit = (ship){
  //  our Gameboard is determining which ship was hit, and
  //  passes it as a parameter as it calls the hit() function.
  //  so we don't need to worry about that here.
  //  What we want to do here is just hit the ship.
  //  //why? Because this function simply won't run if
  //  the ship is already sunk, because we'll be calling
  //  isSunk() before calling hit(), both inside of Gameboard
  //  hp.slice(hp.length -1);
  //
  //  }
  //  }
  //
  //

  // const isSunk = (length, allPositionsHit) => {};
}
