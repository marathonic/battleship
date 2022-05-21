//This function scans the DOM for positioned ships and then returns the [positions] of the ship given as parameter.

export default function setPositionLogic(shipType) {
  let filled = document.querySelectorAll(".on-board");
  let positions = [];

  for (let i = 0; i < filled.length; i++) {
    let current = filled[i];
    if (current.classList.contains("positioned-" + shipType)) {
      positions.push(current.id);
    }
  }

  return positions;
}
