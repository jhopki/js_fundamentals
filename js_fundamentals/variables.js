// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numKids = 4;
var partner = 'Chester';
var geoLocation = 'Baltimore';
var job = 'wildlife wrangler';

document.write("<p>You will be a " + job + " in " + geoLocation + ", and married to " + partner + " with " + numKids + " kids.</p>");
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = 2013;
var birthYear = 1978;

var firstPossibleAge = currentYear - birthYear - 1;
var secondPossibleAge = currentYear - birthYear;
document.write("<p>They are either " + firstPossibleAge + " or " + secondPossibleAge + "</p>");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 34;
var maximumAge = 118;
var estAmtperDay = 5;
var total = (maximumAge - currentAge)*estAmtperDay*365;
document.write("<p>You will need " + total + " to last you until the ripe old age of " + maximumAge + ".</p>");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var rad = 4;
var circumference = 2*rad*3.14;
document.write("<p>The circumference is " + circumference + ".</p>");
var area = 3.14*(Math.pow(rad,2));
document.write("<p>The area is " + area + ".</p>");

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 5;
var fahrenheit;
fahrenheit = celsius*(9/5) + 32;
document.write("<p>" + celsius + " deg C is " + fahrenheit + " deg F.</p>");
var fahrenheitVar = 104;
var celsiusConverted;
celsiusConverted = (fahrenheitVar-32)*(5/9);
document.write("<p>" + fahrenheitVar + " deg F is " + celsiusConverted + " deg C.</p>");
