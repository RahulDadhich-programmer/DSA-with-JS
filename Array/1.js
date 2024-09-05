// 1.Find pair with given sum in the array
/*
Input: nums = [8, 7, 2, 5, 3, 1]
target = 10
Output: Pair found (8, 2)orPair found (7, 3)
Input: nums = [5, 2, 6, 8, 1, 9]
target = 12
Output: Pair not found
*/
// ------Brute force
function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`Pair found (${arr[i]}, ${arr[j]})`);
      }
    }
  }
}
let arr = [8, 7, 2, 5, 3, 1];
findPair(arr, 10);

// // --using sorting
function findPair2(nums, target) {
  // Custom implementation of array sorting (Bubble Sort)
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swap the elements
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      console.log(`Pair found (${nums[left]}, ${nums[right]})`);
      return;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  console.log("Pair not found");
}

let nums1 = [8, 7, 2, 5, 3, 1];
let target1 = 10;
// findPair2(nums1, target1);

let nums2 = [5, 2, 6, 8, 1, 9];
let target2 = 12;
// findPair2(nums2, target2);

// using hashing 
function findPairWithoutInbuilt(arr, target) {
    let hashMap = {};  // Create an empty object to act as a hash map
  
    // Traverse through the array
    for (let i = 0; i < arr.length; i++) {
      let complement = target - arr[i];  // Calculate the complement
  
      // Check if the complement exists in the hash map
      if (hashMap[complement] !== undefined) {
        console.log(`Pair found (${arr[i]}, ${complement})`);
        return;
      }
  
      // Add the current element to the hash map manually
      hashMap[arr[i]] = true;  // Mark the element as seen by setting its value to true
    }
  
    // If no pair is found
    console.log("Pair not found");
  }
  

  findPairWithoutInbuilt(nums1, target1);  // Output: Pair found (8, 2)
  
  findPairWithoutInbuilt(nums2, target2);  // Output: Pair not found
  