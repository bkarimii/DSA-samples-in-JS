> **Merge Sort**
>
> Merge Sort is a popular divide-and-conquer sorting algorithm. It works by dividing the input array into smaller subarrays, sorting those subarrays, and then merging them back together into a single sorted array.
>
> **How Merge Sort Works (Step-by-Step):**
>
> - **Divide:** The array is divided into two halves until each half contains only one element (a single element is always sorted).
> - **Conquer:** Recursively sort the two halves.
> - **Merge:** Combine (merge) the sorted halves back together in sorted order.
>
> **Key Properties of Merge Sort:**
>
> - **Stable Sort:** Maintains the order of equal elements (important for preserving data relationships).
> - **Time Complexity:** Always \( O(n \log n) \), where \( n \) is the number of elements in the array.
> - **Space Complexity:** \( O(n) \) due to the extra space needed for temporary arrays during merging.
