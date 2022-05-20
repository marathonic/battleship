import displayVictoryModal from "./displayVictoryModal";

export default function onGameOver() {
  let hitsOnComputer = document.querySelectorAll(".coloured-in");
  let hitsOnHuman = document.querySelectorAll(".certain-hit");
  if (hitsOnComputer.length === 15) {
    setTimeout(() => {
      displayVictoryModal("human");
    }, 190);
  }
  if (hitsOnHuman.length === 15) {
    setTimeout(() => {
      displayVictoryModal("computer");
    }, 190);
  }
}
