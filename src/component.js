export default function component() {
  const element = document.createElement("div");
  const background = document.createElement("div");
  background.classList.add("bg");

  //Title
  const title = document.createElement("h1");
  title.innerHTML = "Starship";
  //Div to attach both gameboard and draggable images to
  const dragDiv = document.createElement("div");
  dragDiv.classList.add("drag-div");
  background.appendChild(title);
  background.appendChild(dragDiv);
  element.appendChild(background);
  return element;
}
