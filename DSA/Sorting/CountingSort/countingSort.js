function countingSort(arr) {
  // Step 1: Find the maximum and minimum values in the array
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  // Step 2: Create a counting array to store counts of elements
  let countArray = new Array(max - min + 1).fill(0);

  // Step 3: Count the occurrences of each element in the input array
  for (let num of arr) {
    countArray[num - min]++; // Shift by min to handle negative numbers
  }

  // Step 4: Rebuild the sorted array
  let sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i + min); // Shift back to original number
      countArray[i]--;
    }
  }

  return sortedArray;
}

// Example usage:
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(unsortedArray)); // Output: [1, 2, 2, 3, 3, 4, 8]
