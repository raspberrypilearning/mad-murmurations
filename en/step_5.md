## Make a flock

### Step 1
In the `setup()` function, use a `for` loop to add **lots** of birds. Change `40` to choose how many birds you want. `random(width)` gives each bird a random starting position from left to right.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 3
line_highlights: 4, 7, 24
---
function setup() {
  createCanvas(700, 450)

  for (let count = 0; count < 40; count++) {
    birds.push({
      x: random(width),
      y: 250,
      xSpeed: 2,
      ySpeed: -1
    })
  }
}
--- /code ---

### Step 2
Now change the `y` position to `random(height)`. This will spread your birds out from top to bottom as well.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 3
line_highlights: 8
---
function setup() {
  createCanvas(700, 450)

  for (let count = 0; count < 40; count++) {
    birds.push({
      x: random(width),
      y: random(height),
      xSpeed: 2,
      ySpeed: -1
    })
  }
}
--- /code ---

### Step 3
Now give each bird its own speed. `random(1, 3)` picks a speed between `1` and `3`. `random(-1, 1)` can give a negative or positive number, so some birds might start by flying up and some down.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 3
line_highlights: 9-10
---
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
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_5.gif)

### Tip
{: .c-project-callout .c-project-callout--tip}
- Change `40` to make a bigger or smaller flock.
- Try different numbers in `random(1, 3)` to make your birds fly faster or slower.
- Try changing `random(-1, 1)` so the birds spread out more or stay flatter.

### Debugging
{: .c-project-callout .c-project-callout--debug}
- Make sure the `birds.push()` code is inside the `for` loop.
- Check that `random(width)` and `random(height)` both have brackets `()`.
- Make sure you have closed the curly brackets for the bird, the loop, and the function.