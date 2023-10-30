// Calculate and return the factorial of a number
function factorial(n) {
    if (n < 0) {
        // Factorial is not defined for negative numbers
        return "Undefined";
    } else if (n === 0) {
        // The factorial of 0 is 1
        return 1;
    } else {
        var result = 1;
        for (var i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Main function to calculate and print the factorial
function main(n) {
    if (Number.isInteger(n)) {
        console.log(`Factorial of ${n} is: ${factorial(n)}`);
    } else {
        console.log("Please provide an integer as input.");
    }
}

// Example usage:
main(3);
