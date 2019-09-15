//구성요소 그리기
function draw(){
  drawBackground();
  drawMap();
  drawItem();
  drawPlayer();
  drawArrow();
  if(planemode)
    drawballon();
  if(knifeshooting)
    drawknife();
}
//맵 그리기
function drawMap(){
  for(var i = 0; i < map_array.length; i++){
    var map_temp = map_array[i];
    switch(map_temp.type){
      case 1:
      context.drawImage(map_tile_image1, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
      case 2:
      context.drawImage(map_tile_image2, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
      case 3:
      context.drawImage(map_tile_image3, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
      case 4:
      context.drawImage(map_tile_image4, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
      case 5:
      context.drawImage(map_tile_image5, map_temp.x, map_temp.y, map_temp.width, 10);
      break;
      case 6:
      context.drawImage(map_tile_image6, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
      case 7:
      context.drawImage(map_tile_image7, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
      break;
    }

  }
}
// 배경 그리기
function drawBackground(){
  switch(stage){
    case 1:
      context.drawImage(stage1_image, background_x-650, background_y-650);
    break;
    case 2:
      context.drawImage(stage2_image, background_x, background_y-2000);
    break;
    case 3:
        context.drawImage(stage3_image, background_x-920, background_y);
        context.drawImage(stage3_image, background_x+1000, background_y);
        context.drawImage(stage3_image, background_x+2920, background_y);
        context.drawImage(stage3_image, background_x-920, background_y-1200);
        context.drawImage(stage3_image, background_x+1000, background_y-1200);
        context.drawImage(stage3_image, background_x+2920, background_y-1200);
        context.drawImage(stage3_image, background_x-920, background_y-2400);
        context.drawImage(stage3_image, background_x+1000, background_y-2400);
        context.drawImage(stage3_image, background_x+2920, background_y-2400);

        break;
    case 4:
      context.drawImage(stage4_image, background_x-650, background_y-3000);
    break;
  }
}
// 플레이어 그리기
function drawPlayer(){
  if(leftkey==true){
    Mike = Mike_left;
  }
  else if(rightkey==true){
    Mike = Mike_right;
  }
  if(visible)
  context.drawImage(Mike, playerX, playerY, playerWidth, playerHeight);
}
//아이템 그리기
function drawItem(){
  for(var i = 0; i < item_array.length; i++){
    var map_temp = item_array[i];
    if(map_temp.what == 1 ){
      context.drawImage(map_item_image, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
    }
    else if(map_temp.what == 2){
      context.drawImage(map_cannon_image, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
    }
    else if(map_temp.what == 3){
      context.drawImage(map_goal_image, map_temp.x, map_temp.y, map_temp.width, map_temp.height);
    }
  }
}
