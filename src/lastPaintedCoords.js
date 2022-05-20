let paintedLocation = [];

export default function lastPaintedCoords(newCoord) {
  paintedLocation.push(newCoord);
}

export function reportPaint() {
  return paintedLocation;
}

export function clearRecord() {
  paintedLocation = [];
}
