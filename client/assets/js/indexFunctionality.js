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
  $(".factory").hide();
  $(".home").show();
  $("#factoryPageBtn").show();
  $(".marketplace").hide();
  $(".catalog").hide();
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

//this function removes button to appear to be pressed after it's pressed
$("#randomBtn, #defaultBtn, #catCreateBtn").mouseup(function () {
  $(this).blur()
});

$("#catCreateBtn").click(function () {
  createKitty();
  console.log("create button clicked");
});

$("#factoryPageBtn").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
})

$("#factoryPage").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
})

$("#makeKittyBtn").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
})

$("#homePage").click(function() {
  $(".factory").hide();
  $(".home").show();
  $("#factoryPageBtn").show();
  $(".marketplace").hide();
  $(".catalog").hide();
})

$("#marketplacePage").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").show();
  $("#factoryPageBtn").show();
  $(".catalog").hide();
})

$("#catalogPage").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").hide();
  $("#factoryPageBtn").show();
  $(".catalog").show();
})

$(".buyACatBtn").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").show();
  $("#factoryPageBtn").show();
  $(".catalog").hide();
})

$("#makeAcatBtn").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
})

$("#noKittyMakeOne").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
})