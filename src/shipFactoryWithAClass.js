export class Ship {
  constructor(model) {
    this.model = model;
    this.shipSpans = [];
    this.length;
  }
  setLength() {
    switch (this.model) {
      case "destroyer":
        this.length = Number(1);
        break;

      case "submarine":
        this.length = 2;
        break;

      case "cruiser":
        this.length = 3;
        break;

      case "batlteship":
        this.length = 4;
        break;

      case "carrier":
        this.length = 5;
        break;

      default:
        break;
    }
  }

  setCoordinates(...args) {
    let coordinateArray = [...args];
    coordinateArray.forEach((coordinate) => {
      this.shipSpans.push(coordinate);
    });
    return this.shipSpans;
  }

  getCoordinates = () => this.shipSpans;

  hit(coordinate) {
    if (this.shipSpans.includes(coordinate)) {
      this.length--;
      let index = coordinate;
      let target = this.shipSpans.indexOf(index);
      // before, we were doing it like the line below, but now we're splicing.
      // this.shipSpans[target] = "x"; <-- this.shipSpans == [untouched, 'x']

      //now we just remove from the array the element that's been hit
      this.shipSpans.splice([target], 1); //<--this finally works!
      //remove any undefined elements in array:
      this.shipSpans = this.shipSpans.filter((element) => {
        return element !== undefined;
      });
      return this.shipSpans;
    } else {
      return "miss";
    }
  }

  isSunk() {
    if (this.length === 0) return "sunk";
    return `Ship hit. HP: ${this.length}`;
    // this.length === 0 ? true : false;
  }

  getLength = () => this.length;
}

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
