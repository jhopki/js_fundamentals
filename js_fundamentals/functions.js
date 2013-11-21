// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numKids, partner, geolocation, job) {
  document.write("<p>You will be a " + job + " in " + geolocation + ", and married to " + partner + " with " + numKids + " kids.</p>");
}

tellFortune(3, 'Susan', 'Belleville', 'doctor');
tellFortune(7, 'Jeff', 'Vancouver', 'writer');
tellFortune(2, 'Georgie', 'Towson', 'lawyer');

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
  var possAge1 = currentYear - birthYear -1;
  var possAge2 = currentYear - birthYear;
  document.write("<p>You are either " + possAge1 + " or " + possAge2 + ".</p>"); 
}

calculateAge(1934, 2013);
calculateAge(1972, 2013);
calculateAge(1984, 2013);

function calculateAge2(birthYear) {
  var x = new Date().getFullYear();
  var possAge1 = x - birthYear - 1;
  var possAge2 = x - birthYear;
  document.write("<p>You are either " + possAge1 + " or " + possAge2 + ".</p>");
}

calculateAge2(1991);
calculateAge2(1978);
calculateAge2(1964);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
  var maxAge = 105;
  var amtRestOfLife = (maxAge - age)*365*amountPerDay;
  document.write("<p>You will need " + amtRestOfLife + " to last you until the ripe old age of " + maxAge + ".</p>");
}

calculateSupply(31, 12);
calculateSupply(91, 2);
calculateSupply(9, 10);
//Bonus

function calculateSupply2(age, amountPerDay) {
  var maxAge = 110;
  var amtRestOfLife = (maxAge - age)*365*amountPerDay;
  var y = Math.round(amtRestOfLife);
  document.write("<p>You will need " + y + " to last you until the ripe old age of " + maxAge + ".</p>");
}

calculateSupply2(23, 14);
calculateSupply2(7, 5);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
  var circumference = 2*Math.PI*radius;
  document.write('<p>The circumference is ' + circumference.toFixed(2) + '.</p>');
}

calcCircumference(12);
calcCircumference(3);

function calcArea(radius) {
  var area = Math.PI*Math.pow(radius, 2);
  document.write('<p>The area is ' + area.toFixed(2) + '.</p>');
}

calcArea(2);
calcArea(7);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
  var fahrenheit = celsius*(9/5) + 32;
  document.write("<p>" + celsius + " deg C is " + fahrenheit.toFixed(1) + " deg F.</p>");
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(22);
celsiusToFahrenheit(-12);

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32)*(5/9);
  document.write("<p>" + fahrenheit + " deg F is " + celsius.toFixed(1) + " deg C.</p>");
}

fahrenheitToCelsius(76);
fahrenheitToCelsius(20);
fahrenheitToCelsius(0);