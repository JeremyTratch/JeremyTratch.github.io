// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
 
let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  spawnBall();
}

function draw() {
  noStroke();
  for (let theBall of ballArray) {
    fill(theBall.color);
    //move
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time + 300) * height;
    //display
    circle(theBall.x, theBall.y, theBall.size);
  
    theBall.time += 0.01;
  }
}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let ball = {
    x: random(width),
    year: random(height),
    size: random(10, 50),
    color: color(random(255), random(255), random(255), (random(255))),
    time: random(1000),
  };
  ballArray.push(ball);
}