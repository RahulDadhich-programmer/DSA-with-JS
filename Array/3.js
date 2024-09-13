// Print all subarrays with 0 sum

// brute force
function printAllSubarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == 0) {
        console.log(`subarray [${i}] ... [${j}]`);
      }
    }
  }
}

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

printAllSubarray(arr);

let x = { name: "abc" };
const y = ["name"];

x[y] = "xyz";
console.log(x.name);
