var colors = Object.values(allColors())

function headColor(code, id) {
    var color = colors[code]
    $("#catBody" + id).css("background", "#" + color)
}

function mouthAndBelly(code, id) {
    var color = colors[code]
    $("#leftEar" + id + ", #rigthEar" + id + ", #catNose" + id + ", #mouth-contour" + id).css("background", "#" + color)
}

function eyeColor(code, id) {
    var color = colors[code]
    $("#catEye" + id).css("background", "#" + color)
}

function earsAndPaw(code, id) {
    var color = colors[code]
    $("#head" + id + ", #fLpaw" + id + ", #fRpaw" + id + ", #bLpaw" + id + ", #bRpaw" + id).css("background", "#" + color)
}

function midColor(code, id) {
    var color = colors[code]
    $("#midDot" + id).css("background", "#" + color)
}

function sidesColor(code, id) {
    var color = colors[code]
    $("#rightDot" + id + ", #leftDot" + id).css("background", "#" + color)
}

//need to figure out how to get the decoration change to display

// function eyeVariation(code, id) {
//     var color = colors[code]
//     $("#catEye" + id).css("background", "#" + color)
// }

// function animationVariation(code, id) {
//     var color = colors[code]
//     $("#catEye" + id).css("background", "#" + color)
// }