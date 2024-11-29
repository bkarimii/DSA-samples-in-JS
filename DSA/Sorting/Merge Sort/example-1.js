// Example
// Imagine you have a deck of cards that needs to be sorted:

// * Split the deck into two halves.
// * Keep splitting each half into smaller piles until each pile has just one card.
// * Compare two small piles and merge them into one sorted pile.
// * Repeat the process of merging sorted piles until you end up with one fully sorted deck.

function mergeSort(array) {
  // Base case: If the array has 1 or no elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Step 1: Divide the array into two halves
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid); // Left half
  const right = array.slice(mid); // Right half

  // Step 2: Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = []; // Array to store the merged result
  let leftIndex = 0,
    rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left or right array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
