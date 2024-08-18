function isPalindrome(num) {
    // Convert the number to a string
    let numStr = num.toString();

    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    return numStr === reversedStr;
}

// Prompt the user to enter a number
let userInput = prompt("Enter a number:");

// Convert the input to an integer
let number = parseInt(userInput);

// Check if the number is a palindrome
if (isPalindrome(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}

