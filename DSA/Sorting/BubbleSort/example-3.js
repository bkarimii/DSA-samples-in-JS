/*
Problem: Bubble Sorting with Snapshots

You need to implement the Bubble Sort algorithm and capture the state of the list after every swap. 
Your task is to return all these snapshots as a list of arrays.

Input:
  - A list of integers `arr` that needs sorting.
Output:
  - A list of arrays, where each array represents the state of the list after every swap.
  - If the array is already sorted, return an empty list of snapshots (`[]`).

Rules:
1. Snapshots are only taken after swaps. If no swap occurs, nothing is added to the snapshot list.
2. If the array is already sorted, the result is an empty array.
3. Return snapshots in the order they were made.

Example Scenarios:
  Input: [1, 2, 4, 3]
  Output: [[1, 2, 3, 4]]

  Input: [2, 1, 4, 3]
  Output: [[1, 2, 4, 3], [1, 2, 3, 4]]

  Input: [1, 2, 3, 4]
  Output: []

Steps for Solution:
1. Create a `snapshots` array to store the states after each swap.
2. Use nested loops to perform Bubble Sort:
   - The outer loop manages the passes.
   - The inner loop compares adjacent elements and swaps if needed.
3. After each swap, take a snapshot (copy of the array) and add it to `snapshots`.
4. Exit early if no swaps are made in a pass, as the array is already sorted.
5. Return the `snapshots` array.

*/

function bubbleSortSnapshots(arr) {
  // Array to store snapshots after each swap
  const snapshots = [];

  // Outer loop to control the number of passes
  for (let i = 0; i < arr.length; i++) {
    // A flag to check if swaps occurred in this pass
    let swapped = false;

    // Inner loop to compare adjacent elements
    for (let j = 0; j < arr.length - i - 1; j++) {
      // If the current element is greater than the next one, swap them
      if (arr[j] > arr[j + 1]) {
        // Perform the swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Add the current state of the array to snapshots
        snapshots.push([...arr]); // Use the spread operator to make a copy
        swapped = true; // Mark that a swap occurred
      }
    }

    // If no swaps occurred during this pass, the array is sorted
    if (!swapped) {
      break; // Exit the loop early as no further sorting is needed
    }
  }

  // Return the list of snapshots
  return snapshots;
}

// Example Tests
console.log(bubbleSortSnapshots([1, 2, 4, 3]));
// Output: [[1, 2, 3, 4]]

console.log(bubbleSortSnapshots([2, 1, 4, 3]));
// Output: [[1, 2, 4, 3], [1, 2, 3, 4]]

console.log(bubbleSortSnapshots([1, 2, 3, 4]));
// Output: []

console.log(bubbleSortSnapshots([4, 3, 2, 1]));
// Output: [[3, 4, 2, 1], [3, 2, 4, 1], [3, 2, 1, 4], [2, 3, 1, 4], [2, 1, 3, 4], [1, 2, 3, 4]]
