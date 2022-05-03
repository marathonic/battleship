// export default function addShips() {}

export default function addDeployShipsBtn() {
  const deployShipsBtn = document.createElement("button");
  deployShipsBtn.classList.add("deploy-ships-btn");
  const background = document.querySelector(".bg");
  background.appendChild(deployShipsBtn);
  return background;
}
