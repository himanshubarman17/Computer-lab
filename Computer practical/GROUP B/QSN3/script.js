function dayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Invalid day";
    }
  }
  
  // Example usage:
  console.log(dayOfWeek(1)); // Output: "Sunday"
  console.log(dayOfWeek(5)); // Output: "Thursday"
  console.log(dayOfWeek(8)); // Output: "Invalid day"
  