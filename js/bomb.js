'use strict';

class Bomb{

  constructor(speed, text){
    this.x = randomNumberGen(canvasWidth/4, canvasWidth/1.4); //random x between 2 
    this.y = -100; // set to top of screen
    this.speed = speed; // sets the speed based of score
    this.r = 170; // Define the radius(size of the bomb);
    // max letter with is 14 characters.
    this.text = text;// the keyword that will be inside the bomb
    this.armed = true; //triggers damage if still true
  }

  //Draw the bomb on canvas
  show() {
    this.drawBomb();
    this.restoreDefaultStroke();
    this.drawText();
    this.y += this.speed;
  }

  // Draw the bomb and its parts
  drawBomb(){
    // draw the bomb body
    fill(50);
    circle(this.x, this.y, this.r);
    // Draw the fuse
    fill(50);
    ellipse(this.x+50, this.y-70, this.r/5,);
    noFill();
    stroke(255);
    strokeWeight(4);
    arc(this.x+52, this.y-95, 50, 50, 0, HALF_PI);
  }

  // restore the Default stroke settings
  restoreDefaultStroke(){
    strokeWeight(1);
    stroke(0);
    fill(255);
  }

  // write the text content onto the bomb
  drawText(){
    textSize(25);
    textAlign(CENTER);
    text(this.text, this.x, this.y+8);
  }

  explode() {
    // function to command the bomb to explode
  }




}