'use strict';

// Keyword Array. Will probably update with methods.
// var keywordArray = [
//   'abstract',	'arguments',	'await',
//   'boolean',	'byte',	'case',
//   'break',	'catch',
//   'char', 'class',	'const',	'continue',
//   'debugger',	'default',	'delete',	'do',
//   'double',	'else', 'enum',	'eval',
//   'export',	'extends',	'false',	'final',
//   'finally',	'float',	'for',	'function',
//   'goto',	'if',	'implements',	'import',
//   'in',	'instanceof',	'int',	'interface',
//   'let',	'long',	'native',	'new',
//   'null',	'package',	'private',	'protected',
//   'public',	'return',	'short',	'static',
//   'super',	'switch',	'synchronized',	'this',
//   'throw',	'throws',	'transient',	'true',
//   'try',	'typeof',	'var',	'void',
//   'volatile',	'while',	'with',	'yield'];

// Use this array to keep track of seen words and use it to display next word
var seenKeywords = [];

// Intialize the player's score
var playerScore = 0;


//Keyword display for testing purposes. This will be replace once I figure out the animations. 
function displayKeyword() {
  var parentSection = document.getElementById('test');
  parentSection.textContent = seenKeywords[seenKeywords.length-1];
}

////this displayes the players score. It does not get rid of the element tho. but I wont change it till i get the animation running.
// TODO - get rid of it or change it.
function updateScore(value){
  playerScore += value;
  var pSection = document.getElementById('score');
  var articleElement = document.createElement('p');
  articleElement.textContent = playerScore;
  pSection.appendChild(articleElement);
}

// genereates a new keyword checks to see if it's already in the seenKeywords array if it's not in there then push it to the end of the array
function getRandomKeyword(){
  // generate a string from a random index of keywordArray
  var index = randomNumberGen(0, keywordArray.length);

  // checks to see if there index is in seenKeywords array.
  while(seenKeywords.includes(keywordArray[index])){
    index = randomNumberGen(0, keywordArray.length);
  }

  seenKeywords.push(keywordArray[index]);

  if(seenKeywords.length > 10){
    seenKeywords.shift();
  }
}

// Random Int gen helper function
function randomNumberGen(min = 0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


getRandomKeyword();
displayKeyword();


// Player input text box.
document.getElementById('player').addEventListener('submit', function handler(event){
  event.preventDefault();

  var answer = event.target.playerInput.value;
  if (answer === seenKeywords[seenKeywords.length-1]){
    updateScore(100);

    getRandomKeyword();
    displayKeyword();
    document.getElementById('playerIn').value = '';
    console.log(playerScore);
  }
});

