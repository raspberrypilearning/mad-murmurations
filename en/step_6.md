## Show the flock target

### Step 1
Set `x` and `y` coordinates for your flock's target

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 1
line_highlights: 2-3
---
let birds = []
let flockTargetX = 350
let flockTargetY = 225
--- /code ---


### Step 2
In the `drawFlockTarget()` function, draw a small circle. This will show the point your birds will follow later.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 26
line_highlights: 27-29
---
function drawFlockTarget() {
  fill(255)
  noStroke()
  ellipse(flockTargetX, flockTargetY, 10, 10)
}
--- /code ---

### Step 2
Now choose a size and colour for your target. The three numbers in `fill()` are red, green, and blue. The last two numbers in `ellipse()` set the size.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---
function drawFlockTarget() {
  fill(255, 200, 60)
  noStroke()
  ellipse(flockTargetX, flockTargetY, 14, 14)
}
--- /code ---


### Now run your code
This is what you should see when you run your code.

![](images/step_6.png)

### Tip
{: .c-project-callout .c-project-callout--tip}
- Choose a colour that stands out against your background.
- Try making your target bigger or smaller to see what looks best.
- You can imagine this point as the place your flock is trying to fly towards.

### Debugging
{: .c-project-callout .c-project-callout--debug}
- Make sure you have spelled `flockTargetX` and `flockTargetY` correctly.
- Check that `ellipse()` has four values, separated by commas.
- Make sure `drawFlockTarget()` has opening and closing curly brackets `{}`.