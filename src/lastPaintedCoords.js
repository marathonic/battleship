let paintedLocation = [];

export default function lastPaintedCoords(newCoord) {
  paintedLocation.push(newCoord); //<-- we push the id
}

export function reportPaint() {
  return paintedLocation;
}

export function clearRecord() {
  paintedLocation = [];
}
