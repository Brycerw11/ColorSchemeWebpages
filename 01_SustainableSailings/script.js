const focusImage = document.getElementById("focusImage");
const tagLine = document.getElementById("tagLine");

function updateSize() {
    // Set the focus-img-height variable
    tagLine.style.setProperty('--focus-img-height', focusImage.height); 

}
  
updateSize();
window.addEventListener("resize", updateSize);