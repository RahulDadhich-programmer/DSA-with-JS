// Find maximum length subarray having a given sum
// Given an integer array, find the maximum length subarray having a given sum.

// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8
// Subarrays with sum 8 are
// { -5, 5, 3, 5 }
// { 3, 5 }
// { 5, 3 }
// The longest subarray is { -5, 5, 3, 5 } having length 4

function findMaxLenSubArray(target, arr) {
    let maxLength = 0;
    let maxSubarray = [];
    let sum = 0;
    const sumIndexMap = new Map();
  
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
  
      if (sum === target) {
        // Found a subarray from the start to the current index
        if (end + 1 > maxLength) {
          maxLength = end + 1;
          maxSubarray = arr.slice(0, end + 1);
        }
      }
  
      if (sumIndexMap.has(sum - target)) {
        const subarrayStart = sumIndexMap.get(sum - target) + 1;
        if (end - subarrayStart + 1 > maxLength) {
          maxLength = end - subarrayStart + 1;
          maxSubarray = arr.slice(subarrayStart, end + 1);
        }
      }
  
      // Store the first occurrence of the current sum
      if (!sumIndexMap.has(sum)) {
        sumIndexMap.set(sum, end);
      }
    }
  
    return maxSubarray;
  }
  
  const arr = [5, 6, -5, 5, 3, 5, 3, -2, 0];
  console.log(findMaxLenSubArray(8, arr));
  