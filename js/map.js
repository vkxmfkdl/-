var stage1_image = new Image();
var stage2_image = new Image();
var stage3_image = new Image();
var stage4_image = new Image();
var map_tile_image1 = new Image();
var map_tile_image2 = new Image();
var map_tile_image3 = new Image();
var map_tile_image4 = new Image();
var map_tile_image5 = new Image();
var map_tile_image6 = new Image();
var map_tile_image7 = new Image();
map_tile_image1.src = "image/map_tile.png";
map_tile_image2.src = "image/map_tile2.png";
map_tile_image3.src = "image/map_tile3.png";
map_tile_image4.src = "image/map_tile4.png";
map_tile_image7.src = "image/map_tile5.png";
map_tile_image6.src = "image/map_tile6.png";
map_tile_image5.src = "image/pressButton.png";
stage1_image.src = "image/background.jpg";
stage2_image.src = "image/background2.jpg";
stage3_image.src = "image/background3.jpg";
stage4_image.src = "image/background4.jpg";
var map_item_image = new Image();
map_item_image.src = "image/itembox.png";
var map_cannon_image = new Image();
map_cannon_image.src = "image/cannon.png";
var map_goal_image = new Image();
map_goal_image.src = "image/goal.png";

var map_array = new Array();
var item_array = new Array();
var chain_array = new Array();
var background_speed = 0.0001;
var background_x = 0;
var background_y = 0;

var tile_width = 50;
var tile_height = 50;
var tile_speed = 2;
var tile_count = 0;
var frame = 0;
var flag=false;
var goal = false;
var stage = 1;
var chainbutton = false;
var endMap;
var highestEnd;

//맵 크기

// 맵 타일 객체
function map_tile(){
  var width;
  var height;
  var x;
  var y;
  var speed;
  var flag;
  var property; // 1: 가만히 있는 타일 2: 이동 타일
  var type;
  var originx;
  var originy;
}

// 필드에 맵 타일 추가
function addMapTile(x, y, width, height, speed, flag, frame, property, type){
  var new_map = new map_tile();
  new_map.x = x;
  new_map.y = y;
  new_map.width = width;
  new_map.height = height;
  new_map.speed = speed;
  new_map.flag = flag;
  new_map.frame = frame;
  new_map.property = property;
  new_map.type = type;
  new_map.originx = x;
  new_map.originy = y;
  map_array.push(new_map);
  return new_map;
}

// 아이템 요소들
function map_item(){
  var width;
  var height;
  var x;
  var y;
  var propertyImage;
  var what; // 아이템 = 1 대포 = 2 골인 깃발 =3
  var type = 0;
}

// 필드에 맵 아이템 추가
function addMapitem(x, y, width, height, what, type){
  var new_item = new map_item();
  new_item.x = x;
  new_item.y = y;
  new_item.width = width;
  new_item.height = height;
  new_item.propertyImage1 = new Image();
  new_item.propertyImage1.src = "image/smallMike.png";
  new_item.propertyImage2 = new Image();
  new_item.propertyImage2.src = "image/smallMike2.png";
  new_item.propertyImage3 = new Image();
  new_item.propertyImage3.src = "image/devilMike1.png";
  new_item.propertyImage4 = new Image();
  new_item.propertyImage4.src = "image/devilMike2.png";
  new_item.propertyImage5 = new Image();
  new_item.propertyImage5.src = "image/knifeMike1.png";
  new_item.propertyImage6 = new Image();
  new_item.propertyImage6.src = "image/knifeMike.png";
  new_item.propertyImage7 = new Image();
  new_item.propertyImage7.src = "image/pigMike1.png";
  new_item.propertyImage8 = new Image();
  new_item.propertyImage8.src = "image/pigMike2.png";
  new_item.what = what;
  new_item.type = type;
  item_array.push(new_item);
}

function addChainMap(chain){
  chain_array.push(chain);
}

