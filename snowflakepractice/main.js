let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

let bubbles = [];
for (let i = 0; i < 250; i++){
  bubbles.push(newBubble(randomInt(0,801),randomInt(0,601),randomInt(1,6),"white"));
}
function more(){
  for (let i = 0; i < 30; i++){
    bubbles.push(newBubble(randomInt(0,801),randomInt(0,601),randomInt(1,6),"white"));
  }
}
function less(){
  for (let i = 0; i < 30; i++){
      bubbles.pop();
  }
}
requestAnimationFrame(draw);
function draw(){
  ctx.clearRect(0,0,cnv.width,cnv.height);
  for (let i = 0; i < bubbles.length; i++){
    moveBubble(bubbles[i]);
    drawBubble(bubbles[i]);
    if (bubbles[i].y >= 601){
      bubbles[i].y = 0;
      bubbles[i].x = randomInt(0,801);
    }
  }
  requestAnimationFrame(draw); 
}

function newBubble(initX, initY, initR, initColor){
  return{
      x:initX,
      y:initY,
      r:initR,
      color: initColor
  };
}
function randomInt(low,high){
    return Math.floor(Math.random() * (high -low) + low);
}
function drawBubble(aBubble){
  fill(aBubble.color);
  circle(aBubble.x,aBubble.y,aBubble.r,"fill");
}

function moveBubble(aBubble){
  aBubble.y += randomInt(0,4);
}
document.addEventListener("keydown",keypressed);
  function keypressed(event){
    if (event.keyCode === 38 && bubbles.length < 1600) {
        more();
    }
    else if (event.keyCode === 40 && bubbles.length > 10){
        less();
    }
  }
