$("#catColorTab").click(function () {
  $(
    "#animationRange, #sideColorRange, #midColorRange, #decorationRange, #eyeShapeRange"
  ).hide();
  $("#bodyColorRange, #earColorRange, #eyeColorRange, #headColorRange").show();
  console.log("tab clicked");
});

$("#cattributesTab").click(function () {
  $("#bodyColorRange, #earColorRange, #eyeColorRange, #headColorRange").hide();
  $(
    "#animationRange, #sideColorRange, #midColorRange, #decorationRange, #eyeShapeRange"
  ).show();
  console.log("tab clicked");
});

$(document).ready(function () {
  $(
    "#animationRange, #sideColorRange, #midColorRange, #decorationRange, #eyeShapeRange, #bodyColorRange, #earColorRange, #eyeColorRange, #headColorRange"
  ).hide();
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

$("#randomBtn").click(function () {
  getColor();
  genColors();

  console.log("random button clicked");
});
