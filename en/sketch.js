let birds = []

function setup() {
  createCanvas(700, 450)
  for (let count = 0; count < 40; count++) {
    birds.push({
      x: random(width),
      y: random(height),
      xSpeed: random(1, 3),
      ySpeed: random(-1, 1)
    })
  }
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
  for (let bird of birds) {
    bird.x += bird.xSpeed
    bird.y += bird.ySpeed
  }
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