export function ShipFactory(typeOfShip) {
  let length;
  let shipModel;
  let shipSpans = [];
  let positionsHitArray = []; // <-- this array keeps track of positions hit
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

  //if our hit function is getting called, we're assuming
  //that the hit is a match, because it is GameBoard
  //that is in charge of determining whether there is a ship there or not.

  function hitPrev(strikePosition, callPlaceShipFromGameBoard) {
    //the reason we're calling placeShip from Gameboard is
    //Because we need to know the span of the ship in order to know
    //Which spot on the board will be made inactive.

    // maybe try using Promises so we can use await?
    let callback = callPlaceShipFromGameBoard; // <-- is a coordinate array

    length--;
    let index = strikePosition;
    let target = callback.indexOf(index);
    // before, we were doing it like the line below, but now we're splicing.
    // this.shipSpans[target] = "x"; <-- this.shipSpans == [untouched, 'x']

    //now we just remove from the array the element that's been hit
    callback.splice([target], 1); //<--this finally works!
    //remove any undefined elements in array:
    callback = callback.filter((element) => {
      return element !== undefined;
    });
    return true;
    //if (shipSpans.length === 0) return true;  <-- if health depleted, hit() => true
    //return shipSpans;  <-- we should comment this out in favour of the above line.
  }

  function getCoordinates() {
    return this.coordinates;
  }

  //<-- WHY WOULD THE SHIP FACTORY BE TRACKING POSITIONS HIT?
  // <-- THAT'S A JOB FOR THE GAMEBOARD
  function hit(coordinate) {
    // <--- This always returns true on its own, that's okay!
    // Because we only call this as a result of checking the board first.
    // <-- an if check here is redundant, this will only fire based on an
    // if condition inside of the Gameboard!
    // in Gameboard: if(!positionsHitArray.includes(coordinate)), then run hit()
    positionsHitArray.push(coordinate);
    length--;
    return true;
  }

  // function isSunk() {
  //   if (length === 0) return "sunk";
  //   return false;
  // }

  const getLength = () => length;

  //if the above works, uncomment the following and try:
  const isSunk = () => (length === 0 ? true : false);

  const positionsHit = () => positionsHitArray;

  return {
    orientation,
    hit,
    getLength,
    length,
    isSunk,
    getCoordinates,
    positionsHit,
  };

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
