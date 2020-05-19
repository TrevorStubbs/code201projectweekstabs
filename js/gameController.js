'use strict';


function scoreUp(){
  for(let i = 0; i < 10000; i++){
    bomb.explode();
  }
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
}
