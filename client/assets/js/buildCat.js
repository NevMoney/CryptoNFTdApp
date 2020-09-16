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
    $(`#lPupil${id}, #rPupil${id}`).css("background", "#" + color)
    console.log(color);
}

function earsAndPaw(code, id) {
    var color = colors[code]
    $("#head" + id + ", #fLpaw" + id + ", #fRpaw" + id + ", #bLpaw" + id + ", #bRpaw" + id).css("background", "#" + color)
}
//eye variation code
function eyeVariation2(num, id) {
    switch (Number(num)) {
        case 1:
          break;
        case 2:
          $("#catEye" + id).find("span").css("border-top", "15px solid");
          break;
        case 3:
          $("#catEye" + id).find("span").css("border-bottom", "15px solid");
          break;
        case 4:
          $("#catEye" + id).find("span").css("border-left", "15px solid");
          $("#catEye" + id).find("span").css("border-right", "15px solid");
          break;
        case 5:
          $("#catEye" + id).find("span").css("border", "10px solid");
          break;
        case 6:
          $("#catEye" + id).find("span").css("border-left", "15px solid black");
          break;
        case 7:
          $("#catEye" + id).find("span").css("border-right", "15px solid black");
          break;
      }  
      console.log(num, id);
 }
 
 //decoration variation: 
 function decorationVariation2(code, id) {
    switch (Number(code)) {
        case 1:
            break;
        case 2:
            $("#midDot" + id).css({
                transform: "rotate(30deg)",
                height: "35px",
                width: "14px",
                top: "1px",
                "border-radius": "0 50% 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(30deg)",
                height: "35px",
                width: "14px",
                top: "1px",
                "border-radius": "50% 0 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(15deg)",
                height: "35px",
                width: "14px",
                top: "-10px",
                "border-radius": "0 50% 50% 50%",
            });
            break;
        case 3:
            $("#midDot" + id).css({
                transform: "rotate(-30deg)",
                height: "35px",
                width: "14px",
                top: "1px",
                "border-radius": "50% 0 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(-30deg)",
                height: "35px",
                width: "14px",
                top: "-5px",
                "border-radius": "50% 0 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(-30deg)",
                height: "35px",
                width: "14px",
                top: "1px",
                "border-radius": "0 50% 50% 50%",
            });
            break;
        case 4:
            $("#midDot" + id).css({
                transform: "rotate(-15deg)",
                height: "35px",
                width: "14px",
                top: "1px",
                "border-radius": "50% 0 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(-30deg)",
                height: "45px",
                width: "14px",
                top: "-5px",
                "border-radius": "50% 0 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(45deg)",
                height: "45px",
                width: "14px",
                top: "10px",
                "border-radius": "0 50% 50% 50%",
            });
            break;
        case 5:
            $("#midDot" + id).css({
                transform: "rotate(0deg)",
                height: "15px",
                width: "14px",
                top: "5px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(0deg)",
                height: "10px",
                width: "14px",
                top: "5px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(0deg)",
                height: "10px",
                width: "14px",
                top: "5px",
                "border-radius": "50% 50% 50% 50%",
            });
            break;
        case 6:
            $("#midDot" + id).css({
                transform: "rotate(0deg)",
                height: "35px",
                width: "10px",
                top: "-15px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(-20deg)",
                height: "40px",
                width: "10px",
                top: "1px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(20deg)",
                height: "40px",
                width: "10px",
                top: "1px",
                "border-radius": "50% 50% 50% 50%",
            });
            break;
        case 7:
            $("#midDot" + id).css({
                transform: "rotate(0deg)",
                height: "65px",
                width: "10px",
                top: "1px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#rightDot" + id).css({
                transform: "rotate(15deg)",
                height: "60px",
                width: "10px",
                top: "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            $("#leftDot" + id).css({
                transform: "rotate(-15deg)",
                height: "60px",
                width: "10px",
                top: "20px",
                "border-radius": "50% 50% 50% 50%",
            });
            break;
    }
}

function midColor(code, id) {
    var color = colors[code]
    $("#midDot" + id).css("background", "#" + color)
}

function sidesColor(code, id) {
    var color = colors[code]
    $("#rightDot" + id + ", #leftDot" + id).css("background", "#" + color)
}

function animationVariation2(num, id) {
    switch (Number(num)) {
      case 1:
        break;
      case 2:
        $("#head" + id).addClass("movingHead");
        break;
      case 3:
        $("#leftEar" + id).addClass("movingEarsLeft");
        break;
      case 4:
        $("#rightEar" + id).addClass("movingEarsRight");
        break;
      case 5:
        $("#lPupil" + id + ", #rPupil" + id).addClass("sleepingKitty");
        break;
      case 6:
        $("#fRpaw" + id).addClass("movingFrontPaw");
        break;
      case 7:
        $("#rPupil" + id + ", #lPupil" + id).addClass("movingEyes");
        break;
    }
  }