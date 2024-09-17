// Move all zeros present in an array to the end 
// Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 } 
// Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }

function reorder(arr){
    let n = arr.length;
    for(let i =0; i<n; i++){
        if(arr[i] == 0){
            // shift to right
             arr[i]++
             return arr
            }
            else{
                return arr
            }
    }
}

arr = [6, 8, 2, 3, 4, 1, 0, 0, 0]
console.log(reorder(arr))