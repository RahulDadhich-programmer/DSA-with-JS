// find subarray
// function findSubarray(arr) {
//   let n = arr.length;
//   for (let st = 0; st < n; st++) {
//     for (let end = st; end < n; end++) {
//       for (let i = st; i <= end; i++) {
//     //   process.stdout.write(arr[i]);     
//         console.log(arr[i])
//       }
//       process.stdout.write(" ");
//     }
//     console.log("\n")
// }
// }

// arr = [1,2,3,4,5,6]
// console.log(findSubarray(arr))

// kadane's algorithm time complexity- O(n)
// maximum subarray sum
// {3,-4,5,4,-1,7,-8}
// start = same , end = end ++  
function sumSubarray(arr){
    let cs = 0; //current sum
    let max = -Infinity;
    for(let val of arr){
        cs += val;
        
        max = Math.max(cs,max);
        if(cs < 0){
            cs = 0; 
        }
    }
    return max
}
arr = [3,-4,5,4,-1,7,-8]
console.log(sumSubarray(arr))