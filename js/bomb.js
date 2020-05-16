class Bomb{

  constructor(speed, text){
    this.x = canvasWidth/2; //random x between 2 
    this.y = -100; // set to top of screen
    this.speed = speed; // sets the speed based of score
    this.r = 170; // Define the radius(size of the bomb);
    this.text = text;// the keyword that will be inside the bomb
    this.armed = true; //triggers damage if still true
  }

  show() {
    // function to draw the bomb on canvas
    fill(50);
    circle(this.x, this.y, this.r);
    fill(50);
    ellipse(this.x+50, this.y-70, this.r/5,);
    noFill();
    stroke(255);
    strokeWeight(4);
    arc(this.x+52, this.y-95, 50, 50, 0, HALF_PI);

    strokeWeight(1);
    stroke(0);
    fill(255);
    textSize(25);
    textAlign(CENTER);
    text(this.text, this.x, this.y+8);

    this.y += this.speed;
  }

  explode() {
    // function to command the bomb to explode
  }




}