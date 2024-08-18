function isPalindrome(str) {
    // Convert the string to lowercase and remove any non-alphanumeric characters
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the original cleaned string is equal to the reversed string
    return cleanedStr === reversedStr;
}

// Prompt the user to enter a string
let userInput = prompt("Enter a string:");

// Check if the string is a palindrome
if (isPalindrome(userInput)) {
    console.log(`"${userInput}" is a palindrome.`);
} else {
    console.log(`"${userInput}" is not a palindrome.`);
}
