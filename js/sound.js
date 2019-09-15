var bgm1 = new Audio('sound/bgm.mp3');
var bgm2 = new Audio('sound/bgm2.mp3');
var bgm3 = new Audio('sound/bgm3.mp3')
var bgm4 = new Audio('sound/bgm4.mp3');

// 배경음악
function bgm() {
  switch (stage) {
    case 1:
      bgm1.play();
      break;
    case 2:
      bgm1.pause();
      bgm2.play();
      break;
    case 3:
      bgm2.pause();
      bgm3.play();
      break;
    case 4:
      bgm3.pause();
      bgm4.play();
      break;
    default:
      bgm1.pause();
      bgm2.pause();
      bgm3.pause();
      bgm4.pause();
      break;
  }

}
