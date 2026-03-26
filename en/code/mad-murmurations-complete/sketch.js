let birds = []
let flockTargetX = 350
let flockTargetY = 225

function setup() {
  createCanvas(700, 450)

  for (let count = 0; count < 40; count++) {
    birds.push({
      x: width / 2 + random(-60, 60),
      y: height / 2 + random(-30, 30),
      xSpeed: random(1, 3),
      ySpeed: random(-1, 1)
    })
  }
}

function draw() {
  background(15, 20, 40, 90)
  moveFlockTarget()
  drawFlockTarget()
  updateBirds()
  drawBirds()
}

function moveFlockTarget() {
  flockTargetX = width / 2 + sin(frameCount * 0.01) * 180
  flockTargetY = height / 2 + cos(frameCount * 0.013) * 80
}

function drawFlockTarget() {
  fill(255, 200, 60)
  noStroke()
  ellipse(flockTargetX, flockTargetY, 10, 10)
}

function updateBirds() {
  for (let bird of birds) {
    for (let otherBird of birds) {
      let distanceBetweenBirds = dist(bird.x, bird.y, otherBird.x, otherBird.y)

      if (otherBird != bird && distanceBetweenBirds < 18) {
        bird.xSpeed += (bird.x - otherBird.x) * 0.01
        bird.ySpeed += (bird.y - otherBird.y) * 0.01
      }
    }

    bird.xSpeed += (flockTargetX - bird.x) * 0.0008
    bird.ySpeed += (flockTargetY - bird.y) * 0.0008

    bird.xSpeed += random(-0.03, 0.03)
    bird.ySpeed += random(-0.03, 0.03)

    let birdSpeed = sqrt(bird.xSpeed * bird.xSpeed + bird.ySpeed * bird.ySpeed)

    if (birdSpeed < 0.01) {
      birdSpeed = 0.01
    }

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
    push()
    translate(bird.x, bird.y)
    rotate(atan2(bird.ySpeed, bird.xSpeed))
    line(-6, -2, 0, 0)
    line(0, 0, -6, 2)
    pop()
  }
}

function mousePressed() {
  for (let bird of birds) {
    let distanceFromMouse = dist(mouseX, mouseY, bird.x, bird.y)

    if (distanceFromMouse < 120) {
      bird.x += (bird.x - mouseX) * 0.2
      bird.y += (bird.y - mouseY) * 0.2
      bird.xSpeed += (bird.x - mouseX) * 0.02
      bird.ySpeed += (bird.y - mouseY) * 0.02
    }
  }
}