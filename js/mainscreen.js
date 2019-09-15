var canvas = document.getElementById("mikeCanvas");
var context = canvas.getContext("2d");
var backContext = canvas.getContext("2d");
var Mike = Mike_right;
var mainimage = new Image();
mainimage.src = "image/mainscreen.png";

function startMainScreen(){
  context.drawImage(mainimage, 0, 0);
}

