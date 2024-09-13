// Merge two arrays by satisfying given constraints
// Input: 
// X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0 }
// Y[] = { 1, 8, 9, 10, 15 } The vacant cells in X[] is represented by 0 
// Output: 
// X[] = { 1, 2, 3, 5, 6, 8, 9, 10, 15 }

function mergeArrays(X, Y) {
    // Extract non-zero elements from X
    let nonZeroX = X.filter(num => num !== 0);
  
    // Combine non-zero elements of X with all elements of Y
    let mergedArray = nonZeroX.concat(Y);
  
    // Sort the combined array in non-decreasing order
    mergedArray.sort((a, b) => a - b);
  
    // Replace elements of X with the sorted array
    for (let i = 0; i < X.length; i++) {
      X[i] = mergedArray[i];
    }
  
    return X;
  }
  
  // Example usage:
  let X = [0, 2, 0, 3, 0, 5, 6, 0, 0];
  let Y = [1, 8, 9, 10, 15];
  
  let result = mergeArrays(X, Y);
  console.log(result);  // Output: [1, 2, 3, 5, 6, 8, 9, 10, 15]
  