// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let balls = [];
let squares = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let theBall = spawnBall();
  balls.push(theBall);
  let theSquare = spawnSquare();
  squares.push(theSquare);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
  moveSquare();
  displaySquare();
}

function mousePressed() {
  let someBall = spawnBall();
  someBall.x = mouseX;
  someBall.y = mouseY;
  balls.push(someBall);
}


function spawnBall() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(12, 30),
    r: random(255),
    g: random(255), 
    b: random(255),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  return theBall;
}



function moveBall() {
  for (let i = 0; i < balls.length; i++) {
    let theBall = balls[i];

    theBall.x += theBall.dx;
    theBall.y += theBall.dy;

    // off the right side
    if (theBall.x - theBall.radius > width) {
      theBall.x = 0 - theBall.radius;
    }

    // off the left side
    else if (theBall.x < 0 - theBall.radius) {
      theBall.x = width + theBall.radius;
    }

    // off the bottom
    if (theBall.y - theBall.radius > height) {
      theBall.y = 0 - theBall.radius;
    }

    // off the top
    else if (theBall.y < 0 - theBall.radius) {
      theBall.y = height + theBall.radius;
    }

    console.log(theBall.x, theBall.y);
  }
}
function displayBall() {
  for (let i = 0; i < balls.length; i++) {
    let theBall = balls[i];
    fill(theBall.r, theBall.g, theBall.b);
    circle(theBall.x, theBall.y, theBall.radius * 2);
  }
}


function keyPressed() {
  if (key === " ") {
    let someSquare = spawnSquare();
    someSquare.x = mouseX;
    someSquare.y = mouseY;
    squares.push(someSquare);
  }
}


function spawnSquare() {
  let theSquare = {
    x: random(width),
    y: random(height),
    radius: random(12, 30),
    r: random(255),
    g: random(255), 
    b: random(255),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  return theSquare;
}



function moveSquare() {
  for (let i = 0; i < squares.length; i++) {
    let theSquare = squares[i];

    theSquare.x += theSquare.dx;
    theSquare.y += theSquare.dy;

    // off the right side
    if (theSquare.x - theSquare.radius > width) {
      theSquare.x = 0 - theSquare.radius;
    }

    // off the left side
    else if (theSquare.x < 0 - theSquare.radius) {
      theSquare.x = width + theSquare.radius;
    }

    // off the bottom
    if (theSquare.y - theSquare.radius > height) {
      theSquare.y = 0 - theSquare.radius;
    }

    // off the top
    else if (theSquare.y < 0 - theSquare.radius) {
      theSquare.y = height + theSquare.radius;
    }

    console.log(theSquare.x, theSquare.y);
  }
}
function displaySquare() {
  for (let i = 0; i < squares.length; i++) {
    let theSquare = squares[i];
    fill(theSquare.r, theSquare.g, theSquare.b);
    rect(theSquare.x, theSquare.y, theSquare.radius * 2);
  }
}


