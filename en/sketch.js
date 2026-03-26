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
  stroke(255)
  strokeWeight(2)
  noFill()

  for (let bird of birds) {
    line(bird.x - 6, bird.y + 2, bird.x, bird.y - 2)
    line(bird.x, bird.y - 2, bird.x + 6, bird.y + 2)
  }
}

function mousePressed() {
}