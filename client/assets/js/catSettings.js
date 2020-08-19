var colors = Object.values(allColors());

var defaultDNA = {
  headColor: 11,
  mouthColor: 80,
  eyesColor: 98,
  earsColor: 17,
  //Cattributes
  eyesShape: 1,
  decorationPattern: 1,
  decorationMidcolor: 13,
  decorationSidescolor: 13,
  animation: 1,
  lastNum: 1,
};

// when page load
$(document).ready(function () {
  $("#dnabody").html(defaultDNA.headColor);
  $("#dnamouth").html(defaultDNA.mouthColor);
  $("#dnaeyes").html(defaultDNA.eyesColor);
  $("#dnaears").html(defaultDNA.earsColor);

  $("#dnashape").html(defaultDNA.eyesShape);
  $("#dnadecoration").html(defaultDNA.decorationPattern);
  $("#dnadecorationMid").html(defaultDNA.decorationMidcolor);
  $("#dnadecorationSides").html(defaultDNA.decorationSidescolor);
  $("#dnaanimation").html(defaultDNA.animation);
  $("#dnaspecial").html(defaultDNA.lastNum);

  renderCat(defaultDNA);
});

function defaultCat() {
  renderCat(defaultDNA);
}

function getDna() {
  var dna = "";
  dna += $("#dnabody").html();
  dna += $("#dnamouth").html();
  dna += $("#dnaeyes").html();
  dna += $("#dnaears").html();
  dna += $("#dnashape").html();
  dna += $("#dnadecoration").html();
  dna += $("#dnadecorationMid").html();
  dna += $("#dnadecorationSides").html();
  dna += $("#dnaanimation").html();
  dna += $("#dnaspecial").html();

  return parseInt(dna);
}

function renderCat(dna) {
  headColor(colors[dna.headColor], dna.headColor);
  $("#bodycolor").val(dna.headColor);
  mouthColor(colors[dna.mouthColor], dna.mouthColor);
  $("#mouthcolor").val(dna.mouthColor);
  eyeColor(colors[dna.eyesColor], dna.eyesColor);
  $("#eyecolor").val(dna.eyesColor);
  pawsColor(colors[dna.earsColor], dna.earsColor);
  $("#earcolor").val(dna.earsColor);
  eyeVariation(shape[dna.eyesShape], dna.eyesShape);
  $("#eyeshape").val(dna.eyesShape);
  decorationVariation(shape[dna.decorationPattern], dna.decorationPattern);
  $("#dotshape").val(dna.decorationPattern);
  midDotColor(colors[dna.decorationMidcolor], dna.decorationMidcolor);
  $("#midDotcolor").val(dna.decorationMidcolor);
  sideDotColor(colors[dna.decorationSidescolor], dna.decorationSidescolor);
  $("#sideDotcolor").val(dna.decorationSidescolor);
  animationVariation(dna.animation);
  $("#animation").val(dna.animation);
}

// Changing cat colors
$("#bodycolor").change(() => {
  var colorVal = $("#bodycolor").val();
  headColor(colors[colorVal], colorVal);
});

$("#mouthcolor").change(() => {
  var colorVal = $("#mouthcolor").val();
  mouthColor(colors[colorVal], colorVal);
});

$("#eyescolor").change(() => {
  var colorVal = $("#eyescolor").val();
  eyeColor(colors[colorVal], colorVal);
});

$("#earscolor").change(() => {
  var colorVal = $("#earscolor").val();
  pawsColor(colors[colorVal], colorVal);
});

// Changing different characteristics: eye shape, head dot shape,
$("#eyeshape").change(() => {
  var shape = parseInt($("#eyeshape").val()); //value between 1 and 7
  eyeVariation(shape);
});

$("#dotshape").change(() => {
  var shape = parseInt($("#dotshape").val());
  decorationVariation(shape);
});

$("#midDotcolor").change(() => {
  var colorVal = $("#midDotcolor").val();
  midDotColor(colors[colorVal], colorVal);
});

$("#sideDotcolor").change(() => {
  var colorVal = $("#sideDotcolor").val();
  sideDotColor(colors[colorVal], colorVal);
});

//animation
$("#animation").change(() => {
  var animationVal = parseInt($("#animation").val());
  animationVariation(animationVal);
});