//움직이는 타일
function tile_move(){
  for(var i = 0; i < map_array.length; i++){
    var map_temp = map_array[i];
    if(map_temp.property == 2){
      if(map_array[i].frame%100==0&&map_array[i].flag==false){
        map_array[i].flag = true;
        map_array[i].frame=0;
      }
      else if(map_array[i].frame%100==0&&map_array[i].flag==true){
        map_array[i].flag = false;
      }
      if(map_array[i].flag){
        map_array[i].x+=map_temp.speed;
      }
      else{
        map_array[i].x-=map_temp.speed;
      }
      map_array[i].frame++;
    }
  }
}

//맵 초기화
function Map_Init(){
  /////// 스테이지 1 ///////
  map_array.splice(0, map_array.length);
  item_array.splice(0, item_array.length);
  switch(stage){
    case 1:
      endMap = 1250;
      highestEnd = 0;

      for(var i = 0; i < 26; i++){
        addMapTile(50*i+200, 720-50, tile_width, tile_height, 0, false, frame, 1, 1);
        addMapTile(50*i+200, 720, tile_width, tile_height, 0, false, frame, 1, 1);
        addMapTile(50*i+200, 720+50, tile_width, tile_height, 0, false, frame, 1, 1);
        addMapTile(50*i+200, 720+100, tile_width, tile_height, 0, false, frame, 1, 1);   //바닥
      }
      for(var i = 0; i < 100; i++){
        addMapTile(50*i-500, 720+200, tile_width, tile_height, 0, false, frame, 3, 4);  //가시밭
      }
      for(var i = 0; i < 26; i++){
        addMapTile(50*i+200, 720-100, tile_width, tile_height, 0, false, frame, 1, 1);
      }
      for (var i= 0; i<3;i++){
        addMapTile(100+200,720-270-i*160,tile_width, tile_height, 0, false, frame, 1, 1);
      }
      for (var i= 0; i<3;i++){ //이동하는 타일
        addMapTile(220+200,720-200-i*150,tile_width, tile_height, tile_speed, false, frame, 2, 1);
      }
      for (var i=0 ; i<2;i++){
        addMapTile(50*i+200,130,tile_width, tile_height, tile_speed, false, frame, 1, 1);
      }

      for (var i=0 ; i<11;i++){  // 중간 벽
        addMapTile(550+200,720-180-i*50,tile_width, tile_height, tile_speed, false, frame, 1, 1);
      }

      for (var i=0; i<6;i++){
        addMapTile(1250-150+200,720-150-i*50,tile_width, tile_height,tile_speed, false, frame, 1, 1);
      }
      for (var i=0; i<4;i++){
        addMapTile(1250-150+i*50+200,170,tile_width, tile_height, tile_speed, false, frame, 1, 1);
      }
      for (var i=0; i<10; i++){
        addMapTile(1250-150+50*6,170-50*i,tile_width, tile_height,tile_speed, false, frame, 1, 1);
      }
      addMapitem(50+200,90,40,40,1, 0); // 아이템
      addMapitem(700+200,720-195,100,100,2, 0); // 대포
      addMapitem(1170+200,720-200,80,100,3, 0); // 깃발
    break;


    //스테이지 2
    case 2:
      endMap = 4500;
      highestEnd = -2000;
      for(var i = 0; i < 50; i++){
        addMapTile(-50, 900-50*i, tile_width, tile_height, 0, false, frame, 1, 3);  //옆 벽
        addMapTile(50*70, 900-50*i, tile_width, tile_height, 0, false, frame, 1, 3);
      }
      for(var i = 0; i < 30; i++){
        addMapTile(50*i, 720-50, tile_width, tile_height, 0, false, frame, 1, 3); //바닥
        addMapTile(50*i, 720, tile_width, tile_height, 0, false, frame, 1, 3);
        addMapTile(50*i, 720+50, tile_width, tile_height, 0, false, frame, 1, 3);
        addMapTile(50*i, 720+100, tile_width, tile_height, 0, false, frame, 1, 3);
        addMapTile(50*i, 720+150, tile_width, tile_height, 0, false, frame, 1, 3);
        addMapTile(50*i, 720+200, tile_width, tile_height, 0, false, frame, 1, 3);
      }
      for(var i = 0; i < 30; i++){
        addMapTile(50*i, 720-100, tile_width, tile_height, 0, false, frame, 1, 2);   //지면
      }
      for(var i = 30; i < 90; i++){
        addMapTile(50*i, 720+200, tile_width, tile_height, 0, false, frame, 3, 4);    //가시 밭
      }
      addMapTile(50*30, 720-180, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*44, 720-180, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*32, 720-280, tile_width, tile_height, 2, false, frame, 2, 2);   //움직이는 타일
      addMapTile(50*42, 720-280, tile_width, tile_height, 2, true, frame, 2, 2);   //움직이는 타일
      for(var i = 48; i < 70; i++){
        addMapTile(50*i, 720-100, tile_width, tile_height, 0, false, frame, 1, 2);
      }
  addMapitem(50*25, 720-150,40,40,1, 4);  //돼지 아이템
    context.setTransform(1,0,0,1,0,0);
  //addMapitem(50*23,720-150,80,100,3, 0); // 깃발
      //ㅁ---->ㅁ             <-ㅁ
      //                ㅁ->
      //                      <-ㅁ
      //                ㅁ->
      addMapTile(50*57, 720-200, tile_width, tile_height, 2, false, frame, 2, 2);
      addMapTile(50*63, 720-320, tile_width, tile_height, 2, true, frame, 2, 2);
      addMapTile(50*57, 720-440, tile_width, tile_height, 2, false, frame, 2, 2);
      addMapTile(50*63, 720-560, tile_width, tile_height, 2, true, frame, 2, 2);
      addMapTile(50*49, 720-520, tile_width, tile_height, 3, true, frame, 2, 2);  //빠른 타일

      /*
              ㅁ
        ㅁ
              ㅁ
      ㅁ
      */
      addMapTile(50*40, 720-600, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*44, 720-720, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*41, 720-820, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*45, 720-920, tile_width, tile_height, 0, false, frame, 1, 2);

      /*ㅁ -->     ㅁ->*/
      addMapTile(50*49, 720-920, tile_width, tile_height, 3, false, frame, 2, 2);
      addMapTile(50*54, 720-920, tile_width, tile_height, 2, false, frame, 2, 2);

      addMapTile(50*51, 720-1030, tile_width, tile_height, 0, false, frame, 1, 2);
      for(var i = 50; i > 36; i--)      //마지막 땅
        addMapTile(50*i, 720-1160, tile_width, tile_height, 0, false, frame, 1, 2);
      addMapTile(50*43, 720-1170, tile_width, tile_height, 0, false, frame, 4, 5);   //버튼
      for(var i = 0; i < 20; i++){
        addChainMap(addMapTile(50*40, 720-1210-50*i, tile_width, tile_height, 0, false, frame, 5, 2));  //위로 올라가야하는 땅
      }
      addMapitem(50*38, 720-1210-50, 80,100,3,0);
      addMapitem(50*58, 720-1060,40,40,1, 4);  //돼지 아이템
      for(var i = 55; i > 50; i--){
        addMapTile(50*i, 720-570, tile_width, tile_height, 0, false, frame, 1, 2);  //아이템있는 땅
      }
      for(var i = 53; i > 47; i--){
        addMapTile(50*i, 720-440, tile_width, tile_height, 0, false, frame, 3, 4);  //아이템 밑에 있는 가시
      }
      addMapitem(50*51,720-620,40,40,1, 1); //
      break;


      //스테이지 3
      case 3:
    endMap = 3000;
    highestEnd = -2000;
    var sidetilecount = (highestEnd*-1)/50 +14 //왼쪽벽, 오른쪽 벽
    var overtilecount = (endMap)/50; // 위에벽 아래벽
    //왼쪽 테두리 벽
    for (var i=0; i<sidetilecount;i++){
      addMapTile(-50,highestEnd+i*50,tile_width, tile_height, tile_speed, false, frame, 1, 6);
    }
    //오른쪽 테두리 벽
    for (var i=0; i<sidetilecount;i++){
      addMapTile(endMap,highestEnd+i*50,tile_width, tile_height, tile_speed, false, frame, 1, 6);
    }
    //위에 테두리 벽
    for (var i=0; i<overtilecount;i++){
      addMapTile(i*50,highestEnd,tile_width, tile_height, tile_speed, false, frame, 1, 6);
    }
    // 아래 벽
    for (var i=0; i<overtilecount;i++){
      addMapTile(i*50,719, tile_width, tile_height, tile_speed, false, frame, 3, 4);  //닿으면 죽음
    }

    //시작 타일
    addMapTile(625,410,tile_width, tile_height, tile_speed, false, frame, 1, 6);

    for (var i= 0; i<3;i++){ //이동하는 타일
      addMapTile(505,260-i*150,tile_width, tile_height, tile_speed , false, frame, 2, 6);
    }
    for (var i= 0; i<3;i++){
      addMapTile(835,310-i*150,tile_width, tile_height, tile_speed , false, frame, 1, 6);
    }
    //첫번째 아이템 올라가잇는 타일
    for (var i= 0; i<10;i++){
      addMapTile(835+i*50,-130,tile_width, tile_height, tile_speed , false, frame, 1, 6);
    }
    addMapitem(1105,-170,40,40,1, 2); // 날아가는 아이템

    for (var i= 0; i<31;i++){
      addMapTile(0+i*50,-500,tile_width, tile_height, tile_speed , false, frame, 1, 6);
    }
    for (var i= 0; i<10;i++){
      addMapTile(1555,-500+i*50,tile_width, tile_height, tile_speed , false, frame, 1, 6);
    }
    for (var i= 0; i<5;i++){ //이동하는 타일
      addMapTile(2000,-300-i*400,tile_width, tile_height, tile_speed , false, frame, 2, 6);
    }
    for (var i= 0; i<3;i++){ //이동하는 타일
      addMapTile(2500,-400-i*400,tile_width, tile_height, tile_speed , true, frame, 2, 6);
    }
    for (var i= 0; i<4;i++){ //이동하는 타일
      addMapTile(1500,-600-i*400,tile_width, tile_height, tile_speed , false, frame, 2, 6);
    }
    for (var i= 0; i<4;i++){ //이동하는 타일
      addMapTile(1000,-500-i*400,tile_width, tile_height, tile_speed , true, frame, 2, 6);
    }
    for (var i= 0; i<8;i++){ //도착지점 타일 2600 -1760
      addMapTile(2600+i*50,-1760,tile_width, tile_height, tile_speed , true, frame, 1, 6);
    }
    for (var i= 0; i<25;i++){
      addMapTile(1555+i*50,-50,tile_width, tile_height, tile_speed , false, frame, 1, 6);
    }
    addMapitem(2000,-100,40,40,1,3); // 텔레포트 아이템
    addMapitem(2800,-1860,80,100,3,0); // 깃발
    break;
    case 4:
      endMap = 3000;
      highestEnd = -2000;
      var sidetilecount = (highestEnd*-1)/50 +14 //왼쪽벽, 오른쪽 벽
      var overtilecount = (endMap)/50; // 위에벽 아래벽
      //왼쪽 테두리 벽
      for (var i=0; i<sidetilecount;i++){
        addMapTile(-50,highestEnd+i*50,tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      //오른쪽 테두리 벽
      for (var i=0; i<sidetilecount;i++){
        addMapTile(endMap,highestEnd+i*50,tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      //위에 테두리 벽
      for (var i=0; i<overtilecount;i++){
        addMapTile(i*50,highestEnd,tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      // 아래 벽
      for (var i=0; i<overtilecount;i++){
        addMapTile(i*50,719, tile_width, tile_height, tile_speed, false, frame, 3, 4);  //닿으면 죽음
      }

      //시작 타일
      addMapTile(625,410,tile_width, tile_height, tile_speed, false, frame, 1, 7);
      for (var i=0; i<5;i++){
        addMapTile(675+i*50,410, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      addMapitem(825,310,100,100,2, 0); // 대포
      for (var i=0; i<2;i++){
        addMapTile(1200+i*50,0, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<5;i++){
        addMapTile(1300+i*50,500, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      addMapitem(1500,400,100,100,2, 0); // 대포
      for (var i=0; i<5;i++){
        addMapTile(2750+i*50,300, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      addMapTile(2700,250, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      addMapTile(2800,150, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      addMapTile(2600,50, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      addMapTile(2800,0, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      addMapTile(2950,-100, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      for(var i=0;i<5;i++){
        addMapTile(2600+i*50,-200, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }

      for (var i=0; i<5;i++){
        addMapTile(2600-i*50,-200+i*50, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<7;i++){
        addMapTile(1300+i*50,-300+i*50, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<15;i++){
        addMapTile(1650+i*50,0, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<23;i++){
        addMapTile(1450+i*50,-200, tile_width, tile_height, tile_speed, false, frame, 3, 4);
      }
      for (var i=0; i<21;i++){
        addMapTile(1500+i*50,-150, tile_width, tile_height, tile_speed, false, frame, 3, 4);
      }
      for (var i=0; i<19;i++){
        addMapTile(1550+i*50,-100, tile_width, tile_height, tile_speed, false, frame, 3, 4);
      }
      for (var i=0; i<17;i++){
        addMapTile(1600+i*50,-50, tile_width, tile_height, tile_speed, false, frame, 3, 4);
      }
      addMapTile(2300,-250,tile_width, tile_height, 4 , false, frame, 2, 7);
      addMapTile(2800,-350,tile_width, tile_height, 3 , true, frame, 2, 7);
      addMapTile(2050,-450,tile_width, tile_height, 4 , false, frame, 2, 7);
      addMapTile(1950,-450,tile_width, tile_height, 2 , true, frame, 2, 7);
      addMapTile(1950,-450,tile_width, tile_height, 2 , true, frame, 2, 7);
      addMapTile(1350,-450,tile_width, tile_height, 3 , false, frame, 2, 7);
      for (var i=0; i<28;i++){
        addMapTile(i*50,-300, tile_width, tile_height, tile_speed, false, frame, 3, 4);
      }
      for (var i=0; i<22;i++){
        addMapTile(1000,-500-i*50, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<20;i++){
        addMapTile(1200,-600-i*50, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<20;i++){
        addMapTile(1200+i*50,-1550, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      for (var i=0; i<6;i++){
        addMapTile(1000+i*50,-450, tile_width, tile_height, tile_speed, false, frame, 1, 7);
      }
      addMapTile(900,-900,tile_width, tile_height, 3 , false, frame, 2, 7);
      addMapTile(1500,-1100,tile_width, tile_height, 4 , true, frame, 2, 7);
      addMapTile(900,-1300,tile_width, tile_height, 4 , false, frame, 2, 7);
      addMapTile(1500,-1400,tile_width, tile_height, 4 , true, frame, 2, 7);
      addMapTile(900,-700,tile_width, tile_height, 4 , false, frame, 2, 7);

      addMapitem(1100,-490,40,40,1,5); // 텔레포트 아이템
      addMapitem(1600,-1650,80,100,3,0); // 깃발
      break;
  }
}

function downChain(){
  for(var i = 0; i < map_array.length; i++){

      if(map_array[i].property==5 && chainbutton==false){
        if(map_array[i].originy > map_array[i].y)
        map_array[i].y += 2;
    }
  }
}
