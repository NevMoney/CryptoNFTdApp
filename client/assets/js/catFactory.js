//this file passes the action from catSettings and Index Factory to make the cat

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

//animation function
function animationVariation(num) {
  $("#dnaanimation").html(num); //puts animation number into the dnacode
  switch (num) {
    case 1:
      animationType1();
      $("#animationName").html("Still");
      break;
    case 2:
      animationType2();
      $("#animationName").html("Head Movement");
      break;
    case 3:
      animationType3();
      $("#animationName").html("Left Ear Wave");
      break;
    case 4:
      animationType4();
      $("#animationName").html("Right Ear Wave");
      break;
    case 5:
      animationType5();
      $("#animationName").html("Sleepy Kitty");
      break;
    case 6:
      animationType6();
      $("#animationName").html("Paw Move");
      break;
    case 7:
      animationType7();
      $("#animationName").html("Move Eyes");
      break;
  }
}

function animationType1() {
  resetAnimation();
}

function animationType2() {
  resetAnimation();
  $("#head").addClass("movingHead");
}

function animationType3() {
  resetAnimation();
  $("#leftEar").addClass("movingEarsLeft");
}

function animationType4() {
  resetAnimation();
  $("#rightEar").addClass("movingEarsRight");
}

function animationType5() {
  resetAnimation();
  $(".pupil-right, .pupil-left").addClass("sleepingKitty");
}

function animationType6() {
  resetAnimation();
  $(".paws-front-right").addClass("movingFrontPaw");
}

function animationType7() {
  resetAnimation();
  $(".pupil-right, .pupil-left").addClass("movingEyes");
}

function resetAnimation() {
  $("#head").removeClass("movingHead");
  $("#leftEar").removeClass("movingEarsLeft");
  $("#rightEar").removeClass("movingEarsRight");
  $(".pupil-right, .pupil-left").removeClass("sleepingKitty");
  $(".paws-front-right").removeClass("movingFrontPaw");
  $(".pupil-right, .pupil-left").removeClass("movingEyes");
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
      $("#eyeName").html("Night Eyes");
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

function decorationVariation(code) {
  $("#dnadecoration").html(code);
  switch (code) {
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
      $("#decorationName").html("Rocket");
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
  $(".cat__eye").find("span").css("border-left", "15px solid");
  $(".cat__eye").find("span").css("border-right", "15px solid");
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
    top: "20px",
    "border-radius": "50% 50% 50% 50%",
  });
  $(".cat__head-dots_second").css({
    transform: "rotate(-15deg)",
    height: "60px",
    width: "10px",
    top: "20px",
    "border-radius": "50% 50% 50% 50%",
  });
}
