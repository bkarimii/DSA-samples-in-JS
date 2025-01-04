# Binary Search Explained

Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search range in half. Here's how it works:

1. Start with the middle element of the sorted list.
2. Compare the target value with the middle element:
   - If the target is equal to the middle element, you've found the value.
   - If the target is smaller than the middle element, search in the left half of the list.
   - If the target is larger than the middle element, search in the right half of the list.
3. Repeat the process for the new half until the target is found or the range becomes empty.

### Key Points

- Binary search only works on **sorted lists**.
- The time complexity is **O(log n)**, which makes it very fast for large datasets.
