// Sort an array of 0’s, 1’s, and 2’s (Dutch National Flag Problem)
// Given an array containing only 0’s, 1’s, and 2’s, sort it in linear time and using constant space.
// Input:  { 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 }
// Output: { 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2 }


// not solved

function sortDutch(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      arr[high], (arr[mid] = arr[mid]), arr[high];
      high--;
    }
  }
  return arr;
}

arr = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0];
sortDutch(arr);
console.log(arr);
