//this file takes the blockchain cat to implement the IDs from the DNA and owner
//it then passes the functions to catalogDisplay file to show cats owner has

var colors = Object.values(allColors());

function headColor2(code, id) {
    var color = colors[code]
    $("#catBody" + id).css("background", "#" + color)
}

function mouthAndBelly(code, id) {
    var color = colors[code]
    $("#leftEar" + id + ", #rightEar" + id + ", #catNose" + id + ", #mouth-contour" + id).css("background", "#" + color)
}

function eyeColor2(code, id) {
    var color = colors[code]
    $("#catEye" + id).css("background", "#" + color)
}

function earsAndPaw(code, id) {
    var color = colors[code]
    $("#head" + id + ", #fLpaw" + id + ", #fRpaw" + id + ", #bLpaw" + id + ", #bRpaw" + id).css("background", "#" + color)
}

function eyeVariation2(code, id) {
    var color = shapes[code]
    $("#catEye" + id).css("background", "#" + color)
 }
 
 function decorationVariation2(code, id) {
    var color = shapes[code]
    $("#catEye" + id).css("background", "#" + color)
 }

function midColor(code, id) {
    var color = colors[code]
    $("#midDot" + id).css("background", "#" + color)
}

function sidesColor(code, id) {
    var color = colors[code]
    $("#rightDot" + id + ", #leftDot" + id).css("background", "#" + color)
}

function animationVariation2(code, id) {
   var color = shapes[code]
   $("#catEye" + id).css("background", "#" + color)
}

