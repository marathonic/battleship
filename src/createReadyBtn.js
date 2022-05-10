export default function createReadyBtn() {
  removeRotateBtn();
  let readyBtn = document.createElement("button");
  readyBtn.innerHTML = "READY";
  readyBtn.classList.add("ready-btn");
  let btnContainerDiv = document.querySelector("#btn-container-div");
  btnContainerDiv.appendChild(readyBtn);
}

const removeRotateBtn = () => {
  let rotateBtn = document.querySelector("#rotate-button");
  rotateBtn.parentNode.removeChild(rotateBtn);
};
