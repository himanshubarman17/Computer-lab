function checkTemperature(celsius) {
    if (celsius < 15) {
        return "Cold";
    } else if (celsius >= 15 && celsius <= 25) {
        return "Warm";
    } else {
        return "Hot";
    }
}


console.log(checkTemperature(10));  // Output: "Cold"
console.log(checkTemperature(20));  // Output: "Warm"
console.log(checkTemperature(30));  // Output: "Hot"