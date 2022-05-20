import "./style.css";
import component from "./component";
import addDeployShipsBtn from "./deployShipsBtn";
import generateHumanHologram from "./generateHumanHologram";
import dragShipImages from "./dragShipImages";

document.body.appendChild(component());
document.body.appendChild(addDeployShipsBtn());
generateHumanHologram(); // <-- on click
dragShipImages();
