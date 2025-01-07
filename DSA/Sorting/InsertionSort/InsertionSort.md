# Insertion Sort

Insertion Sort is a simple sorting algorithm that works similarly to the way you sort playing cards in your hands.

## How It Works

1. Start with the second element in the array (index 1).
2. Compare it to the elements before it.
3. Shift larger elements to the right.
4. Insert the element into its correct position.
5. Repeat for all elements in the array.

---

## Algorithm

```javascript
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
```

---

## Example

```javascript
// Example usage:
const unsortedArray = [8, 4, 3, 7, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [3, 4, 6, 7, 8]
```

---

## Complexity

- **Time Complexity**:
  - Best Case: `O(n)` (when the array is already sorted)
  - Worst Case: `O(n²)` (when the array is sorted in reverse order)
  - Average Case: `O(n²)`
- **Space Complexity**: `O(1)` (in-place sorting)

---

## Insertion Sort in a Nutshell

- Suitable for small or nearly sorted datasets.
- Intuitive and simple to implement.
- Inefficient for large datasets compared to more advanced sorting algorithms like Quick Sort or Merge Sort.
