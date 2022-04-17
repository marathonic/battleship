export function ShipFactory(typeOfShip) {
  //
  let length;
  let shipModel;

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

    case "batlteship":
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
  for(let i = length; i > 0; i--){
  hp.push(i)
  //  ((we really could pass anything here, like [HP,HP,HP]))
   }
  hp === [4,3,2,1]
  //
  function hit(coordinates){
    length.splice[]?????????????
    the only way this possibly makes sense is if 
    we make the length = coordinates at the moment of
    placing the ship on the board.
    Because then we can just say function hit(coordinates){
      if(length.contains(coordinates)){
        length[coordinates] = positionHit;
        length === [1,2,positionHit];
      }
    }
  }

  // const hit = (coordinate) => {
  //   return length--;
  // };

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

  const isSunk = (length) => {
    length === 0 ? true : false;
  };

  // const isSunk = (length, allPositionsHit) => {};
  return { hit, isSunk };
}
