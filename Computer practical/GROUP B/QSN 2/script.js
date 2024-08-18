function gradeEvaluation(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score < 60 && score >= 0) {
        return 'F';
    } else {
        return 'Invalid score'; // Handle invalid scores (e.g., negative numbers or above 100)
    }
}

// Example usage:
console.log(gradeEvaluation(85)); // Output: B
console.log(gradeEvaluation(92)); // Output: A
console.log(gradeEvaluation(74)); // Output: C
console.log(gradeEvaluation(59)); // Output: F
console.log(gradeEvaluation(105)); // Output: Invalid score
console.log(gradeEvaluation(-10)); // Output: Invalid score