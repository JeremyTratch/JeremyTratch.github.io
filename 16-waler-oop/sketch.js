// Walker OOP Demos

class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let theChoice = random(100);
    if (theChoice < 25) {
      //dowm
      this.y += this.speed;
    }
    else if (theChoice < 50) {
      //up
      this.y -= this.speed;
    }
    else if (theChoice < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }

}

let gabe;
// let ben;
let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  gabe = new Walker(width/2, height/2, "brown");
  theWalkers.push(gabe);
  // ben = new Walker(200, 400, "yellow");
}

function draw() {
  for(let person of theWalkers) {
    person.move();
    person.display();
  }

  //gabe.move();
  //gabe.display();
  // ben.move();
  // ben.display();
}

function mousePressed() {
  let gabe = new Walker(mouseX, mouseY, "brown");
  theWalkers.push(gabe);
}