function randomNumber(max) {
  var randomNum = Math.floor(Math.random() * max) + 1;
  return randomNum;
  console.log(randomNum);
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

var randomDNA = {
  headColor: randomNumber(97),
  mouthColor: randomNumber(97),
  eyesColor: randomNumber(97),
  earsColor: randomNumber(97),
  eyesShape: randomNumber(6),
  decorationPattern: randomNumber(6),
  decorationMidcolor: randomNumber(97),
  decorationSidescolor: randomNumber(97),
  animation: randomNumber(6),
  lastNum: 1,
};

function getRandomCat() {
  $("#dnabody").html(randomDNA.headColor);
  $("#dnamouth").html(randomDNA.mouthColor);
  $("#dnaeyes").html(randomDNA.eyesColor);
  $("#dnaears").html(randomDNA.earsColor);
  $("#dnashape").html(randomDNA.eyesShape);
  $("#dnadecoration").html(randomDNA.decorationPattern);
  $("#dnadecorationMid").html(randomDNA.decorationMidcolor);
  $("#dnadecorationSides").html(randomDNA.decorationSidescolor);
  $("#dnaanimation").html(randomDNA.animation);
  $("#dnaspecial").html(randomDNA.lastNum);

  getRandomCat(randomDNA);
}
