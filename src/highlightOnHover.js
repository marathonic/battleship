import getNextLengthToBePlaced from "./getNextLengthToBePlaced";
import paintLength from "./paintLength";

export default function highlightOnHover(imageIdee, squareIdee, orientation) {
  let board1 = document.querySelector(".board1");
  board1.addEventListener("mouseover", function () {
    paintLength(imageIdee, squareIdee, orientation);
  });
  board1.addEventListener("mouseleave", function () {
    //LEFT OFF HERE!!! (However, we added a line to onDrop(e) inside of generateHumanHologram, we haven't tested that it works yet)
    // SO test that real quick, and then come back here to work here :D
    //write a function that returns the coordinates that the current paintLength spans. Let's call the function hovr()
    // ^ those coordinates will come packaged in an array
    //It'll be very similar to paintLength, but it will RETURN a variable, let's call it: hoveredCoords.
    //in here, we'll initialise a variable with the result of running that function hovr(), like: let hovered = hovr();
    // with our 'hovered' variable, we'll just iterate through the array and remove the styling for each member.
  });
}
