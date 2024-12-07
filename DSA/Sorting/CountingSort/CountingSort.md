# Counting Sort Algorithm

## Introduction

**Counting Sort** is a non-comparative sorting algorithm that works by counting the number of occurrences of each distinct element in the input array. It uses this count information to determine the position of each element in the sorted output array. It is particularly efficient when the range of input values (i.e., the difference between the maximum and minimum elements) is small relative to the number of elements.

## How it Works

### Step-by-Step Process:

1. **Find the Range of the Array:**

   - Identify the minimum and maximum values in the input array.

2. **Create a Counting Array:**

   - Create an auxiliary array (`countArray`) that will store the count of each element in the input array. The index of the `countArray` corresponds to the value of elements in the input array.

3. **Count the Occurrences:**

   - Traverse the input array, and for each element, increment the count in the `countArray` at the index corresponding to that element.

4. **Rebuild the Sorted Array:**
   - Using the `countArray`, reconstruct the sorted output array by iterating through the `countArray` and placing each element back in its correct sorted position.
