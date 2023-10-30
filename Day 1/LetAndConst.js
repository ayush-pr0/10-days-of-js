function main() {
    const PI = Math.PI;
    let r = 4;

    // Print the area of the circle:
    console.log("Area of the circle: " + PI * (r ** 2));
    // Print the perimeter of the circle:
    console.log("Perimeter of the circle: " + 2 * PI * r);

    try {
        // Attempt to redefine the value of the constant variable PI
        PI = 0; // This line will raise an error
        // Attempt to print the value of PI (which won't execute due to the error)
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// Call the main function
main();
