export function ShipFactory(typeOfShip) {
  //
  let length;

  switch (typeOfShip) {
    case "destroyer":
      length = 1;
      break;

    case "submarine":
      length = 2;
      break;

    case "cruiser":
      length = 3;
      break;

    case "batlteship":
      length = 4;
      break;

    case "carrier":
      length = 5;
      break;

    default:
      break;
  }

  const hit = (boardPosition) => {
    return (boardPosition.hit = true);
  };

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

  const isSunk = (length, hp) => {
    if(length == 0)
  }

  // const isSunk = (length, allPositionsHit) => {};
  return { hit };
}
