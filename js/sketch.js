'use strict';

var canvasWidth = 800;
var canvasHeight = 800;

var brickWidth = 40;
var brickHeight = 10;


// generated the brick wall
function showBricks(){
  fill(150,25,25);

  for(var i = 0; i < (canvasHeight/brickHeight) + 2 ; i++) {
    for(var j = 0; j < (canvasWidth/brickWidth) + 2 ; j++){
      if( i % 2 === 0){
        rect(j*43, i*13, brickWidth, brickHeight);
      } else{
        rect((j*43-20), i*13, brickWidth, brickHeight);
      }
    }
  }
}

// Generate the ground plane
function showGround(){
  var groundColor = '#7de83a';
  fill(groundColor);
  // ellipse((canvasWidth/2), (canvasHeight*2) + 60, (canvasHeight*2.5));
  ellipse((canvasWidth/2), (canvasHeight*2.1), (canvasHeight*2.5));
}

//Generate the computer. Takes an 'string' argument
function renderComputer(condition){
  var computerColor = '#a39e81';
  var computerScreenColor = '#e8e8e6';
  var computerX = (canvasWidth/2) - 50;
  var computerY = (canvasHeight) - 200;
  var screenX = computerX + 13;
  var screenY = computerY + 10;

  //render box
  fill(computerColor);
  rect(computerX, computerY, 100,150);

  //render screen
  fill(computerScreenColor);
  rect(screenX, screenY, 75, 75);

  //render floppy drive
  fill(0);
  rect(screenX + 40, screenY + 100 , 30, 1);

  function happyComputer(){
    // render computer with smile
    fill(0);
    rect(screenX+22, screenY+20, 1, 10);
    rect(screenX+52, screenY+20, 1, 10);

    noFill();
    arc(screenX+37, screenY+40, 40, 40, 0, PI);

  }
  
  function sadComputer(){
    // render computer with frown
    fill(0);
    rect(screenX+22, screenY+20, 1, 10);
    rect(screenX+52, screenY+20, 1, 10);

    noFill();
    arc(screenX+38, screenY+60, -40, -40, PI, TWO_PI);
  }
  
  function deadComputer(){
    // render computer with X for eyes.
    fill(0);
    // rect(screenX+22, screenY+20, 1, 10);
    // rect(screenX+52, screenY+20, 1, 10);
    line(screenX+18, screenY+15, screenX+28, screenY+25);
    line(screenX+18, screenY+25,screenX+28, screenY+15);

    line(screenX+57, screenY+25, screenX+47, screenY+15);
    line(screenX+57, screenY+15,screenX+47, screenY+25);

    fill(0);
    // arc(screenX+37, screenY+60, -40, -40, PI, TWO_PI);
    rect(screenX+18, screenY+45, 40, 5);
  }

  if(condition === 'happy'){
    happyComputer();
  } else if (condition === 'sad') {
    sadComputer();
  } else {
    deadComputer();
  }

}


var setup = function(){ //eslint-disable-line
  var myCanvas = createCanvas(canvasWidth, canvasHeight); //eslint-disable-line
  myCanvas.parent('viewport');
};

function draw() {
  background(220);



  showBricks();
  showGround();
  renderComputer('happy');

}

