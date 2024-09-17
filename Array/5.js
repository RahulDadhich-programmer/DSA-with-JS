// Find the largest subarray formed by consecutive integers
// Given an integer array, find the largest subarray formed by consecutive integers. The subarray should contain all distinct values.

// Input:  { 2, 0, 2, 1, 4, 3, 1, 0 }
// Output: The largest subarray is { 0, 2, 1, 4, 3 }

function findLargestSubarray(arr) {
    let maxLen = 0;
    let startIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let visited = new Set();
        let minVal = arr[i];
        let maxVal = arr[i];


        for (let j = i; j < arr.length; j++) {
            if (visited.has(arr[j])) {
                break;
            }

            visited.add(arr[j]);

 
            minVal = Math.min(minVal, arr[j]);
            maxVal = Math.max(maxVal, arr[j]);

            if (maxVal - minVal === j - i) {
                let currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    startIndex = i;
                }
            }
        }
    }

    return arr.slice(startIndex, startIndex + maxLen);
}

const arr = [2, 0, 2, 1, 4, 3, 1, 0];
console.log("The largest subarray is", findLargestSubarray(arr));
