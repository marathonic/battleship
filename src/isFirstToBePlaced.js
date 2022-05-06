export default function isFirstToBePlaced() {
  let imageList = document.querySelectorAll("img");
  let images = [...imageList];
  if (!images.some((img) => img.hasAttribute(".last-placed-picture")))
    return true;
  return false;
} // <-- must be our destroyer;
