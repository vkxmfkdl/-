// 목표지점 골인
function goal_in(){
  if(!goal)
    return;
  dy=0;
  stage++;
  init();
  goal = false;
  context.setTransform(1,0,0,1,0,0);

  if(stage > 4){
    clearInterval(intervalId);
    location.replace("end.html");
  }
}
