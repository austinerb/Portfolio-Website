// get share icon
let shareIcon = document.querySelector(".share");
// get share pop up
let sharePopUp = document.querySelector(".share-pop-up");
// get share pop up share icon
let sharePopUpShareIcon = document.querySelector(".share-icon");

// add event listener to show share pop up
shareIcon.addEventListener("click", function() {
  sharePopUp.classList.toggle("show");
});
// add event listener to hide share pop up
sharePopUpShareIcon.addEventListener("click", function() {
  sharePopUp.classList.remove("show");
});
