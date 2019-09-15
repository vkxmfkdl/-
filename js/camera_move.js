var firstBackgroundX = 0;
var firstBackgroundY = 0;
var prevX = playerX;
var prevY = playerY;
var xOffset = playerX - prevX;
var yOffset = playerY - prevY;
// 이전 좌표
function PreviousX(prevX, prevY){
  if(this.prevX != prevX)
    this.prevX = prevX;
  if(this.prevY != prevY)
    this.prevY = prevY;
}
// 게임 카메라 좌표
function GameCamera(xOffset, yOffset){
  this.xOffset = xOffset;
  this.yOffset = yOffset;
}
// offset
function OffsetMove(){
  xOffset = prevX - playerX;
  yOffset = prevY - playerY;
}
// 차이만큼 이동
function MoveCamera(){
context.translate(xOffset, yOffset);
}
