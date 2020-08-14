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

//This function code needs to modified so that it works with Your cat code.
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
  $(".eye").css("background", "#" + color);
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

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {
  $("#dnashape").html(num);
  switch (
    num //switch statement is like a simple "if" statement... if 1 do this, if 2 do this, if 3 do that...
  ) {
    case 1:
      normalEyes(); //calling norrmalEyes function --> see line 72 (for now... scroll down)
      $("#eyeName").html("Basic"); //set the badge on slider
      break; //always have the have break at the end of the switch statements
    case 2:
      normalEyes();
      $("#eyeName").html("Chill");
      return eyesType1();
      break;
    //could create "default" state by stating
    //default:
    //put your default here (don't need break for default)
  }
}

function decorationVariation(num) {
  $("#dnadecoration").html(num);
  switch (num) {
    case 1:
      $("#decorationName").html("Basic");
      normaldecoration();
      break;
  }
}

async function normalEyes() {
  //used in function eyeVariation --> see line 46
  await $(".eyes").find("span").css("border", "none"); //find class you want to change, find all spans within that and then change css; border none is standard
}

//after normalEyes, we have to set different types:
function eyesType1() {
  $(".eyes").find("span").css("border-top", "15px solid"); //in parenthesis set the eye type you want --> currently using Filip's code
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
