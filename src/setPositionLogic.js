export default function setPositionLogic(shipType) {
  let filled = document.querySelectorAll(".on-board");
  let positions = [];
  filled.forEach((sq) => {
    if (sq.classList.contains(".positioned-" + shipType)) {
      positions.push(sq);
    }
  });
  console.log(positions);
  return positions;
}
