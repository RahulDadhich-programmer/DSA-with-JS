// Find the largest subarray having an equal number of 0’s and 1’s
// Input:  { 0, 0, 1, 0, 1, 0, 0 }
// Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0 }
function findLargestSubarray(arr) {
    // Convert 0's to -1's
    const convertedArr = arr.map(x => x === 0 ? -1 : x);
    
    // Initialize variables
    let maxLength = 0;
    let startIndex = -1;
    let endIndex = -1;
    const prefixSumMap = new Map();
    let prefixSum = 0;
    
    // Traverse the array
    for (let i = 0; i < convertedArr.length; i++) {
        prefixSum += convertedArr[i];
        
        // If the prefix sum is zero, update the maximum length
        if (prefixSum === 0) {
            maxLength = i + 1;
            startIndex = 0;
            endIndex = i;
        }
        
        // If prefix sum has been seen before
        if (prefixSumMap.has(prefixSum)) {
            const prevIndex = prefixSumMap.get(prefixSum);
            const length = i - prevIndex;
            
            if (length > maxLength) {
                maxLength = length;
                startIndex = prevIndex + 1;
                endIndex = i;
            }
        } else {
            // Store the prefix sum with its index
            prefixSumMap.set(prefixSum, i);
        }
    }
    
    // Extract the largest subarray
    const largestSubarray = arr.slice(startIndex, endIndex + 1);
    
    return largestSubarray;
}

// Example usage
const inputArray = [0, 0, 1, 0, 1, 0, 0];
const largestSubarray = findLargestSubarray(inputArray);
console.log("Largest subarray with equal number of 0's and 1's:", largestSubarray);
