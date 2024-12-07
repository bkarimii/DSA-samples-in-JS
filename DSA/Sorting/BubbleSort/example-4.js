// This task is inspired by a Codewars Kata on Bubble Sort, reimagined with a unique twist for a fresh perspective.
// Check out the original here: [https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript].

/**
 * Task: Modify Bubble Sort to bubble the smallest number to the front of the array in a single pass.
 *
 * Explanation:
 * This variant of Bubble Sort works in reverse order by comparing adjacent elements
 * starting from the end of the array towards the beginning. Instead of "bubbling" the
 * largest value to the end, the smallest value is "bubbled" to the beginning of the array.
 *
 * Step-by-step:
 * 1. Start from the end of the array and compare each pair of adjacent elements.
 * 2. If the right element is smaller than the left, swap them.
 * 3. Continue until the smallest number is "bubbled" to the front of the array.
 *
 * Example:
 * Input: [9, 5, 3, 7, 6, 1, 4, 2]
 * Pass:
 * - Compare 2 and 4 → Swap → [9, 5, 3, 7, 6, 1, 2, 4]
 * - Compare 2 and 1 → Swap → [9, 5, 3, 7, 6, 2, 1, 4]
 * - Compare 2 and 6 → Swap → [9, 5, 3, 7, 2, 6, 1, 4]
 * - Compare 2 and 7 → Swap → [9, 5, 3, 2, 7, 6, 1, 4]
 * - Compare 2 and 3 → Swap → [9, 5, 2, 3, 7, 6, 1, 4]
 * - Compare 2 and 5 → Swap → [9, 2, 5, 3, 7, 6, 1, 4]
 * - Compare 2 and 9 → Swap → [2, 9, 5, 3, 7, 6, 1, 4]
 * Output after one pass: [2, 9, 5, 3, 7, 6, 1, 4]
 */

function bubblesortMinToFront(arr) {
  // Create a copy of the input array to avoid mutating it
  const result = [...arr];

  // Iterate from the end of the array to the beginning
  for (let i = result.length - 1; i > 0; i--) {
    // Compare each adjacent pair, swapping if necessary
    if (result[i] < result[i - 1]) {
      [result[i], result[i - 1]] = [result[i - 1], result[i]]; // Swap elements
    }
  }

  // Return the modified array after one pass
  return result;
}

// Example Usage
const array = [9, 5, 3, 7, 6, 1, 4, 2];
console.log("Original Array:", array); // Output: [9, 5, 3, 7, 6, 1, 4, 2]
console.log("Result After One Pass:", bubblesortMinToFront(array)); // Output: [2, 9, 5, 3, 7, 6, 1, 4]
