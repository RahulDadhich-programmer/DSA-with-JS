// Find majority element (Boyer–Moore Majority Vote Algorithm)
//the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}.

// Brute force solution:

function findMajorityElementNaive(arr, n) {
  for (let i = 0; i <= n / 2; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > n / 2) {
      return arr[i];
    }
  }
  return -1;
}

let arr = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
console.log(findMajorityElementNaive(arr, arr.length));
// time complexity - o(n^2)

// optimal solution:(sorting, and then loop)
function optimalSolution(arr) {
  let n = arr.length;
  let sort = arr.sort();
  let freq = 1;
  let ans = sort[0];
  for (let i = 1; i < n; i++) {
    if (sort[i] === sort[i - 1]) {
      freq++;
    } else {
      freq = 1;
      ans = sort[i];
    }
    if (freq > n / 2) {
      return ans;
    }
  }
  return ans;
}
console.log("optimal", optimalSolution(arr));
// time complexity: O(nlogn)

// Boyer-Moore Majority Vote Algorithm
function findMajorityElement(arr) {
  let freq = 0;
  let ans = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (freq == 0) {
      ans = arr[i];
    }
    if (ans == arr[i]) {
      freq++;
    } else {
      freq--;
    }
  }
  
  // let count = 0;
  // for (let val in arr) {
  //   if (val == ans) {
  //     count++;
  //   }
  // }
  // if (count > n / 2) {
  //   return ans;
  // } else {
  //   return -1;
  // }
  return ans
}

let arr2 = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
console.log(findMajorityElement(arr));
// time complexity: O(n)
