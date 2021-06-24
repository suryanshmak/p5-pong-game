var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0;
var playing = false;
// Canvas
function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  playing = true;
}
//Background
function draw() {
  background(0);
  fill(0, 255, 0);
  textSize(24);
  text("Hit the mouse to start the game", 0, 150);
  textSize(24)
  text("Press any key to reset the game", 0, 200);
   if (playing === true) {
    background(0);
    // Paddle
    fill(255);
    rect(mouseX, 375, 90, 15);
    //Functions
    //Score
    fill('#d9c3f7');
    textSize(24);
    text("Score: " + score, 10, 25);
    // Ball Functions
    xBall += xSpeed;
    yBall += ySpeed;
    if (xBall < 10 ||
      xBall > 400 - 10) {
      xSpeed *= -1;
    }
    if (yBall < 10 ||
      yBall > 400 - 10) {
      ySpeed *= -1;
    }
    fill('#d9c3f7');
    ellipse(xBall, yBall, 20, 20);
    // Bounce off Paddle
    if ((xBall > mouseX &&
        xBall < mouseX + 90) &&
      (yBall + 10 >= 375)) {
      xSpeed *= -1;
      ySpeed *= -1;
      score++;
    }
    // Reset Ball
    if (keyIsPressed) {
      xBall = 10;
      yBall = 10;
      score = 0;
    }
  }
}
