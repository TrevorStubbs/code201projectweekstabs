'use strict';

var keywordArray = [
  'abstract',	'arguments',	'await',
  'boolean',	'byte',	'case',
  'break',	'catch',
  'char', 'class',	'const',	'continue',
  'debugger',	'default',	'delete',	'do',
  'double',	'else', 'enum',	'eval',
  'export',	'extends',	'false',	'final',
  'finally',	'float',	'for',	'function',
  'goto',	'if',	'implements',	'import',
  'in',	'instanceof',	'int',	'interface',
  'let',	'long',	'native',	'new',
  'null',	'package',	'private',	'protected',
  'public',	'return',	'short',	'static',
  'super',	'switch',	'synchronized',	'this',
  'throw',	'throws',	'transient',	'true',
  'try',	'typeof',	'var',	'void',
  'volatile',	'while',	'with',	'yield'];

var seenKeywords = [];



function displayKeyword() {
  var parentSection = document.getElementById('test');
  parentSection.textContent = seenKeywords[seenKeywords.length-1];
}


function getRandomKeyword(){
  // generate a string from a random index of keywordArray
  var index = randomNumberGen(0, keywordArray.length);
  seenKeywords.push(keywordArray[index]);
}

function randomNumberGen(min = 0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomKeyword();
displayKeyword();

document.getElementById('player').addEventListener('submit', function(event){
  event.preventDefault;

  // get 

});

