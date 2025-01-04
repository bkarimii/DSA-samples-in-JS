//  Binary Search in JavaScript

// Here’s an example implementation of binary search in JavaScript:

function binarySearch(array, target) {
  let left = 0; // Start of the search range
  let right = array.length - 1; // End of the search range

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Middle index

    if (array[mid] === target) {
      return mid; // Target found
    } else if (array[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`Target found at index: ${result}`);
} else {
  console.log("Target not found.");
}
