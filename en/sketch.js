let birds = []

function setup() {
  createCanvas(700, 450)
  
  birds.push({
    x: 200,
    y: 250,
    xSpeed: 2,
    ySpeed: -1
  })
}

function draw() {
  background(50, 90, 200)
  moveFlockTarget()
  drawFlockTarget()
  updateBirds()
  drawBirds()
}

function moveFlockTarget() {
}

function drawFlockTarget() {
}

function updateBirds() {
}

function drawBirds() {
  for (let bird of birds) {
    ellipse(bird.x, bird.y, 12, 12)
  }
}

function mousePressed() {
}