let birds = []
let flockTargetX = 350
let flockTargetY = 225

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
  flockTargetX = width / 2 + sin(frameCount * 0.01) * 220
  flockTargetY = height / 2 + cos(frameCount * 0.013) * 100
}

function drawFlockTarget() {
  fill(255, 200, 60)
  noStroke()
  ellipse(flockTargetX, flockTargetY, 14, 14)
}

function updateBirds() {
  for (let bird of birds) {
    for (let otherBird of birds) {
      let distanceBetweenBirds = dist(bird.x, bird.y, otherBird.x, otherBird.y)

      if (otherBird !== bird && distanceBetweenBirds < 18) {
        bird.xSpeed += (bird.x - otherBird.x) * 0.01
        bird.ySpeed += (bird.y - otherBird.y) * 0.01
      }
    }

    bird.xSpeed += (flockTargetX - bird.x) * 0.0008
    bird.ySpeed += (flockTargetY - bird.y) * 0.0008

    let birdSpeed = sqrt(bird.xSpeed * bird.xSpeed + bird.ySpeed * bird.ySpeed)

    if (birdSpeed < 0.01) {
      birdSpeed = 0.01
    }

    bird.xSpeed += random(-0.05, 0.05)
    bird.ySpeed += random(-0.05, 0.05)

    bird.xSpeed = bird.xSpeed / birdSpeed * 2.2
    bird.ySpeed = bird.ySpeed / birdSpeed * 2.2

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