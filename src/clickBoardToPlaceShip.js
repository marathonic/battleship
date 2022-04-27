export default function clickBoardToPlaceShip(shipsHereArray) {
  let board = document.querySelector(".board1");
  board.addEventListener("click", function (e) {
    if (e.target.classList !== "squares") return false;
    let clickedChild = e.target;
    let indexOfClickedChild = Array.from(
      clickedChild.parentElement.children
    ).indexOf(clickedChild);
    // <--- we could get the id instead, and then we could send those IDs over to placeShip() as coordinate inputs
    let lengthToHover = shipsHereArray.length + 1;
    // let lengthToHover;
    // switch (shipsHere.length) {
    //   case 0:
    //     lengthToHover = 2;
    //     break;

    //   case 1:
    //     lengthToHover = 3;
    //     break;

    //   default:
    //     break;
    // }
    for (let i = 0; i < lengthToHover; i++) {
      let toBeStyled = indexOfClickedChild + i;
      console.log(toBeStyled);
      document
        .querySelector(`.board1 :nth-child(${toBeStyled})`)
        .classList.add("hovered-ship");
      // toBeStyled.classLi
    }
  });
}
