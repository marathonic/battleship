export function rotateImg() {
  let rotateBtn = document.querySelector("#rotate-button");
  rotateBtn.addEventListener("click", function () {
    let draggableImg = document.querySelector(".example-draggable-img");
    draggableImg.classList.toggle("rotate-vertical");
    console.log("rotating...");
  });
}
