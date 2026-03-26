## Set the stage

### Step 1
In the `setup()` function, decide on a good canvas size for your screen. The first value is for width and the second for height.

--- code ---
---
language: javascript
filename: sketch.py
line_numbers: true
line_number_start: 1
line_highlights: 2
---
function setup() {
  createCanvas(700, 450)
}
--- /code ---

### Step 2
In the `draw()` function choose a colour for your background. The first number is for red, the second for green, and the third for blue.

--- code ---
---
language: javascript
filename: sketch.py
line_numbers: true
line_number_start: 5
line_highlights: 6
---
function draw() {
  background(50, 90, 200)
  background()
  moveFlockTarget()
  drawFlockTarget()
  updateBirds()
  drawBirds()
}
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_1.png)

### Tip
- Change the size of your canvas so it fills as much space on your screen as possible.
- Think about what background you would like for your creatures to fly in. Are they starlings at sunset, or bats at midnight?
{: .c-project-callout .c-project-callout--tip}

### Debugging
- Make sure you are closing brackets `()` and using commas to separate numbers.
{: .c-project-callout .c-project-callout--debug}