// Here's the `insertionSort` function with an example:

javascript;
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    // Shift elements of the sorted part to make space for the current element
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the current element into its correct position
    array[j + 1] = current;
  }
  return array;
}

// Example usage:
const unsortedArray = [8, 4, 3, 7, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [3, 4, 6, 7, 8]
