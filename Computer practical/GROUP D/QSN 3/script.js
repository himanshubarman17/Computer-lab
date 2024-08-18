function isPrime(userInput) {
    if (userInput <= 1) return false; 
    for (let i = 2; i < userInput; i++) {
        if (userInput % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}
// Example of user input (in a real-world scenario, this could be from a form or console input)
let userInput = parseInt(prompt("Enter a number"));
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));