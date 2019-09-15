var Mike_left = new Image();
Mike_left.src = "image/Mike.png";
var Mike_right = new Image();
Mike_right.src = "image/Mike2.png";

var playerX = 50;     //플레이어 XY 좌표
var playerY = 550;
var playerWidth = 50;
var playerHeight = 50;
var playerMoveSpeed;
var prevX;
var offsetX;
var playernomal = true; // 평소 상태
var dead = false;       // 사망 여부

//키조작
var leftkey = false;
var rightkey = false;
var upkey = false;
var downkey = false;
var wkey = false;
var akey = false;
var skey = false;
var dkey = false;
var keypress = false;

var crush = false;
var grounded = false;
var cannonmode = false; //캐논 쏠 때
var visible = true;
var dy = 1;
var dx = 0;

// 뚱뚱한 마이크 모드
var thepig = false;
// 비행 마이크 모드
var planemode = false;
// 수리검 마이크 모드
var knifeon = false;
var knifemode = false;

var jumpSpeed = 7;
var graboolean = true;
var gravity = 0.2;

// 캐릭터 이동 스피드
function player_speed() {
  // 충돌 상태
  if (playerleftcollison || playerrightcollison)
    playerMoveSpeed = 0;
  // 일반 이동
  else if (playernomal)
    playerMoveSpeed = 3;
  // 비행 모드 이동
  else if (planemode)
    playerMoveSpeed = 5;
  // 뚱뚱 모드 이동
  else if (thepig)
    playerMoveSpeed = 2;
}

// 캐릭터 중력
function player_gravity() {
  if (!planemode) {
    if (playerY + playerHeight > canvas.height + 400) {
      playerY -= dy;
    }
    else {
      if (dy < 5)
        dy += gravity;
    }
    playerY += dy;
  }
}

// 캐릭터 이동
function player_move() {
  // 캐릭터 비행 모드 해제
  if (playerY < -150 && playerX > 1800)
    planemode = false;
  // 캐릭터 속도 초기화
  player_speed();
  // 비행모드 이동
  if (planemode) {
    if (rightkey) {
      playerX += playerMoveSpeed;
    }
    else if (leftkey) {
      playerX -= playerMoveSpeed;
    }
    if (upkey) {
      playerY -= playerMoveSpeed;
    }
    else if (downkey) {
      playerY += playerMoveSpeed;
    }
  }
  // 캐논모드 이동
  if (cannonmode == false) {
    if (rightkey) {
      playerleftcollison = false;
      playerX += playerMoveSpeed;
    }
    else if (leftkey) {
      playerrightcollison = false;
      playerX -= playerMoveSpeed;
    }
    if (upkey == true && grounded == true) {
      playerrightcollison = false;
      playerleftcollison = false;
      dy = -jumpSpeed;
      grounded = false;
    }
  }
}

document.addEventListener("keydown", onkey_press, false);
document.addEventListener("keyup", onkey_up, false);
function onkey_press() {      //키눌렀을때
  if (event.keyCode == 37) {    //왼쪽이동
    leftkey = true;
  }
  else if (event.keyCode == 39) {    //오른쪽이동
    rightkey = true;
  }
  if (event.keyCode == 38) { 
    upkey = true;
  }
  else if (event.keyCode == 40) {
    downkey = true;
  }
  if (event.keyCode == 90) {          //z키 공격
    keypress = true;
    if (cannonmode == true) {
      visible = true;
      Cannonshoot();
    }
  }


}
function onkey_up() {      //키땠을때
  if (event.keyCode == 37) {    //x이동
    leftkey = false;
  }
  else if (event.keyCode == 39) {    //x이동
    rightkey = false;
  }
  if (event.keyCode == 38) {
    upkey = false;
  }
  else if (event.keyCode == 40) {
    downkey = false;
  }
  if (event.keyCode == 90) {          //z키 공격
    keypress = true;
    if (cannonmode == true) { // 대포발사
      visible = true;
      Cannonshoot();
    }
    if (knifemode && knifeshooting) {  // 나이프로 이동
      context.translate(playerX - knifeX, playerY - knifeY);
      knifeshooting = true;
      teleport();
      OffsetMove();
    }
  }
  if (knifeon && knifecount > 0) {
    if (event.keyCode == 87) { // w
      knifeshooting = true;
      wkey = true;
      knifeX = playerX;
      knifeY = playerY;
      knifeon = false;
    }
    else if (event.keyCode == 65) { // a
      knifeshooting = true;
      akey = true;
      knifeX = playerX;
      knifeY = playerY;
      knifeon = false;
    }
    else if (event.keyCode == 83) { // s
      knifeshooting = true;
      skey = true;
      knifeX = playerX;
      knifeY = playerY;
      knifeon = false;
    }
    else if (event.keyCode == 68) { // d
      knifeshooting = true;
      dkey = true;
      knifeX = playerX;
      knifeY = playerY;
      knifeon = false;
    }
  }

}

// 플레이어 사망
function PlayerDeath() {
  if (!dead) {
    return;
  }
  context.setTransform(1, 0, 0, 1, 0, 0);
  clickStart = false;
  dead = false;
  init();
  clearInterval(intervalId);
  startMainScreen();
  okvisible();
}
