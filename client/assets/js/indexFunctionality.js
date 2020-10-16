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
$("#randomBtn, #defaultBtn, #catCreateBtn, #breedBtn, #privacyBtn, #sellBtn, #buyBtn").mouseup(function () {
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

function gotToInventory() {
  $(".factory").hide();
  $(".home").hide();
  $(".marketplace").show();
  $("#factoryPageBtn").show();
  $(".catalog").hide();
  
  $("#catsDivSale").empty();
  $("#catsDiv").empty();

  getInventory();
}

$("#marketplacePage").click(gotToInventory);

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
  $("#catsDivSale").empty();

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

$("#breedBtn").click(function(){
  $("#selectMom").show();
  $("#selectDad").hide();
  $("#catsDiv").css("cursor", "pointer");
});

var momId;
var dadId;

function selectCat(id) {
  if(momId && dadId) return;
  //ensuring that momdId != dadId, my idea (not working):
  // if(momId == dadId) return;

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
});

var saleId; 
var salePrice;

function selectCatForSale(id){
  saleId = id;
}

$("#sellBtn").click(function(){
  sellCat(saleId).then(() => {
    $(".bd-example-modal-lg").modal("hide");
  });  
});

function selectCatToBuy(id){
  saleId = id;
  checkOffer(saleId).then((offer) => {
    salePrice = offer.price;
    buyKitten(saleId, salePrice);
  });
}

function cancelSale(id){
  saleId = id;
  removeOffer(id);
}

// connect the cat to this URL: https://rinkeby.etherscan.io/token/0x0dc232030a36c276f411bd4d9c02a770f5237c07?a=1