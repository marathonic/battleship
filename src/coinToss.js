import getLogicLengthFor from "./getLogicLengthOf";

export default function coinToss() {
  let num = Math.floor(Math.random() * 2);
  if (num === 1) return "horizontal";
  return "vertical";
}

export function randomOutOfTen() {
  return Math.floor(Math.random() * 10);
}

export function randomForSubmarine() {
  return Math.floor(Math.random() * 8);
}

export function randomLimiterFor(typeOfShip) {
  let length = getLogicLengthFor(typeOfShip);
  return Math.floor(Math.random() * length);
}
