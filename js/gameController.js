'use strict';

var scoreText = document.getElementById('score');

function scoreUp(){
  noLoop();
  bomb.explode();
  loop();
  updateScore(100);
  scoreAnimation();
  getRandomKeyword();
  generateNewBomb();
}

function scoreAnimation(){
  scoreText.textContent = '';
  scoreText.textContent = playerScore;

}

function gameController(){
  if(gamePlaying === false){
    noLoop();
  }

  if(bomb.y > canvasHeight * .75){
    computerHealth -= 1;
    document.getElementById('playerIn').value = '';
    getRandomKeyword();
    generateNewBomb();
  }

  if(computerHealth === 3){
    renderComputer('happy');
  } else if (computerHealth === 2){
    renderComputer('worried');
  } else if(computerHealth === 1){
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

  if(computerHealth === 0){
    noLoop();
    document.getElementById('player').textContent = '';
  }
}

function gameOn(){
  gamePlaying = true;
  loop();
}