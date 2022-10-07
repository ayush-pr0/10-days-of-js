// Test Cases 

nums = [2, 3, 6, 6, 5];
// nums = [34, 43, 62, 16, 67];
// nums = [-2, -3, -6, -6, -5];
// nums = [2, -3, 5, -6, 0];

console.log("Second Largest Value is: " + getSecondLargest(nums));

function getSecondLargest(nums) {
    function compareValue(a, b) {
        return a - b;
    }
    nums.sort(compareValue);
    const largest = nums[nums.length - 1];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < largest) {
            return nums[i];
        }
    }
}