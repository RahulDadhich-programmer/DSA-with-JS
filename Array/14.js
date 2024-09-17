// Rearrange an array with alternate high and low elements
// Given an integer array, rearrange it such that every second element becomes greater than its left and right elements. Assume no duplicate elements are present in the array.
/*
Input:  {1, 2, 3, 4, 5, 6, 7}
Output: {1, 3, 2, 5, 4, 7, 6}
Input:  {9, 6, 8, 3, 7}
Output: {6, 9, 3, 8, 7} 
Input:  {6, 9, 2, 5, 1, 4}
Output: {6, 9, 2, 5, 1, 4}

*/

function reArrangeArray(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
    if (i < arr.length - 1 && arr[i + 1] > arr[i]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
  }
  return arr;
}

arr = [4, 6, 3, 2, 9, 7];
console.log(reArrangeArray(arr));
