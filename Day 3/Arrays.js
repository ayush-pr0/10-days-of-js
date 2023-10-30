function getSecondLargest(nums) {
    let first = nums[0]; // Initialize 'first' with the first element
    let second = -1;    // Initialize 'second' with a negative value
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first; // Update 'second' with the previous 'first'
            first = nums[i]; // Update 'first' with the new maximum
        } else if (nums[i] > second && nums[i] < first) {
            second = nums[i]; // Update 'second' with a new value if it's greater than the current 'second' but smaller than 'first'
        }
    }
    
    return second; // Return the second largest value
}

function main() {
    const n = +(readLine()); // Read the number of elements
    const nums = readLine().split(' ').map(Number); // Read and split the array
    console.log(getSecondLargest(nums)); // Call the function and print the result
}
