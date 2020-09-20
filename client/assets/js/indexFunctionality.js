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
  $(".breed").hide();
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
    headColor: randomNumber(10, 89),
    mouthColor: randomNumber(10, 89),
    eyesColor: randomNumber(10, 89),
    earsColor: randomNumber(10, 89),
    eyesShape: randomNumber(1, 7),
    decorationPattern: randomNumber(1, 7),
    decorationMidcolor: randomNumber(10, 89),
    decorationSidescolor: randomNumber(10, 89),
    animation: randomNumber(1, 7),
    lastNum: 1,
  };
  renderCat(randomDNA);
  console.log("random button clicked");
});

//this function removes button to appear to be pressed after it's pressed
$("#randomBtn, #defaultBtn, #catCreateBtn, #breedBtn").mouseup(function () {
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
  $(".breed").hide();
})

$("#factoryPage").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
  $(".breed").hide();
})

$("#makeKittyBtn").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
  $(".breed").hide();
})

$("#homePage").click(function() {
  $(".factory").hide();
  $(".home").show();
  $("#factoryPageBtn").show();
  $(".marketplace").hide();
  $(".catalog").hide();
  $(".breed").hide();
})

$("#marketplacePage").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").show();
  $("#factoryPageBtn").show();
  $(".catalog").hide();
  $("#breed").hide();
})

$("#catalogPage").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").hide();
  $("#factoryPageBtn").show();
  $(".catalog").show();
  $(".breed").hide();
  
  getKitties();
})

$(".buyACatBtn").click(function() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").show();
  $("#factoryPageBtn").show();
  $(".catalog").hide();
  $(".breed").hide();
})

$("#makeAcatBtn").click(function() {
  $(".factory").show();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
  $(".breed").hide();
})

//need to add breed functionality

$("#breedBtn").click(function(){
  $(".factory").hide();
  $(".home").hide();
  $("#factoryPageBtn").hide();
  $(".marketplace").hide();
  $(".catalog").hide();
  $(".breed").show();
});

$("#momDiv").click(function togglePopup() {
  document.getElementById("kittyPopup").classList.toggle("active")
});

$("#dadDiv").click(function togglePopup() {
  document.getElementById("kittyPopup").classList.toggle("active")
});

// function togglePopup() {
//   document.getElementById("kittyPopup").classList.toggle("active");
// }