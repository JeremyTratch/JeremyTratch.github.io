// Images and sounds demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let wario;
let waaSound;
let back;

function preload() {
  wario = loadImage("Wario.png")
  waaSound = loadSound("Waa.ogg");
  back = loadSound("Theme.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(wario, mouseX, mouseY, wario.width/3, wario.height/3)
  //circle(mouseX,mouseY,40)

}

function mousePressed() {
  waaSound.play();
  if(!back.isPlaying()) {
    back.loop();
  }
}