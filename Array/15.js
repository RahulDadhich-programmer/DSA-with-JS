// Find equilibrium index of an array

function findEquilibriumIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0); // Calculate total sum of the array
    let leftSum = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Right sum is totalSum minus current element and left sum
        let rightSum = totalSum - leftSum - arr[i];

        // Check if left sum is equal to right sum
        if (leftSum === rightSum) {
            return i;  // Return the equilibrium index
        }

        // Update the left sum
        leftSum += arr[i];
    }

    // If no equilibrium index is found, return -1
    return -1;
}

// Example usage:
const arr = [1, 3, 5, 2, 2];
const equilibriumIndex = findEquilibriumIndex(arr);
console.log("The equilibrium index is", equilibriumIndex);
