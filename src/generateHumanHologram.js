import justPlaced from "./justPlaced";
import lastPaintedCoords, {
  clearRecord,
  reportPaint,
} from "./lastPaintedCoords";
import paintLength from "./paintLength";
import presentNextImage from "./presentNextImage";
import { rotateImg } from "./rotateImg";

export default function generateHumanHologram() {
  let markedAsPlaced = [];
  let btn = document.querySelector(".deploy-ships-btn");
  btn.addEventListener("click", function (e) {
    //Board for human
    const board1 = document.createElement("div");
    board1.classList.add("boards");
    board1.classList.add("board1");

    let colouredCoordBelongsToShip = [];

    let constructHorizontal = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ];
    let constructVertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < constructHorizontal.length; i++) {
      let currentLetter = constructVertical[i]; // <--- get a letter (example: A)
      //Then, loop through the numbers array 10 times,
      for (let j = 0; j < constructVertical.length; j++) {
        let square = document.createElement("div");
        square.id = currentLetter + constructHorizontal[j]; // making its id equal the current letter + a number, up to number 10. Example: A7
        square.classList.add("squares");
        square.classList.add("placement-stage");
        square.classList.add("squares-animation");
        // square.classList.add("placement-stage"); //<-- REMOVE THIS CLASS UPON PLACING OUR LAST SHIP!

        board1.appendChild(square);
      }
    }
    board1.classList.add("board-placement-stage");
    let bg = document.querySelector(".bg");
    // bg.appendChild(board1);
    let dragBoi = document.querySelector(".drag-div");
    dragBoi.appendChild(board1);
    bg.appendChild(dragBoi);
    e.target.parentNode.removeChild(e.target); // <--- deletes the 'ENGAGE' button upon click

    // make this hologram work with Drag & Drop functionality

    board1.addEventListener("dragover", function (e) {
      onDragOver(e); // <-------------------- PAY ATTENTION! Divs don't drop by default, but images do!
      // When we switch to an img, if our img isn't dropping, take this part out!
      console.log("does this show up when we hover over the board?");
    });
    board1.addEventListener("drop", function (e) {
      onDrop(e);
    });
    function onDragOver(e) {
      e.preventDefault();
    }

    function belongsToShip(coord) {
      colouredCoordBelongsToShip.push(coord);
    }
    function getColouredShipLocations() {
      return colouredCoordBelongsToShip;
    }

    //let's try it with a click event listener instead
    //that can't be done right here though because we're inside of the onDragStart() function. We need to be

    // actualParentSquareOfImgElement.addEventListener("mousedown", function () {
    //   //// we shouldn't just call belongsToShip and register this on mousedown, but we could do that on mouseup! If we register a coord then, we can use getColouredShipLocations() UPON DROP!
    //   //getColouredShipLocations() is in dragShipImages. When we call it, we're gonna store its result in a variable and then filter the results to only get back those which belong to ... ?

    //   // if(actualParentSquareOfImgElement.hasChildNodes())
    //   // compare the squares with the yellow class to the array with the coordinates, and remove the styling from those who don't match

    //   let reportPaintReference = reportPaint();
    //   let recentPaint = [...reportPaintReference]; // <--- is this only returning an empty array?

    //   clearRecord(); // <-- we have stored the array that holds those locations in our recentPaint variable, so now we empty the original array.
    //   console.log(recentPaint);
    //   for (let i = 0; i < recentPaint.length; i++) {
    //     let toDepaint = document.getElementById(recentPaint[i]);
    //     // toDepaint.classList.add("black");
    //     toDepaint.classList.remove("colour-this-square");
    //     if (toDepaint.classList.contains("allied-ship-location"))
    //       toDepaint.classList.remove("allied-ship-location");
    //     if (toDepaint.classList.contains("painted-square"))
    //       toDepaint.classList.remove("painted-square");
    //   }
    // });
    // function belongsToShip(coord) {
    //   colouredCoordBelongsToShip.push(coord);
    // }
    // function getColouredShipLocations() {
    //   return colouredCoordBelongsToShip;
    // }

    // <-------------------------------------------------- Here is our click function to remove paint when grabbing an image
    //it's not working
    //what we want to do is this:
    // we want to make it so that, upon releasing the mouse click, we remove the yellow styling from the empty squares.
    //
    // board1.addEventListener("mousedown", function (e) {
    //   /////////////////<--------------------CONTINUE HERE!!!!!!!!!!!!!!!!!!!!!!!!! -----------------------> REMEMBER TO PLACE VERTICALLY FOR NOW
    //   //IDEA: Could we do it between the drag and the drop? Like so: On drag --> send coordinates to a function that stores them. On drop --> remove styling from those coordinates.
    //   let alltheSq = document.querySelectorAll("squares");
    //   // if() // <-------------------- we need an array that holds all of the ship locations, do we have that somewhere?
    //   // if we do indeed have that array, loop through it to check if all yellow coordinates are inside of that array. Those that aren't will get destylised.
    //   // if we don't have that array, we're going to need some functionality for the array to update whenever we move a ship.
    //   if (e.target.classList.contains("squares"))
    //     console.log("MOUSE UP SUCCESSSSSSSSSSSSSS");
    // });

    function onDrop(e) {
      if (e.target.classList.contains("colour-this-square")) return; // <-- do not colour twice ( will that work ? )
      let id = e.dataTransfer.getData("text");
      let draggableElement = document.getElementById(id);
      let dropzone = e.target;
      dropzone.appendChild(draggableElement);
      // we get the next image:
      markedAsPlaced.push(id);
      if (markedAsPlaced.length > 1) markedAsPlaced.shift();
      console.log(markedAsPlaced[0]);
      console.log(e.target.id);
      let imgID = markedAsPlaced[0];
      let sqID = e.target.id;
      // paintLength(imgID, sqID);
      paintLength(imgID, sqID);
      //let's see if we can do reportPaint() and clearRecord() here
      //
      e.dataTransfer.clearData();
      draggableElement.classList.remove("example-draggable-img");
      draggableElement.classList.remove("grabbing");
      // presentNextImage(markedAsPlaced)
      presentNextImage(markedAsPlaced);
    }
    setTimeout(() => {
      let rotateBtn = document.createElement("button");
      rotateBtn.id = "rotate-button";
      rotateBtn.innerHTML = "rotate";
      rotateBtn.classList = "rotate-btn";
      board1.appendChild(rotateBtn);
      rotateImg();
    }, 300);
  });
}
