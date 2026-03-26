## Make the target move

### Step 1
In the `moveFlockTarget()` function, make the target move from left to right. `width / 2` starts it in the middle of the canvas, and `sin(frameCount * 0.01)` makes it glide smoothly.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 25
line_highlights: 26
---
function moveFlockTarget() {
  flockTargetX = width / 2 + sin(frameCount * 0.01) * 180
}
--- /code ---

### Step 2
Now make the target move up and down as well. This gives it a smooth path through the sky.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 25
line_highlights: 27
---
function moveFlockTarget() {
  flockTargetX = width / 2 + sin(frameCount * 0.01) * 180
  flockTargetY = height / 2 + cos(frameCount * 0.013) * 80
}
--- /code ---

### Step 3
Try changing how far the target travels. Bigger numbers make the path wider or taller.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 25
line_highlights: 26-27
---
function moveFlockTarget() {
  flockTargetX = width / 2 + sin(frameCount * 0.01) * 220
  flockTargetY = height / 2 + cos(frameCount * 0.013) * 100
}
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_7.gif)

### Tip
{: .c-project-callout .c-project-callout--tip}
- Try changing `0.01` or `0.013` to make the target move faster or slower.
- Try changing `220` or `100` to make the target travel in a bigger or smaller path.
- Watch the target carefully and think about the shape it is making.

### Debugging
{: .c-project-callout .c-project-callout--debug}
- Make sure you type `flockTargetX` and `flockTargetY` exactly the same way each time.
- Check that `sin()` and `cos()` both have brackets `()`.
- Make sure both lines are inside the `moveFlockTarget()` function.