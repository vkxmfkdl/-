
var Arrowx=0;
var Arrow=0;
var velocity =40;/* 사용자가 입력한 공의 초기속도 */
var angle = 45;   /* 사용자가 입력한 공의 초기각도 */
var ballVx ;
var ballVy ;
var cannoncal = false;
var cannonX;
var cannonY;

// 캐논 발사
function Cannonshoot() {
    cannonmode = false;
    cannoncal = true;
    var angleR = angle * Math.PI / 180;
    ballVx = velocity * Math.cos(angleR);
    ballVy = -velocity * Math.sin(angleR);
    grounded = false;
}
// 캐논 계산
function Cannoncalculate() {
        if(ballVy <5)
          ballVy = ballVy + 1;
        playerX = playerX + ballVx;
        playerY = playerY + ballVy;
}
// 발포 방향 결정
function drawArrow(){
  if(cannonmode){
    context.beginPath();
    context.moveTo(cannonX,cannonY);
    if(upkey){
      if(Arrowx>-40){
        angle=angle+1;
        Arrowx--;
      }
    }
    if(downkey){
      if(Arrowx<40){
        angle=angle-1;
        Arrowx++;
      }
    }
    Arrow=(100+Arrowx)*(100+Arrowx);
    context.lineTo(cannonX+100+Arrowx,cannonY-Math.sqrt(20000-Arrow));
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.stroke();
  }
}
