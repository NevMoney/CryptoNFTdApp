function randomNumber(min, max) {
  var randomNum = Math.floor(Math.random() * max) + min;
  //need to insert min into function using Math.ceil
  return randomNum;
}

//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genColors() {
  var colors = [];
  for (var i = 1; i < 99; i++) {
    var color = getColor();
    colors[i] = color;
  }
  return colors;
}
