function getGrade(score) {
    // Define the score boundaries and corresponding grades
    const scoreBoundaries = [0, 5, 10, 15, 20, 25, 30];
    const grades = ['F', 'E', 'D', 'C', 'B', 'A'];

    // Initialize the grade to 'F' by default
    let grade = 'F';

    // Iterate through the score boundaries
    for (let i = 0; i < scoreBoundaries.length; i++) {
        // Check if the score falls within the current range
        if (score > scoreBoundaries[i] && score <= scoreBoundaries[i + 1]) {
            grade = grades[i];
            break; // No need to continue the loop once the grade is found
        }
    }

    return grade;
}
