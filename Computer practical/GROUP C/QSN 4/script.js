// a) Date Object: Demonstrating some methods of the Date object
console.log("Date Object Demonstration:");
let currentDate = new Date(); // Get the current date and time
console.log("Current Date and Time:", currentDate);

console.log("Year:", currentDate.getFullYear()); // Get the full year
console.log("Month:", currentDate.getMonth() + 1); // Get the month (0-based, so add 1)
console.log("Day:", currentDate.getDate()); // Get the day of the month
console.log("Hours:", currentDate.getHours()); // Get the hour
console.log("Minutes:", currentDate.getMinutes()); // Get the minutes
console.log("Seconds:", currentDate.getSeconds()); // Get the seconds
console.log("\n");

// b) Array Object: Demonstrating some methods of the Array object
console.log("Array Object Demonstration:");
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original Array:", fruits);

fruits.push("Elderberry"); // Add an element to the end
console.log("After push:", fruits);

fruits.pop(); // Remove the last element
console.log("After pop:", fruits);

fruits.shift(); // Remove the first element
console.log("After shift:", fruits);

fruits.unshift("Apricot"); // Add an element to the beginning
console.log("After unshift:", fruits);

console.log("Sorted Array:", fruits.sort()); // Sort the array alphabetically
console.log("\n");

// c) String Object: Demonstrating some methods of the String object
console.log("String Object Demonstration:");
let sentence = "Hello, JavaScript is awesome!";
console.log("Original String:", sentence);

console.log("Length of String:", sentence.length); // Get the length of the string
console.log("Uppercase:", sentence.toUpperCase()); // Convert to uppercase
console.log("Lowercase:", sentence.toLowerCase()); // Convert to lowercase
console.log("Substring:", sentence.substring(7, 18)); // Get a substring
console.log("Replaced String:", sentence.replace("awesome", "fun")); // Replace part of the string
console.log("\n");

// d) Math Object: Demonstrating some methods of the Math object
console.log("Math Object Demonstration:");
console.log("Value of Pi:", Math.PI); // Get the value of Pi
console.log("Square Root of 16:", Math.sqrt(16)); // Calculate the square root
console.log("2 to the Power of 3:", Math.pow(2, 3)); // Calculate 2 raised to the power of 3
console.log("Random Number (0 to 1):", Math.random()); // Generate a random number between 0 and 1
console.log("Rounded Number (4.7):", Math.round(4.7)); // Round a number to the nearest integer
console.log("\n");

// e) Random Number Demonstration (using Math.random())
console.log("Random Object Demonstration:");
function getRandomNumber(min, max) {
    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Number between 1 and 100:", getRandomNumber(1, 100));
