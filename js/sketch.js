'use strict';

var canvasWidth = 800;
var canvasHeight = 800;

var brickWidth = 40;
var brickHeight = 10;



function showBricks(){
  fill(150,25,25);

  for(var i = 0; i < (canvasHeight/brickHeight) + 2 ; i++) {
    for(var j = 0; j < (canvasWidth/brickWidth) +2 ; j++){
      if(i%2=== 0){
        rect(j*43, i*13, brickWidth, brickHeight);
      } else{
        rect((j*43-20), i*13, brickWidth, brickHeight);
      }
    }
  }
}

function showGround(){
  var groundColor = '#7de83a';
  fill(groundColor);
  // ellipse((canvasWidth/2), (canvasHeight*1.5), canvasHeight);
  ellipse((canvasWidth), (canvasHeight/2), canvasHeight);

}

var setup = function(){ //eslint-disable-line
  var myCanvas = createCanvas(canvasWidth, canvasHeight); //eslint-disable-line
  myCanvas.parent('viewport');
};

function draw() {
  background(220);



  showBricks();
  showGround();

}

