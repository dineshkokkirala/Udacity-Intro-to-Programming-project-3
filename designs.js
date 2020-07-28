// Select color input
// Select size input
var color = "";
// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
  // Your code goes here!
  var d = 1;
  var t = "table" + d;
  var row = document.getElementById(t);
  while (row !== null) {
    row.remove();
    d = ++d;
    t = "table" + d;
    row = document.getElementById(t);
  }

  var table = document.querySelector("#pixelCanvas");
  for (var i = 1; i <= h; i++) {
    table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
    var line = document.querySelector("#table" + i);
    for (var j = 1; j <= w; j++) {
      line.insertAdjacentHTML("afterbegin", "<td id = cell" + i + j + "></td>");
    }
  }

  document.getElementById("pixelCanvas").addEventListener("click", function () {
    var colorElement = document.getElementById("colorPicker");
    var color = colorElement.value;
    var click = event.target.id;
    var elem = document.getElementById(click);
    var attrib = elem.hasAttribute("style");
    if (attrib === true) {
      elem.removeAttribute("style");
    } else {
      elem.style.backgroundColor = color;
    }
  });
}

var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  var hElement = document.getElementById("inputHeight");
  var wElement = document.getElementById("inputWidth");
  var height = hElement.value;
  var width = wElement.value;
  makeGrid(height, width);
});
