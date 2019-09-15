var playerleftcollison = false;
var playerrightcollison = false;

// 캐릭터, 맵 혹은 아이템 충돌 여부 확인
function collisionDetection(map_collision) {
  if (map_collision.x + map_collision.width > playerX && map_collision.x < playerX + playerWidth
    && map_collision.y < playerY + playerHeight && map_collision.y + map_collision.height > playerY) {
    return true;
  }
  return false;
}
// 아이템, 캐릭터 충돌
function checkItemCollider() {
  for (var i = 0; i < item_array.length; i++) {
    if (collisionDetection(item_array[i])) {
      if (item_array[i].what == 1) {
        if (item_array[i].type == 0) {
          playerHeight = 20;
          Mike_left = item_array[i].propertyImage2;
          Mike_right = item_array[i].propertyImage1;
          item_array.splice(i, 1);
        }
        else if (item_array[i].type == 1) { //땅 사라짐
          var j = map_array.length - 11;
          map_array.splice(j, 5);
          item_array.splice(i, 1);
        }
        else if (item_array[i].type == 2) { //비행모드
          planemode = true;

          Mike_left = item_array[i].propertyImage3;
          Mike_right = item_array[i].propertyImage4;
          item_array.splice(i, 1);
        }
        else if (item_array[i].type == 3) { //이동 수리검
          knifemode = true;
          knifeon = true;
          Mike_left = item_array[i].propertyImage6;
          Mike_right = item_array[i].propertyImage5;
          item_array.splice(i, 1);
          var j = map_array.length - 25;
          map_array.splice(j, 25);
          knifecount = 150;
        }
        else if (item_array[i].type == 4) {
          thepig = true;
          playernomal = false;
          Mike_left = item_array[i].propertyImage7;
          Mike_right = item_array[i].propertyImage8;
          item_array.splice(i, 1);
        }
        else if (item_array[i].type == 5) { //수리검 카운트 1개
          knifemode = true;
          knifeon = true;
          Mike_left = item_array[i].propertyImage6;
          Mike_right = item_array[i].propertyImage5;
          item_array.splice(i, 1);
          knifecount = 1;
        }
      }
      else if (item_array[i].what == 2) { //대포충돌
        var temp = item_array[i];
        cannonmode = true;
        visible = false;
        cannonX = temp.x + temp.width / 2;
        cannonY = temp.y;
        playerX = cannonX;
        if (stage == 1)
          playerY = cannonY - 20;
        else {
          playerY = cannonY - 50;
        }
      }
      else if (item_array[i].what == 3) {
        goal = true;
        goal_in();
      }
    }
  }
}
// 타일 충돌 여부 확인
function checkTileCollider() {
  for (var i = 0; i < map_array.length; i++) {
    colmap = map_array[i];
    if (collisionDetection(colmap)) {
      if (playerX < colmap.x && playerY + playerHeight / 2 >= colmap.y && playerY + playerHeight * (1 / 3) < colmap.y + colmap.height) { //오른쪽 충돌
        playerX = colmap.x - playerWidth;
      }
      else if (playerX > colmap.x && playerY + playerHeight / 2 >= colmap.y && playerY + playerHeight * (1 / 3) < colmap.y + colmap.height) { //왼쪽 충돌
        playerX = colmap.x + colmap.width;
      }
      if (playerY > colmap.y && playerY < colmap.y + colmap.height && (playerX + playerWidth) > colmap.x + 10 && playerX < (colmap.x + colmap.width) - 10 && dy <= 0) {//머리충돌
        dy = 0;
        playerY = colmap.y + colmap.height;
      }
      if (playerY + playerHeight / 2 < colmap.y && (playerX + playerWidth) > colmap.x + 10 && playerX < (colmap.x + colmap.width) - 10 && dy >= 0) { //바닥충돌

        if (colmap.property == 2) {

          if (colmap.flag == false) { //움직이는 타일 충돌시 플레이어 움직임
            playerX -= colmap.speed;
          }
          else if (colmap.flag == true) {
            playerX += colmap.speed;
          }
          playerY = colmap.y - playerHeight;
        }
        else if (colmap.property == 3) {
          dead = true;
        }
        // 뚱뚱 상태에서 버튼누를때
        else if (colmap.property == 4) {
          chainbutton = true;
          playerY = colmap.y - playerHeight;
          if (!thepig) {
            for (var pg = 0; pg < map_array.length; pg++) {
              if (map_array[pg].property == 5) {
                if (map_array[pg].originy - 10 < map_array[pg].y) {
                  map_array[pg].y -= 1;
                }
              }
            }
          }
          else {
            for (var pg = 0; pg < map_array.length; pg++) {
              if (map_array[pg].property == 5)
                map_array[pg].y -= 2;
            }
          }
        }
        else {
          chainbutton = false;
        }
        playerY = colmap.y - playerHeight;
        dy = 0;
        grounded = true;

      }
      cannoncal = false;
    }

  }
}
