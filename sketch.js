

var defaultDiameter = 1;
var speed = 0.1;
var myAnimation;
var someText = ". Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you";
//var img = createImage("myGif.gif");

var someLyrics = someText.split(" ");

console.log(someLyrics);


console.log('version 2.0');

var myAnimation = new Animation(defaultDiameter);

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(10);
  noStroke();

  console.log(sqrt(sq(height)+sq(width)));

  text('HOLD "A"! ;)', windowWidth/2, windowHeight/2);
}

function draw() {


  fill(40);
  ellipse(width/2, height/2, 0);

  myAnimation.display();



  if (myAnimation.diameter + 15 > sqrt(sq(height)+sq(width))) {
    myAnimation.flipValue();


  }

  //KEYBOARD INTERACTION

  if (keyIsDown(65)) {
    myAnimation.grow();
  }
}

//CLASS ASSIGNMENT


function Animation(diameter) {
  this.diameter = diameter;
  this.rateOfGrowth = 0.1;
  this.fillValue = 0;
  this.counter = 0;
}

Animation.prototype.grow = function () {
  if (abs(this.diameter) < sqrt(sq(height)+sq(width))) {
    for (var i = this.diameter; i < sqrt(sq(height)+sq(width)); i ++) {
      this.diameter += this.rateOfGrowth;
    }
  }
};

Animation.prototype.reverseGrowth = function () {
    this.rateOfGrowth *= -1;
    console.log(this.rateOfGrowth);
};

Animation.prototype.display = function () {

  fill(this.fillValue);
  ellipse(width/2, height/2, this.diameter);
  textSize(250);
  if (this.counter > 0) {
    fill(219, 63, 203);
    text(someLyrics[(myAnimation.counter%(someLyrics.length))].toUpperCase(), windowWidth/2, windowHeight/2);
//    img.position(width/2, height/2 - 100);
  }
};

Animation.prototype.flipValue = function () {
  background(this.fillValue);
  this.diameter = 0;
  if (this.fillValue === 0) {
    this.fillValue = 255;
  } else {
    this.fillValue = 0;
  }
  this.counter++;
};
