//append cats from contract onto the catalog page
function appendCat(dna, id){

    //first find and return cat DNA into readable string
    var KittyDna = catDna(dna);

    //then, build the catBox div into HTML element
    catBox(id);

    //and then renter the cat CSS style depending on the string
    renderCat(KittyDna, id);
    $("#catDNA" + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>0</h4></span>
    <br>
    <span class="badge badge-ligh"><h4 class="tsp-2 m-0"><b>DNA:</b>` + dna + `"</h4></span>
    `)
}

//apply cat CSS from buildCat.js
function renderCat(dna, id) {
  headColor(dna.headcolor, id)
  mouthAndBelly(dna.mouthColor, id)
  eyeColor(dna.eyesColor, id)
  earsAndPaw(dna.earsColor, id)
  eyeVariation(dna.eyesShape, id)
  decorationVariation(dna.decorationPattern, id)
  midColor(dna.decorationMidcolor, id)
  sidesColor(dna.decorationSidescolor, id)
  animationVariation(dna.animation, id)
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
var name = "";
var string = "Hello " + name + "!";

function catBox(id){
    var catDiv = `<div class="col-lg-4 pointer fit-content">
                <div class="featureBox catDiv">

                <div class="ears">
                    <div id="leftEar"` + id + `" class="leftEar">
                        <div class="inner-ear-left"></div>
                    </div>
                    <div id="rightEar"` + id + `" class="right-ear">
                        <div class="inner-ear-right"></div>
                    </div>
                </div>

                <div class="body">
                  <div id="catBody"` + id + `" class="cat_body"></div>

                  <div id="catBelly"` + id + `" class="belly"></div>

                  <div class="paws">
                    <div id="fLpaw"` + id + `" class="paws-front-left"></div>
                    <div id="fRpaw"` + id + `" class="paws-front-right"></div>
                    <div id="bLpaw"` + id + `" class="paws-back-left"></div>
                    <div id="bRpaw"` + id + `" class="paws-back-right"></div>
                  </div>
                </div>
                
                <div id="head"` + id + `" class="head">
                    <div id="midDot` + id + `" class="cat__head-dots">
                    <div id"rightDot` + id + `" class="cat__head-dots_first">
                    <div id"leftDot` + id + `" class="cat__head-dots_second">
                </div>

                
                <div id="catEye"` + id + `" class="cat__eye">
                    <div class="cat__eye--left">
                        <span class="pupil-left"></span>
                    </div>
                    <div class="cat__eye--right">
                      <span class="pupil-right"></span>
                    </div>
                </div>
             
                <div id="catNose"` + id + `" class="nose"></div>

                <div id="mouth-contour"` + id + `" class="cat__mouth-contour">
                    <div class="cat__mouth-left"></div>
                    <div class="cat__mouth-right"></div>
                </div>

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
            <div class="dnaDiv" id="catDNA` + id + `"></div>

            <ul class="ml-5 cattributes">
              <li><span id="eyeName` + id + `"></span> eyes</li>
              <li><span id="decorationName` + id + `"></span> decoration</li>
              <li><span id="animationName` + id + `"></span></li>
            </ul>
          </div>`

          $("#catsDiv").append(catDiv)
}