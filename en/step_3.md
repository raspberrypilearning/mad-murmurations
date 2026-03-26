## Give your bird some wings

### Step 1
In the `drawBirds()` function, choose a colour for your bird and how thick its wings should be. `noFill()` tells p5 not to colour in the middle of the shape.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 31
line_highlights: 32-34
---
function drawBirds() {
  stroke(255)
  strokeWeight(2)
  noFill()

  for (let bird of birds) {
    ellipse(bird.x, bird.y, 12, 12)
  }
}
--- /code ---

### Step 2
Now replace the circle with one wing. The `line()` function needs 4 values: the start `x` and `y`, and the end `x` and `y`.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 31
line_highlights: 37
---
function drawBirds() {
  stroke(255)
  strokeWeight(2)
  noFill()

  for (let bird of birds) {
    line(bird.x - 6, bird.y + 2, bird.x, bird.y - 2)
  }
}
--- /code ---

### Step 3
Add a second line to make the other wing. Now your bird will look like it is flying.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 31
line_highlights: 38
---
function drawBirds() {
  stroke(255)
  strokeWeight(2)
  noFill()

  for (let bird of birds) {
    line(bird.x - 6, bird.y + 2, bird.x, bird.y - 2)
    line(bird.x, bird.y - 2, bird.x + 6, bird.y + 2)
  }
}
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_3.png)

### Tip
{: .c-project-callout .c-project-callout--tip}

- Change the numbers in the `line()` commands to make your bird’s wings wider, taller, or pointier.
- Try changing the colour in `stroke()` to make birds or bats for day time, sunset, or night.
- Increase `strokeWeight()` to make chunkier wings.

### Debugging
{: .c-project-callout .c-project-callout--debug}

- Each `line()` command needs 4 numbers or values, separated by commas.
- Make sure both `line()` commands are inside the `for` loop.
- Check that you have spelled `bird.x` and `bird.y` correctly each time.