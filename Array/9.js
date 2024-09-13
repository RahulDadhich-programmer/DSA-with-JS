// In-place merge two sorted arrays
/*
Given two sorted arrays, X[] and Y[] of size m and n each,
merge elements of X[] with elements of array Y[] by maintaining the sorted order, 
i.e., fill X[] with the first m smallest elements and fill Y[] with remaining elements.

Input: X[] = { 1, 4, 7, 8, 10 }Y[] = { 2, 3, 9 } Output: X[] = { 1, 2, 3, 4, 7 }Y[] = { 8, 9, 10 }

*/

function merge(x, y) {
    let m = x.length;
    let n = y.length;
  
    for (let i = 0; i < m; i++) {
      if (x[i] > y[0]) {

        let temp = x[i];
        x[i] = y[0];
        y[0] = temp;
        
        let first = y[0];
        let k = 1;

        while (k < n && y[k] < first) {
          y[k - 1] = y[k];
          k++;
        }
        y[k - 1] = first;
      }
    }
  }
  
  let x = [1, 4, 7, 8, 10];
  let y = [2, 3, 9];
  
  merge(x, y);
  console.log("X:", x); 
  console.log("Y:", y); 
  
