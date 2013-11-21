// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y) {
  var greater;
  if (x > y) {
    greater = x;
  }
  else {
    greater = y;
  }  
  document.write("<p>The greater number of " + x + " and " + y + " is: " + greater + ".</p>");
}

greaterNum(4,5);
greaterNum(100, 3.1);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
  if (langCode === "es") {
      return document.write("<p>Hola, </p>");
  } else if (langCode === "de") {
      return document.write("<p>something</p>");
  } else if (langCode === "fr") {
      return document.write("<p>Bonjour, Le Monde</p>");
  } else {
      return document.write("<p>Hello, World</p>");
  }
};

helloWorld("de");
helloWorld();

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
  if (score >= 80) {
    return "A";
  }
  else if (score >= 70) {
    return "B";
  }
  else if (score >= 60) {
    return "C";
  }
  else if (score >= 50) {
    return "D";
  }
  else {
    return "F";
  }
}
var x = assignGrade(45);
var y = assignGrade(87);
var z = assignGrade(66);
document.write("<p>" + x + "</p>");
document.write("<p>" + y + "</p>");
document.write("<p>" + z + "</p>");

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num) {
  var word = ''
  if (num > 1) {
    word = noun + "s";
  } else {
    word = noun;
  }
  document.write("<p>" + num + " " + word + "</p>");
}

pluralize('cat', 6);
pluralize('house', 1);
pluralize('racoon', 2);

function pluralizeBonus(noun, num) {
  var word = ''
  var exceptions = ['sheep', 'geese', 'moose'];
  if (num > 1) {
    word = noun + "s";
  } else {
    word = noun;
  };
  for (var i = 0; i < exceptions.length; i++) {
    if (noun === exceptions[i]) {
      word = noun;
      var x = "yes";
    } 
  };
  document.write("<p>" + num + " " + word + "</p>");
}

pluralizeBonus('cat', 6);
pluralizeBonus('sheep', 7);
pluralizeBonus('geese', 3);

