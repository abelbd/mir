var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;
wMiddle = canvas.width/2;
hMiddle = canvas.height/2;
// console.log('n' + wMiddle);
// function drawCoord(){
//   ctx.beginPath();
//   ctx.moveTo(wMiddle,0);
//   ctx.lineTo(hMiddle,height);
//   ctx.strokeStyle = "#3498DB";
//   ctx.stroke();
// //
//   ctx.beginPath();
//   ctx.moveTo(0,wMiddle);
//   ctx.lineTo(width,hMiddle);
//   ctx.strokeStyle = "#3498DB";
//   ctx.stroke();
// //
//   for (var i = 1; i < 4; i++) {
//     y = i * (height / 4);
//     for (var j = 1; j < 4; j++) {
//       var x = j * (width / 5);
//       ctx.beginPath();
//       ctx.arc(x,y,4,0,2 * Math.PI);
//       ctx.fillText("" + x + ", " + y + "",(x + 5), y);
//       ctx.stroke();
//     }
//   }
// }
// drawCoord();


function showTopoGrande() {
  var topogd = new Image();
  topogd.src="img/WAV16.svg";
  topogd.onload=function() {
    ctx.drawImage(topogd, width-width/4, height-height/2.5);
  }
}
showTopoGrande();

function showTopo() {
  var topo = new Image();
  topo.src="img/WAV13.svg";
  topo.onload=function() {
    ctx.drawImage(topo, wMiddle-topo.width/2, hMiddle-topo.height/2);
  }
}
showTopo();

function showGround() {
  var hoyo= new Image();
  hoyo.src="img/WAV9.svg";
  hoyo.onload=function () {
    for (var i = 1; i < 4; i++) {
      var y = ((height / 3 * i) - hoyo.height/2);
      for (var j = 1; j < 4; j++) {
        x = ((width / 4 * j) - hoyo.width/2);
        ctx.drawImage(hoyo, x, y);
      }
    }
  }
}
showGround();

function showHojasVerdes() {
  var hojas = new Image();
  hojas.src="img/WAV8.svg";
  hojas.onload=function() {
    ctx.drawImage(hojas,0,0,width,height);
  }
}showHojasVerdes();
