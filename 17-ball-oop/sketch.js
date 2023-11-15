// Ball OOP

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(15, 30);
    this.dx = random(3);
    this.dy = random(3);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    //check top and bottom for bounce
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
    //check left and right side
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }

  }

  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius*2);
  }

  bounceOff(otherBall) {
    let radiisum = this.radius + otherBall.radius;
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    if (radiisum > distanceApart) {
      let tempDX = this.dx;
      let tempDY = this.dy;

      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = tempDX.dx;
      otherBall.dy = tempDY.dy;
      // this.r = 255;
      // this.g = 0;
      // this.b = 0;
    }
  }

}

let theBall;
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  let theBall = new Ball(width/2, height/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  for (let someBall of ballArray) {
    someBall.move();
    for (let otherBall of ballArray) {
      //avoid hitting yourself
      if (someBall !== otherBall) {
        someBall.bounceOff(otherBall); 
      }
    }
    someBall.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}

