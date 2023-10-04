// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let player;
let obstacles = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(220);

  // Update and display the player
  player.update();
  player.display();

  // Display and update obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].display();

    if (player.collidesWith(obstacles[i])) {
      // Game over
      noLoop();
      textSize(32);
      fill(255, 0, 0);
      textAlign(CENTER);
      text("Game Over", width / 2, height / 2);
    }

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
      score++;
    }
  }

  // Display score
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 20, 30);

  // Generate new obstacles
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.size = 20;
    this.speed = 5;
  }

  update() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.size) {
      this.x += this.speed;
    }
  }

  display() {
    fill(0, 0, 255);
    ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size);
  }

  collidesWith(obstacle) {
    let playerX = this.x + this.size / 2;
    let playerY = this.y + this.size / 2;
    let obstacleX = obstacle.x + obstacle.size / 2;
    let obstacleY = obstacle.y + obstacle.size / 2;

    let distance = dist(playerX, playerY, obstacleX, obstacleY);

    return distance < this.size / 2 + obstacle.size / 2;
  }
}

class Obstacle {
  constructor() {
    this.x = random(width - 30);
    this.y = 0;
    this.size = random(10, 40);
    this.speed = random(2, 5);
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }

  offscreen() {
    return this.y > height;
  }
}
