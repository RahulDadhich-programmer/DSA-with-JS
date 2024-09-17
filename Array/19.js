// Replace every array element with the product of every other element without using a division operator
/*
Input:  { 1, 2, 3, 4, 5 }
Output: { 120, 60, 40, 30, 24 }
Input:  { 5, 3, 4, 2, 6, 8 }
Output: { 1152, 1920, 1440, 2880, 960, 720 }
*/

function productArray(arr) {
    const n = arr.length;
    let left = new Array(n).fill(1);  
    let right = new Array(n).fill(1); 
    let result = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        left[i] = arr[i - 1] * left[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = arr[i + 1] * right[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
}

console.log(productArray([1, 2, 3, 4, 5]));     
console.log(productArray([5, 3, 4, 2, 6, 8]));  
