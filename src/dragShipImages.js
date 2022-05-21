import xWingy from "./img/xwing-cropped.png";
import { clearRecord, reportPaint } from "./lastPaintedCoords";

export default function dragShipImages() {
  //Wait for ENGAGE button click to present the ships:
  let engageBtn = document.querySelector(".deploy-ships-btn");
  engageBtn.addEventListener("click", function () {
    const exampleOrigin = document.createElement("div");
    exampleOrigin.classList.add("example-origin");
    const xWing = document.createElement("img");
    xWing.id = "x-wing";
    xWing.src = xWingy;
    xWing.classList.add("example-draggable-img");
    xWing.draggable = true;
    exampleOrigin.appendChild(xWing);
    xWing.addEventListener("dragstart", function (e) {
      if (e.target.parentNode.classList.contains("positioned-x-wing"))
        e.target.parentNode.classList.remove("positioned-x-wing");
      onDragStart(e);
    });

    setTimeout(() => {
      let draggit = document.querySelector(".drag-div");
      draggit.appendChild(exampleOrigin);
    }, 320);
  });
}

function onDragStart(e) {
  if (e.currentTarget.parentNode.classList.contains("squares")) {
    // <-- 'If the image we're dragging has already been placed in the gameboard'

    let oldPaint = reportPaint();
    for (let i = 0; i < oldPaint.length; i++) {
      let elementToDepaint = document.getElementById(oldPaint[i]);
      elementToDepaint.classList.remove("colour-this-square");
    }
    clearRecord();
  }
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setDragImage(e.target, 0, 0);
  if (e.currentTarget.classList.contains("grabbing")) return;
  e.currentTarget.classList.add("grabbing");
}
