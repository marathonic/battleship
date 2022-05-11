import generateComputerHologram from "./generateComputerHologram";
import readyBtnClick, { repositionBoardOne } from "./repositionBoard";

export default function createReadyBtn() {
  removeRotateBtn();
  let readyBtn = document.createElement("button");
  readyBtn.innerHTML = "READY";
  readyBtn.classList.add("ready-btn");
  readyBtn.id = "ready-button";
  readyBtn.addEventListener("click", function () {
    readyBtnClick();
    removeReadyBtn();
    repositionBoardOne();
    generateComputerHologram(); // <--- attach board2
  });
  let btnContainerDiv = document.querySelector("#btn-container-div");
  btnContainerDiv.appendChild(readyBtn);
}

const removeRotateBtn = () => {
  let rotateBtn = document.querySelector("#rotate-button");
  rotateBtn.parentNode.removeChild(rotateBtn);
};

const removeReadyBtn = () => {
  let readyBtn = document.querySelector("#ready-button");
  readyBtn.parentNode.removeChild(readyBtn);
};
