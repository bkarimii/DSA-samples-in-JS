Quick Sort Explanation
Quick Sort is a divide-and-conquer algorithm used to sort an array. It works by selecting a "pivot" element from the array and partitioning the other elements into two groups:

Elements smaller than or equal to the pivot (placed on the left).
Elements greater than the pivot (placed on the right).
This process is repeated recursively for each partition until the entire array is sorted.

How Quick Sort Works
Choose a Pivot: Select an element as the pivot. It can be the first element, last element, middle element, or even chosen randomly.
Partition the Array: Rearrange the array so that:
All elements smaller than the pivot come before it.
All elements greater than the pivot come after it.
Recursive Steps: Recursively apply the above steps to the left and right partitions.
Base Case: If the partition size is 1 or 0, it’s already sorted.

Time Complexity
Best Case:
𝑂(𝑛log𝑛)
O(nlogn) (when the pivot divides the array into two equal halves).
Worst Case:
𝑂(𝑛2)
O(n2) (when the pivot is the smallest or largest element every time).
Average Case:
𝑂(𝑛log𝑛)
O(nlogn).
