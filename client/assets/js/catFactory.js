//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genColors() {
  var colors = [];
  for (var i = 10; i < 99; i++) {
    var color = getColor();
    colors[i] = color;
  }
  return colors;
}

//Color variations
function headColor(color, code) {
  $(".cat_body").css("background", "#" + color); //This changes the color of the cat
  $("#bodycode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnabody").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color, code) {
  $(".left-ear, .right-ear, .mouth, .nose").css("background", "#" + color);
  $("#mouthcode").html("code: " + code);
  $("#dnamouth").html(code);
}

function eyeColor(color, code) {
  $(".pupil-left, .pupil-right").css("background", "#" + color);
  $("#eyecode").html("code: " + code);
  $("#dnaeyes").html(code);
}

function pawsColor(color, code) {
  $(
    ".head, .paws-back-left, .paws-back-right, .paws-front-right, .paws-front-left"
  ).css("background", "#" + color);
  $("#earcode").html("code: " + code);
  $("#dnaears").html(code);
}

function midDotColor(color, code) {
  $(".cat__head-dots").css("background", "#" + color);
  $("#midDotcode").html("code: " + code);
  $("#dnadecorationMid").html(code);
}

function sideDotColor(color, code) {
  $(".cat__head-dots_first, .cat__head-dots_second").css(
    "background",
    "#" + color
  );
  $("#sideDotcode").html("code: " + code);
  $("#dnadecorationSides").html(code);
}

//shape variations

function eyeVariation(num) {
  $("#dnashape").html(num);
  switch (num) {
    case 1:
      normalEyes(); //calling norrmalEyes function --> see line 72 (for now... scroll down)
      $("#eyeName").html("Basic"); //set the badge on slider
      break; //always have the have break at the end of the switch statements
    case 2:
      normalEyes();
      $("#eyeName").html("Chill");
      eyesType1();
      break;
    case 3:
      normalEyes();
      $("#eyeName").html("Zen");
      eyesType2();
      break;
    case 4:
      normalEyes();
      $("#eyeName").html("The Pirate");
      eyesType3();
      break;
    case 5:
      normalEyes();
      $("#eyeName").html("Panda Eyes");
      eyesType4();
      break;
    case 6:
      normalEyes();
      $("#eyeName").html("Look Right");
      eyesType5();
      break;
    case 7:
      normalEyes();
      $("#eyeName").html("Look Left");
      eyesType6();
      break;
  }
}

function decorationVariation(num) {
  $("#dnadecoration").html(num);
  switch (num) {
    case 1:
      $("#decorationName").html("Basic");
      normaldecoration();
      break;
    case 2:
      normaldecoration();
      $("#decorationName").html("Brushed Left");
      decorationType1();
      break;
    case 3:
      normaldecoration();
      $("#decorationName").html("Brushed Right");
      decorationType2();
      break;
    case 4:
      normaldecoration();
      $("#decorationName").html("Messy");
      decorationType3();
      break;
    case 5:
      normaldecoration();
      $("#decorationName").html("Small");
      decorationType4();
      break;
    case 6:
      normaldecoration();
      $("#decorationName").html("Spikey");
      decorationType5();
      break;
    case 7:
      normaldecoration();
      $("#decorationName").html("Long");
      decorationType6();
      break;
  }
}

async function normalEyes() {
  //used in function eyeVariation --> see line 46
  await $(".cat__eye").find("span").css("border", "none");
}

//after normalEyes, we have to set different types:
function eyesType1() {
  $(".cat__eye").find("span").css("border-top", "15px solid"); //in parenthesis set the eye type you want --> currently using Filip's code
}

function eyesType2() {
  $(".cat__eye").find("span").css("border-bottom", "15px solid");
}

function eyesType3() {
  $(".cat__eye--left").find("span").css("border", "21px solid black");
}

function eyesType4() {
  $(".cat__eye").find("span").css("border", "10px solid");
}

function eyesType5() {
  $(".cat__eye").find("span").css("border-left", "15px solid black");
}

function eyesType6() {
  $(".cat__eye").find("span").css("border-right", "15px solid black");
}

async function normaldecoration() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    height: "48px",
    width: "14px",
    top: "1px",
    "border-radius": "0 0 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "0 50% 50% 50%",
  });
}

function decorationType1() {
  $(".cat__head-dots").css({
    transform: "rotate(30deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "0 50% 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(30deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(15deg)",
    height: "35px",
    width: "14px",
    top: "-10px",
    "border-radius": "0 50% 50% 50%",
  });
}

function decorationType2() {
  $(".cat__head-dots").css({
    transform: "rotate(-30deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(-30deg)",
    height: "35px",
    width: "14px",
    top: "-5px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(-30deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "0 50% 50% 50%",
  });
}

function decorationType3() {
  $(".cat__head-dots").css({
    transform: "rotate(-15deg)",
    height: "35px",
    width: "14px",
    top: "1px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(-30deg)",
    height: "45px",
    width: "14px",
    top: "-5px",
    "border-radius": "50% 0 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(45deg)",
    height: "45px",
    width: "14px",
    top: "10px",
    "border-radius": "0 50% 50% 50%",
  });
}

function decorationType4() {
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    height: "15px",
    width: "14px",
    top: "5px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(0deg)",
    height: "10px",
    width: "14px",
    top: "5px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(0deg)",
    height: "10px",
    width: "14px",
    top: "5px",
    "border-radius": "50% 50% 50% 50%",
  });
}

function decorationType5() {
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    height: "35px",
    width: "10px",
    top: "-15px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(-20deg)",
    height: "40px",
    width: "10px",
    top: "1px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(20deg)",
    height: "40px",
    width: "10px",
    top: "1px",
    "border-radius": "50% 50% 50% 50%",
  });
}

function decorationType6() {
  $(".cat__head-dots").css({
    transform: "rotate(0deg)",
    height: "65px",
    width: "10px",
    top: "1px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_first").css({
    transform: "rotate(15deg)",
    height: "60px",
    width: "10px",
    top: "1px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(-15deg)",
    height: "60px",
    width: "10px",
    top: "1px",
    "border-radius": "50% 50% 50% 50%",
  });
}
