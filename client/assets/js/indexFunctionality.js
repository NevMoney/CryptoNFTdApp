$("#catColorTab").click(function () {
  $("#cattributesDiv").hide();
  $("#catColors").show();
  console.log("tab clicked");
});

$("#cattributesTab").click(function () {
  $("#catColors").hide();
  $("#cattributesDiv").show();
  console.log("tab clicked");
});

$(document).ready(function () {
  $("#cattributesDiv").hide();
});

$("#defaultBtn").click(function () {
  renderCat(defaultDNA);
  normaldecoration();
  normalEyes();
  resetAnimation();
  console.log("default button clicked");
});

$("#catColorTab").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});

$("#cattributesTab").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});

//random cat creation - code needs to be written to generate random Cat
$("#randomBtn").click(function () {
  var randomDNA = {
    headColor: randomNumber(9, 97),
    mouthColor: randomNumber(9, 97),
    eyesColor: randomNumber(9, 97),
    earsColor: randomNumber(9, 97),
    eyesShape: randomNumber(0, 6),
    decorationPattern: randomNumber(0, 6),
    decorationMidcolor: randomNumber(9, 97),
    decorationSidescolor: randomNumber(9, 97),
    animation: randomNumber(0, 6),
    lastNum: 1,
  };
  renderCat(randomDNA);
  console.log("random button clicked");
});
