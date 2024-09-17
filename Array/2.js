// Check if a subarray with 0 sum exists or not
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Output: Subarray with zero-sum exists The subarray with a sum of 0 are:
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

function subArrayWithZero(arr) {
  let cs = 0; //current sum
  for (let val of arr) {
    cs += val;
    if (cs === 0) {
      return cs;
    }
  }
}
let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
console.log(subArrayWithZero(arr))
