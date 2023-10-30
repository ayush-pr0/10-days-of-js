// Test Cases

const nums = [2, 3, 6, 6, 5];
// const nums = [34, 43, 62, 16, 67];
// const nums = [-2, -3, -6, -6, -5];
// const nums = [2, -3, 5, -6, 0];

console.log("Second Largest Value is: " + getSecondLargest(nums));

function getSecondLargest(nums) {
    // Remove duplicates from the array and sort it in descending order
    const sortedUnique = [...new Set(nums)].sort((a, b) => b - a);

    if (sortedUnique.length >= 2) {
        return sortedUnique[1];
    } else {
        return "There is no second largest value.";
    }
}
