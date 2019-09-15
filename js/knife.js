var knife = new Image();
knife.src = "image/knife.png";
var knifeX = 2000;
var knifeY = -100;
var knifeHeight = 30;
var knifeWidth = 30;
var knifespeed = 10;
var knifecollison = false;
var knifeshooting = false;
var knifecount = 100;

// 나이프 이동
function shootknife() {
  if (!knifecollison) {
    if (wkey)
      knifeY -= knifespeed;
    else if (akey)
      knifeX -= knifespeed;
    else if (skey)
      knifeY += knifespeed;
    else if (dkey)
      knifeX += knifespeed;
  }
}

// 나이프 충돌 여부
function knifeDetection(map_collision) {
  if (map_collision.x + map_collision.width > knifeX && map_collision.x < knifeX + knifeWidth
    && map_collision.y < knifeY + knifeHeight && map_collision.y + map_collision.height > knifeY) {
    return true;
  }
  return false;
}

// 나이프 충돌
function knifeTileCollider() {
  for (var i = 0; i < map_array.length; i++) {
    colmap = map_array[i];
    if (knifeDetection(colmap)) {
      if (knifeX < colmap.x && knifeY + knifeHeight / 2 >= colmap.y && knifeY + knifeHeight * (1 / 3) < colmap.y + colmap.height) { //오른쪽 충돌
        knifeX = colmap.x - knifeYWidth;
        knifespeed = 0;
        knifecollison = true;
      }
      else if (knifeX > colmap.x && knifeY + knifeHeight / 2 >= colmap.y && knifeY + knifeHeight * (1 / 3) < colmap.y + colmap.height) { //왼쪽 충돌
        knifeX = colmap.x + colmap.width;
        knifespeed = 0;
        knifecollison = true;
      }
      if (knifeY > colmap.y && knifeY < colmap.y + colmap.height && (knifeX + knifeWidth) > colmap.x + 10 && knifeX < (colmap.x + colmap.width) - 10 && dy <= 0) {//머리충돌
        knifeY = colmap.y + colmap.width;
        knifespeed = 0;
        knifecollison = true;
      }
      if (knifeY + knifeHeight / 2 < colmap.y && (knifeX + knifeWidth) > colmap.x + 10 && knifeX < (colmap.x + colmap.width) - 10 && dy >= 0) { //바닥충돌
        knifeY = colmap.y - knifeHeight;
        knifespeed = 0;
        knifecollison = true;
      }
    }
  }
}

// 나이프 그리기
function drawknife() {
  context.drawImage(knife, knifeX, knifeY, knifeWidth, knifeHeight);
}

// 순간 이동
function teleport() {
  wkey = false;
  akey = false;
  skey = false;
  dkey = false;
  knifecollison = false;
  knifeshooting = false;
  knifeon = true;
  knifespeed = 10;
  playerX = knifeX;
  playerY = knifeY;
  knifecount--;
}
