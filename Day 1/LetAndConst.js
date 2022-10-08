
main()

function main() {

    const PI = Math.PI;

    // Use can user this one for user input.
    // let r = readLine();
    
    let r = 4;

    // Print the area of the circle:
    console.log(PI * (r ** 2)); //double * means square 
    // Print the perimeter of the circle:
    console.log(2 * PI * r);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

