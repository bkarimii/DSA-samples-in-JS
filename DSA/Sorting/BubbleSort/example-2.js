// Problem Definition:
// Imagine a system collecting customer ratings for a small business.
// Customers provide ratings between 1 and 5. The owner wants to sort
// these ratings in ascending order to analyze them more effectively.
// Use the Bubble Sort algorithm to solve this problem.

// Steps to Solve:
// 1. Define an array of customer ratings as input.
// 2. Implement the Bubble Sort algorithm:
//    - Compare adjacent elements in the array.
//    - Swap them if they are in the wrong order.
//    - Repeat this process until the array is fully sorted.
// 3. Return the sorted ratings array.
// 4. Print the sorted array to the console.

// Bubble Sort Implementation
function bubbleSort(ratings) {
  let n = ratings.length;
  // Outer loop for the number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (ratings[j] > ratings[j + 1]) {
        // Swap elements using destructuring
        [ratings[j], ratings[j + 1]] = [ratings[j + 1], ratings[j]];
      }
    }
  }
  return ratings; // Return the sorted array
}

// Input: List of customer ratings
let customerRatings = [4, 2, 5, 3, 1, 3, 4.5, 4.1, 1.3, 3.8];

// Sort the ratings using Bubble Sort
let sortedRatings = bubbleSort(customerRatings);

// Output the sorted ratings
console.log("Sorted Customer Ratings:", sortedRatings);
