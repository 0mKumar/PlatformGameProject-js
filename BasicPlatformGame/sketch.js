let pos, vel; // pos and velocity vector for the main character
let gravity;  // gravity vector for the world
let runSpeed = 4;  // of character when LEFT or RIGHT is pressed
let jumpSpeed = 15; // of character

let bgImg;

var santaRun, santaIdle;
var santa;

function preload(){
  bgImg = loadImage("images/background.png");
  santaRun = loadAnimation("sprites/Run (1).png", "sprites/Run (2).png", "sprites/Run (3).png",
    "sprites/Run (4).png", "sprites/Run (5).png", "sprites/Run (6).png",
    "sprites/Run (7).png", "sprites/Run (8).png" ,"sprites/Run (9).png",
    "sprites/Run (10).png", "sprites/Run (11).png");
  santaRun.offX = 8;
  santaRun.frameDelay = 2;

  santaIdle = loadAnimation("sprites/Idle (1).png", "sprites/Idle (2).png", "sprites/Idle (3).png",
    "sprites/Idle (4).png", "sprites/Idle (5).png", "sprites/Idle (6).png",
    "sprites/Idle (7).png", "sprites/Idle (8).png" ,"sprites/Idle (9).png",
    "sprites/Idle (10).png", "sprites/Idle (11).png", "sprites/Idle (12).png",
    "sprites/Idle (13).png", "sprites/Idle (14).png", "sprites/Idle (15).png",
    "sprites/Idle (16).png");

  santaIdle.offX = 8;
  santaIdle.frameDelay = 3;

  santa = santaIdle;
}

function setup() {
  createCanvas(700, 400); // size of canvas (viewport of game)
  pos = createVector(100, height - 200);
  vel = createVector(0,-10);
  gravity = createVector(0, 0.7);
  print(santa);
}

function draw() {
  update();
  background(bgImg);
  push();
  translate(pos.x,pos.y)
  scale(vel.x < 0? -1:1, 1);
  animation(santa, 0, 0);
  pop();
  rectMode(CENTER);
  noFill();
  rect(pos.x, pos.y, 40,50);
}

let groundOffset = 25;
function update(){
  vel.add(gravity);
  pos.add(vel);
  if(pos.y > height - groundOffset){  // ground contact
    vel.x = vel.x * 0.8;    // friction
    vel.y = 0;
    pos.y = height - groundOffset;
  }

  // controls
  if(keyIsDown(LEFT_ARROW)){
    vel.x = -runSpeed;
  }else if(keyIsDown(RIGHT_ARROW)){
    vel.x = runSpeed;
  }

  if(abs(vel.x) < 0.1){
    santa = santaIdle;
  }else{
    santa = santaRun;
  }
}

function keyPressed(){
  switch(key){
    // jump when UP or SPACE is pressed on keyboard
    case "ArrowUp":
    case " ":
      if(vel.y != 0) break;
      vel.y -= jumpSpeed;
      break;
  }
}
