// Biotonic subsequence
/*
sample test case
Input:8
[1,1,1,2,1,0,4,5,2,1]

Output: 6
max length:[1,2,4,5,2,1]
Strictly increasing and strictly decreasing

*/
function longestBitonicSubsequence(arr) {
    const n = arr.length;

    // Step 1: Calculate LIS (Longest Increasing Subsequence)
    const lis = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    // Step 2: Calculate LDS (Longest Decreasing Subsequence)
    const lds = Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (arr[i] > arr[j] && lds[i] < lds[j] + 1) {
                lds[i] = lds[j] + 1;
            }
        }
        return lds;
    }

    // Step 3: Combine LIS and LDS
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
    }

    return maxLength;
}

// Test case
const arr = [1, 1, 1, 2, 1, 0, 4, 5, 2, 1];
console.log(longestBitonicSubsequence(arr)); // Output: 6
