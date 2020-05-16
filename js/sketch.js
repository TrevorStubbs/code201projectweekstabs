'use strict';

var brickLength = 40;
var brickHeight = 10;



function showBricks(){
  fill(150,25,25);
  rect(0,0,40,10);
  rect(43, 0,brickLength,brickHeight);
  rect(0, 13, brickLength,brickHeight);
}

var setup = function(){ //eslint-disable-line
  var myCanvas = createCanvas(800, 800); //eslint-disable-line
  myCanvas.parent('viewport');
};

function draw() {
  background(220);

  showBricks();

}

