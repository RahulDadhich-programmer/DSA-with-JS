// Find the index of 0 to be replaced to get the maximum length sequence of continuous ones
// For example, consider the array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }. We need to replace index 7 to get the continuous sequence of length 6 containing all 1’s.

// Input : [0,0, 1, 0, 1, 1, 1, 0, 1, 1 ]
// output: [7,7, 1, 7, 1, 1, 1, 7, 1, 1 ]
function findIndexofZero(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
            arr[i] =n
        }
    }
    return arr;
}

arr = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1];
n = 7 
findIndexofZero(arr,n);
console.log('array:',arr)
