import "./style.css";
import component from "./component";
import Game from "./Game";
import clickBoardToPlaceShip from "./clickBoardToPlaceShip";
import HumanPlayer from "./HumanPlayer";
import deployShipsBtn from "./deployShipsBtn";
import addDeployShipsBtn from "./deployShipsBtn";

document.body.appendChild(component());
document.body.appendChild(addDeployShipsBtn());
Game(); // <-- we are running Game from here. Game is in turn running reportClickedSquare() from the humanBoard variable created inside of Game.js
