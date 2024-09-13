// Find the duplicate element in a limited range array
// Given a limited range array of size n containing elements between 1 and n-1 with one element repeating, find the duplicate number in it without using any extra space.

// Input:  { 1, 2, 3, 4, 4 }
// Output: The duplicate element is 4
// Input:  { 1, 2, 3, 4, 2 }
// Output: The duplicate element is 2

// using hashing

function findDuplicate(arr) {
  let slow = arr[0];
  let fast = arr[0];
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow != fast);
  
  let finder = arr[0];
  while (finder !== slow) {
      finder = arr[finder];
      slow = arr[slow];
    }
    
    return finder;
}

// using XOR
function findDuplicate(nums) {
    let xorAllNumbers = 0;
    let xorRange = 0;
    const n = nums.length - 1; // since there's one duplicate, the array size is n+1

    // XOR all numbers in the array
    for (let num of nums) {
        xorAllNumbers ^= num;
    }

    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xorRange ^= i;
    }

    // XOR-ing the two results gives the duplicate number
    return xorAllNumbers ^ xorRange;
}

// Test cases
console.log(findDuplicate([1, 2, 3, 4, 4]));  // Output: 4
console.log(findDuplicate([1, 2, 3, 4, 2]));  // Output: 2
