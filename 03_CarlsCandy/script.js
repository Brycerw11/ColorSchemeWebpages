const focusImage = document.getElementById("focusImage");
const tagLine = document.getElementById("tagLine");

function updateSize() {
    // Set the focus-img-height  and focus-img-width variables
    tagLine.style.setProperty('--focus-img-height', focusImage.height); 
    tagLine.style.setProperty('--focus-img-width', focusImage.offsetWidth)
}
  
updateSize();
window.addEventListener("resize", updateSize);