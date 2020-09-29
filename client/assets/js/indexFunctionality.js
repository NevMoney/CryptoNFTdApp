$("#catColorTab").click(function () {
  $("#cattributesDiv").hide();
  $("#catColors").show();
});

$("#cattributesTab").click(function () {
  $("#catColors").hide();
  $("#cattributesDiv").show();
});

$(document).ready(function () {
  $("#cattributesDiv").hide();
  $(".factory").hide();
  $(".home").show();
  $("#factoryPageBtn").show();
  $(".marketplace").hide();
  $(".catalog").hide();
  $("#privacyBtn").hide();
});

$("#defaultBtn").click(function () {
  renderCat(defaultDNA);
  normaldecoration();
  normalEyes();
  resetAnimation();
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
});

//this function removes button to appear to be pressed after it's pressed
$("#randomBtn, #defaultBtn, #catCreateBtn, #breedBtn, #privacyBtn, #listCatBtn").mouseup(function () {
  $(this).blur()
});

$("#catCreateBtn").click(function () {
  createKitty();
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
  $("#catCreatedMsg").hide();
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
  $("#selectMom").hide();
  $("#selectDad").hide();
  $("#privacyBtn").hide();

  $("#catsDiv").empty();

  getKitties();
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

/*
the idea below is to have a person click "breed" button and message to select mom pops up
the cursor changes to pointer above divs and first selection (mom) adds red border
upon selecting the first div messafe to select mom disapears and dad message comes up
selecting a div makes that particular border blue
when both red and blue cats are chosen "breed" button disapears and it's replaced by 
Privacy Button, which is what generates new kitten

BUT IT'S NOT WORKING!
*/

$("#breedBtn").click(function(){
  $("#selectMom").show();
  $("#selectDad").hide();
  $("#catsDiv").css("cursor", "pointer");
});

var momId;
var dadId;

function selectCat(id) {
  if (typeof(momId) != "number") {
    $(`#catalogDisplay${id}`).css("border", "5px solid red");
    $("#selectMom").hide();
    $("#selectDad").show();
    momId = id;
  }
  else {
    $(`#catalogDisplay${id}`).css("border", "5px solid blue");
    $("#breedBtn").hide();
    $("#selectDad").hide();
    $("#privacyBtn").show();
    dadId = id;    
  }
}

$("#privacyBtn").click(function(){
  breed(dadId, momId);
  console.log(momId, dadId);
});

$("#confirmSellCatBtn").click(function(){
  $("#listCatBtn").hide();
  // $(".modal").hide();
  $("#sellBox").show();
  $("#singleCat").append(singleKitty());
});

$("#sellBtn").click(function(){
  sellCat(id);
  
});