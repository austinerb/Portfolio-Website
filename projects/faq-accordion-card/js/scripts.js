// define variables
// faq item
let item = document.querySelectorAll(".faq-item");

// set event listeners
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", toggleOpen);
}

// toggle open/close each FAQ
function toggleOpen() {
  // q
  this.querySelector(".faq-item-q").classList.toggle("faq-item-q-selected");
  // arrow
  this.querySelector(".arrow").classList.toggle("arrow-flip");
  // a
  this.querySelector(".faq-item-a").classList.toggle("faq-item-a-hidden");
}
