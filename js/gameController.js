'use strict';


function scoreUp(){
  setTimeout(function(){
    console.log('I am here:');
    bomb.explode();
  }, 1000);
  generateNewBomb();
}

function gameController(){
  if(computerHealth === 2){
    renderComputer('happy');
  } else if (computerHealth === 1){
    renderComputer('sad');
  } else{
    renderComputer();
  }

  if(playerScore < 300){
    gameSpeed = 1;
  } else if(playerScore >= 300 && playerScore < 600) {
    gameSpeed = 2;
  } else if(playerScore >= 600 && playerScore < 900) {
    gameSpeed = 3;
  } else if(playerScore >= 900 && playerScore < 1200) {
    gameSpeed = 4;
  } else if(playerScore >= 1200 && playerScore < 1500) {
    gameSpeed = 5;
  } else if(playerScore >= 1800 && playerScore < 2100) {
    gameSpeed = 6;
  } else {
    gameSpeed = 7;
  }
}
