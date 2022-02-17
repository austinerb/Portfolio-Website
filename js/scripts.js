// get shapes

let square = document.querySelector(".square");
let circle = document.querySelector(".circle");
let triangle = document.querySelector(".triangle");
let rectangle = document.querySelector(".rectangle");

// vars

let shapeMin = 250;
let shapeMax = 500;

let topMax = window.innerHeight;
let leftMax = window.innerWidth;

let angleMin = -45;
let angleMax = 45;

// set sizes

let shapeSize = getRandom(shapeMin, shapeMax);
square.style.width = shapeSize + "px";
square.style.height = shapeSize + "px";

shapeSize = getRandom(shapeMin, shapeMax);
circle.style.width = shapeSize + "px";
circle.style.height = shapeSize + "px";

shapeSize = getRandom(shapeMin, shapeMax);
triangle.style.borderWidth = (shapeSize / 2) + "px";
triangle.style.borderTopColor = triangle.style.color;

let shapeSizeW = getRandom(50, 100);
let shapeSizeH = getRandom(200, shapeMax);
rectangle.style.width = shapeSizeW + "px";
rectangle.style.height = shapeSizeH + "px";

// set positions

square.style.top = getRandom(0, topMax) + "px";
square.style.left = getRandom(0, leftMax) + "px";

circle.style.top = getRandom(0, topMax) + "px";
circle.style.left = getRandom(0, leftMax) + "px";

triangle.style.top = getRandom(0, topMax) + "px";
triangle.style.left = getRandom(0, leftMax) + "px";

rectangle.style.top = getRandom(0, topMax) + "px";
rectangle.style.left = getRandom(0, leftMax) + "px";

// set rotation

// let rotateSquare = getRandom(angleMin, angleMax);
// let rotateTriangle = getRandom(angleMin, angleMax);
// let rotateRectangle = getRandom(angleMin, angleMax);
//
// square.style.transform = "rotate(" + rotateSquare + "deg)";
// triangle.style.transform = "rotate(" + rotateTriangle + "deg)";
// rectangle.style.transform = "rotate(" + rotateRectangle + "deg)";

// helpers

function getRandom(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}
