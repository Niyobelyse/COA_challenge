function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Request user input for Array Manipulation
let arrInput = prompt("Enter the array elements separated by commas");
let targetInput = prompt("Enter the target sum:");

let inputArr = arrInput.split(',').map(Number);
let target = Number(targetInput);

console.log(`Array: ${inputArr}`);
console.log(`Target: ${target}`);
console.log(`Subarray with target sum exists: ${hasContiguousSubarrayWithSum(inputArr, target)}`);

// Example usage
const exampleArr = [4, 2, 7, 1, 9, 5];
const exampleTarget = 17;
console.log(hasContiguousSubarrayWithSum(exampleArr, exampleTarget));  // Output: true
