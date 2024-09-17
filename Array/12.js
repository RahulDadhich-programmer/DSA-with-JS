// Find the maximum product of two integers in an array
function maxProductOfTwo(arr) {
  if (arr.length < 2) {
    throw new Error("Array should contain at least two numbers.");
  }

  arr.sort((a, b) => a - b);

  const n = arr.length;
  const max1 = arr[n - 1];
  const max2 = arr[n - 2];
  const min1 = arr[0];
  const min2 = arr[1];

  const maxProduct = max1 * max2;

  const minProduct = min1 * min2;

  return Math.max(maxProduct, minProduct);
}

const array = [1, 10, 5, -2, -7];
console.log(maxProductOfTwo(array));    
