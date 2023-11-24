// Iinheritance OOP Demo

let part;
let confet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  part = new Particle(width/2, height/2);
  confet = new Confetti(width/2, height/2);
}

function draw() {
  background(0);
  part.update();
  part.display();
  confet.update();
  confet.display();

}


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  display() {
    circle(this.x, this.y, this.size);
  }
}

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
  }

  update() {
    super.update();
    this.size += random(-3, 3);
  }
  display() {
    square(this.x, this.y, this.size);
  }


}