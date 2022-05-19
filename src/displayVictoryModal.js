export default function displayVictoryModal(winner) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("victory-modal");
  let msg = document.createElement("p");
  msg.classList.add("victory-modal-msg");
  msg.innerHTML = `${winner}\nwins!`;
  modalContainer.appendChild(msg);

  let bg = document.querySelector(".bg");
  bg.appendChild(modalContainer);

  modalContainer.addEventListener("click", function () {
    location.reload();
  });
}
