function quickSort(arr) {
  // Base case: arrays with 1 or 0 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (here, the last element)
  const pivot = arr[arr.length - 1];
  const left = []; // Elements less than or equal to pivot
  const right = []; // Elements greater than pivot

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursive calls and combining sorted arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const numbers = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", numbers);

const sortedArray = quickSort(numbers);
console.log("Sorted array:", sortedArray);
