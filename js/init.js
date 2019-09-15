

//초기화
function init(){
  Map_Init();
  player_init();
}

//인터벌 함수
//게임 시작
function gameStart(){
  intervalId = setInterval(function(){
    if(dead){
      PlayerDeath();
      return;
    }
    bgm();
    PreviousX(playerX, playerY);
    player_gravity();
    player_move();
    tile_move();
    downChain();
    // 비행 모드
    if(planemode){
      makeballon();
      moveballon();
      removeballon();
      checkbumpPB();
      ballonDelay--; // 풍선 딜레이
    }
    // 수리검 모드
    if(!knifecollison){
      shootknife();
      knifeTileCollider();
    }
    // 캐논 모드
    if(cannoncal&& !grounded)
      Cannoncalculate();
    checkTileCollider();
    checkItemCollider();
    OffsetMove();
    MoveCamera();
    draw();             //캔버스 draw
  },10);  //0.01s실행
}

// 캐릭터 초기화
function player_init(){
  playerX = 625;
  playerY = 360;
  knifemode= false;
  knifeshooting =false;
  thepig = false;
  knifeon = false ;
  planemode = false;
  knifecollison= false;
  playernomal = true;
  prevX = playerX;
  prevY = playerY;
  playerHeight = 50;
  playerWidth = 50;
  Mike_left.src = "image/Mike.png";
  Mike_right.src = "image/Mike2.png";
}