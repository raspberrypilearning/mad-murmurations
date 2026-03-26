## Make your bird fly

### Step 1
In the `updateBirds()` function, add a loop so the program can update every bird. Then change `bird.x` by `bird.xSpeed`. This makes the bird move left or right.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 28
line_highlights: 29-31
---
function updateBirds() {
  for (let bird of birds) {
    bird.x += bird.xSpeed
  }
}
--- /code ---

### Step 2
Now add `bird.y += bird.ySpeed` inside the loop. This makes the bird move up or down as well.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 29
line_highlights: 31
---
function updateBirds() {
  for (let bird of birds) {
    bird.x += bird.xSpeed
    bird.y += bird.ySpeed
  }
}
--- /code ---

### Now run your code
This is what you should see when you run your code.

![](images/step_4.gif)

### Tip
{: .c-project-callout .c-project-callout--tip}
- Try changing `xSpeed` and `ySpeed` in your `setup()` function to make your bird fly in different directions.
- A bigger number makes the bird move faster.
- A negative `xSpeed` moves the bird left, and a negative `ySpeed` moves the bird up.

### Debugging
{: .c-project-callout .c-project-callout--debug}
- Make sure both new lines are inside the `for` loop.
- Check that you have spelled `bird.xSpeed` and `bird.ySpeed` correctly.
- Remember to use `+=` to add the speed to the position.