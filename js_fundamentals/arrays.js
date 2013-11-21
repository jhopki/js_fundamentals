// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.

var topChoices = new Array;
topChoices = ['red', 'blue', 'green', 'purple', 'magenta', 'cyan'];

for (var i = 0; i <= topChoices.length - 1; i++) {
  if (i == topChoices.length - 1) {
    console.log("I hate " + topChoices[i]);
  } else {
    console.log("My #" + (i+1) + " choice is " + topChoices[i]);
  }
}

