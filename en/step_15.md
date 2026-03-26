## Start the flock together

### Step 1
In the `setup()` function, change the `x` position so the birds start near the middle of the canvas instead of across the whole screen. `width / 2` finds the middle, and `random(-60, 60)` spreads the birds out a little bit.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 5
line_highlights: 9
---
function setup() {
  createCanvas(700, 450)

  for (let count = 0; count < 40; count++) {
    birds.push({
      x: width / 2 + random(-60, 60),
      y: random(height),
      xSpeed: random(1, 3),
      ySpeed: random(-1, 1)
    })
  }
}
--- /code ---

### Step 2
Now change the `y` position too, so the birds start together in a loose group. This makes the flock look more like a real murmuration when the program begins.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 5
line_highlights: 10
---
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
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_15.gif)

### Tip
{: .c-project-callout .c-project-callout--tip}
- Change `-60` and `60` to spread the birds out more or less from left to right.
- Change `-30` and `30` to spread the birds out more or less from top to bottom.

### Debugging
{: .c-project-callout .c-project-callout--debug}
- Make sure you have typed `width / 2` and `height / 2` with spaces and the `/` symbol.
- Check that `random(-60, 60)` and `random(-30, 30)` both have brackets `()`.
- Make sure these changes are inside the `birds.push()` block in `setup()`.