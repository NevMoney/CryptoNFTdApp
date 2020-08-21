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
  renderCat(randomDNA);
  console.log("random button clicked");
});
