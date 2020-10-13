//this file takes blockchain cats from buildCat file then displayes them onto the index catalog page

//append cats from contract onto the catalog page
function appendCat(dna, id, generation, isMarketPlace, price, owner){

    //first find and return cat DNA into readable string
    var KittyDna = catDna(dna);

    //then, build the catBox div into HTML element
    catBox(id, dna, generation, isMarketPlace, price, owner);

    //and then renter the cat CSS style depending on the string
    renderBlockchainCat(KittyDna, id);
    $("#catDNA" + id).html();
}

//apply cat CSS from buildCat.js
function renderBlockchainCat(dna, id) {
  headColor2(dna.headColor, id)
  mouthAndBelly(dna.mouthColor, id)
  eyeColor2(dna.eyesColor, id)
  earsAndPaw(dna.earsColor, id)
  eyeVariation2(dna.eyesShape, id)
  decorationVariation2(dna.decorationPattern, id)
  midColor(dna.decorationMidcolor, id)
  sidesColor(dna.decorationSidescolor, id)
  animationVariation2(dna.animation, id)
}

//splitting DNA to use it in redering the cat
function catDna(dnaStr){

    var dna = {
        "headColor": dnaStr.substring(0, 2),
        "mouthColor": dnaStr.substring(2, 4),
        "eyesColor": dnaStr.substring(4, 6),
        "earsColor": dnaStr.substring(6, 8),
        "eyesShape": dnaStr.substring(8, 9),
        "decorationPattern": dnaStr.substring(9, 10),
        "decorationMidcolor": dnaStr.substring(10, 12),
        "decorationSidescolor": dnaStr.substring(12, 14),
        "animation": dnaStr.substring(14, 15),
        "lastNum": dnaStr.substring(15, 16)
    }
    return dna;
}

//Cat HTML Div
var name = "Nev";
var string = "Hello " + name + "!";

function catBox(id, dna, generation, isMarketPlace, price, owner){
    
    var catDiv = `<div class="col-lg-3 catBox m-5 light-b-shadow" id="catalogDisplay${id}">
            <div class="cat"  onclick="selectCat(${id})" style="transform: scale(1)">
              <div class="ears">
                <div id="leftEar${id}" class="left-ear">
                  <div class="inner-ear-left"></div>
                </div>
                <div id="rightEar${id}" class="right-ear">
                  <div class="inner-ear-right"></div>
                </div>
              </div>

              <div class="body">
                <div id="catBody${id}" class="cat_body"></div>

                <div class="belly"></div>

                <div id="paws" class="paws">
                  <div id="fLpaw${id}" class="paws-front-left"></div>
                  <div id="fRpaw${id}" class="paws-front-right"></div>
                  <div id="bLpaw${id}" class="paws-back-left"></div>
                  <div id="bRpaw${id}" class="paws-back-right"></div>
                </div>
              </div>

              <div id="head${id}" class="head">
                <div id="midDot${id}" class="cat__head-dots">
                  <div id="rightDot${id}" class="cat__head-dots_first"></div>
                  <div id="leftDot${id}" class="cat__head-dots_second"></div>
                </div>

                <div id="catEye${id}" class="cat__eye">
                    <div class="cat__eye--left">
                        <span id="lPupil${id}" class="pupil-left"></span>
                    </div>
                    <div class="cat__eye--right">
                      <span id="rPupil${id}" class="pupil-right"></span>
                    </div>
                </div>
                  

                <div id="catNose${id}" class="nose"></div>

                <div id="mouth-contour${id}" class="cat__mouth-contour"></div>
                <div class="cat__mouth-left"></div>
                <div class="cat__mouth-right"></div>

                <div class="whiskers">
                  <div class="whisker-l1"></div>
                  <div class="whisker-l2"></div>
                  <div class="whisker-l3"></div>
                  <div class="whisker-r1"></div>
                  <div class="whisker-r2"></div>
                  <div class="whisker-r3"></div>
                </div>
              </div>
            </div>
            <br /><br>
            <div class="dnaDiv" id="catDNA">
            <b>
        
              Gen:${generation}
              DNA:${dna}
                <button class="btn btn-outline-success" id="selectSaleBtn${id}" onclick="selectCatForSale(${id})" data-toggle="modal" data-target=".bd-example-modal-lg">Sell</button>
                
                <button class="btn btn-warning light-b-shadow" id="buyBtn${id}" onclick="selectCatToBuy(${id})"><b>Buy ${price} ETH</b></button>
                <button class="btn btn-danger" id="cancelBtn${id}" onclick="cancelSale(${id})">Withdraw</button>
            </b>
          </div>
        </div>`

    if(!isMarketPlace){
      $("#catsDiv").append(catDiv);
      $(`#buyBtn${id}`).hide();
      $(`#cancelBtn${id}`).hide();
      $(`#selectSaleBtn${id}`).show();
    }
    else {
      $("#catsDivSale").append(catDiv);
      // $(`#buyBtn${id}`).show();
      // $(`#cancelBtn${id}`).show();
      $(`#selectSaleBtn${id}`).hide();

      if(owner === user){
        $(`#buyBtn${id}`).hide();
        $(`#cancelBtn${id}`).show();
      }
      else{
        $(`#buyBtn${id}`).show();
        $(`#cancelBtn${id}`).hide();
      }
    }
}