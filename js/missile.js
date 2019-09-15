
var ballonList = []; // 풍선 배열
var ballonDelay = 10; // 풍선 딜레이
var ballon = new Image(); // 풍선 이미지
var speedballon = new Image(); // 파랑 풍선 이미지
ballon.src = "image/ballon.png";
speedballon.src = "image/speedballon.png";

function checkbumpPB() { // 비행기와 풍선이 만났는지 체크
  for (var i = ballonList.length - 1; i >= 0; i--) {
    var bal = ballonList[i];
    if (playerX + playerWidth / 2 < bal.x + 50 && playerX + playerWidth > bal.x + 30 &&
      ((playerY + playerHeight / 2 < bal.y + 50 && playerY + playerHeight > bal.y + 30) || (playerY + playerHeight / 2 < bal.y - 50 && playerY + playerHeight / 2 > bal.y - 30))) {
      dead = true;
    }
  }
}
function makeballon() {
  if (ballonDelay < 0) {
    var delay = Math.random() * 10;
    var result = Math.floor(delay);
    if (result != 1) {
      return;
    }
    var ballonY = Math.floor(Math.random() * 600);
    var speedballonY = Math.floor(Math.random() * 600);

    var obj = {};
    obj.x = endMap;
    obj.y = ballonY;
    if (ballonDelay % 4 == 0) {  //스피드
      obj.speed = 8;
    }
    else { //일반
      obj.speed = 4;
    }
    obj.isDead = false;
    ballonList.push(obj);
    ballonDelay = 10;
  }
}
function moveballon() {
  for (var i = 0; i < ballonList.length; i++) {
    var ballonlocal = ballonList[i];
    ballonlocal.x -= ballonlocal.speed;
    if (ballonlocal.x <= 980) {
      ballonlocal.isDead = true;
    }
  }
}
function removeballon() {
  for (var i = ballonList.length - 1; i >= 0; i--) {
    var temp = ballonList[i];
    if (temp.isDead) {
      ballonList.splice(i, 1);
    }
  }
}
function drawballon() {
  for (var i = 0; i < ballonList.length; i++) {
    var ballonlocal = ballonList[i];
    if (ballonlocal.speed == 4)
      context.drawImage(ballon, ballonlocal.x, ballonlocal.y, 100, 100);
    else if (ballonlocal.speed == 8) {
      context.drawImage(speedballon, ballonlocal.x, ballonlocal.y, 100, 100);
    }
  }
}
