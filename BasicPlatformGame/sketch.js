let pos, vel; // pos and velocity vector for the main character
let gravity;  // gravity vector for the world
let runSpeed = 4;  // of character when LEFT or RIGHT is pressed
let jumpSpeed = 15; // of character

function setup() {
  createCanvas(700, 400); // size of canvas (viewport of game)
  pos = createVector(100, height - 200);
  vel = createVector(0,-10);
  gravity = createVector(0, 0.7);
}

function draw() {
  update();
  background(220);
  ellipse(pos.x, pos.y, 30,30);
}

function update(){
  vel.add(gravity);
  pos.add(vel);
  vel.x = vel.x * 0.8;
  if(pos.y > height - 15){  // ground contact
    vel.y = 0;
    pos.y = height - 15;
  }
  
  // controls
  if(keyIsDown(LEFT_ARROW)){
    vel.x = -runSpeed;
  }else if(keyIsDown(RIGHT_ARROW)){
    vel.x = runSpeed;
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
