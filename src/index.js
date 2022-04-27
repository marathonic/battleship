// import { ShipClass } from "./ShipClass.js";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import printMe from "./print";
import { Ship } from "./Ship";
import "./style.css";
import component from "./component";
import Game from "./Game";

document.body.appendChild(component());

function gameLogic() {
  //It's a simple loop!
  // Just make the computerMove <await> the playerMove

  while (human.reportSunk() === false && computer.reportSunk() === false) {
    playerMove()
      .then(() => {
        return playersMove;
      })
      .then(() => {});
  }

  //players take turns

  function lastTurn(playa) {
    if (playa !== "CPU") {
      //prompt the human for a move
    }
  }

  if (myBoard.missedShots.includes(Player.c)) cpuMove();
}
