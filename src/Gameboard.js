import { Ship } from "./ShipClass";

export function Gameboard(name) {
  const { setCoordinates, getCoordinates } = new Ship(name);
  const saySomethingCool = () => console.debug("Something Cool");
  return { setCoordinates, getCoordinates, saySomethingCool };
}
