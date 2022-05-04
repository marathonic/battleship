export default function dragShipImages() {
  //Wait for ENGAGE button click to present the ships:
  let engageBtn = document.querySelector(".deploy-ships-btn");
  engageBtn.addEventListener("click", function () {
    //Then wait just enough for the board animation to complete:
    //NOw for the images:
    const exampleParent = document.createElement("div");
    exampleParent.classList.add("example-parent");
    const exampleOrigin = document.createElement("div");
    exampleOrigin.classList.add("example-origin");
    exampleParent.appendChild(exampleOrigin);
    ///draggable
    const divDraggable = document.createElement("div");
    divDraggable.id = "draggable-1";
    divDraggable.classList.add("example-draggable");
    divDraggable.innerHTML = "draggable";
    divDraggable.draggable = true;
    exampleOrigin.appendChild(divDraggable);
    divDraggable.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    ///another one, draggable 2
    const divDraggable2 = document.createElement("div");
    divDraggable2.id = "draggable-2";
    divDraggable2.classList.add("example-draggable");
    divDraggable2.innerHTML = "thingy-2";
    divDraggable2.draggable = true;
    exampleOrigin.appendChild(divDraggable2);
    divDraggable2.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    /////// dropzone

    const dropzone = document.createElement("div");
    dropzone.classList.add("example-dropzone");
    dropzone.innerHTML = "dropzone";
    dropzone.addEventListener("dragover", function (e) {
      onDragOver(e); // <-------------------- PAY ATTENTION! Divs don't drop by default, but images do!
      // When we switch to an img, if our img isn't dropping, take this part out!
    });
    dropzone.addEventListener("drop", function (e) {
      onDrop(e);
    });
    exampleParent.appendChild(dropzone);
    //   const xWing = document.createElement("img");
    //   xWing.src = "./img/enterprise-sideview.png";
    let bg = document.querySelector(".bg");
    setTimeout(() => {
      bg.appendChild(exampleParent);
    }, 320);
  });
}

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);

  e.currentTarget.classList.add("testing-yellow");
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  let id = e.dataTransfer.getData("text");
  let draggableElement = document.getElementById(id);
  let dropzone = e.target;
  dropzone.appendChild(draggableElement);

  e.dataTransfer.clearData();
}
