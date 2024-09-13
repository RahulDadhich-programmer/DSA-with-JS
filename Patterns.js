/* print pattern  -- solid rectangle (rows-4, col-5)
 * * * * *
 * * * * *
 * * * * *
 * * * * * */
console.log("solid rectangle -----------");
for (let i = 1; i <= 4; i++) {
  // Loop for 4 rows
  let row = "";
  for (let j = 1; j <= 5; j++) {
    // Loop for 5 columns
    row += "* "; // Append stars to the row
  }
  console.log(row); // Print the complete row
}

/* print pattern  -- hollow rectangle (rows-4, col-5)
 * * * * *
 *       *
 *       *
 * * * * *    */
console.log("hollow rectangle -----------");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || j == 1 || i == 4 || j == 5) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

/* print pattern  -- half pyramid -4, col-4)
 *
 * *
 * * *
 * * * *
 */
console.log("half pyramid -----------");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/* print pattern  -- reverse half pyramid -4, col-4)
 * * * *
 * * *
 * *
 *
 */
console.log("reverse half pyramid -----------");
for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/* print pattern  -- half pyramid with spaces
 *
 **
 ***
 ****
 */
console.log("half pyramid with spaces -----------");
let n = 4;
for (let i = 1; i <= n; i++) {
  // inner loop -- space print
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  //   inner loop--> star print
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
*/
console.log("number in half pyramid -----------");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

/*
12345
1234
123
12
1 */
console.log("inverted half pyramid with numbers -----------");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    row += j;
  }
  console.log(row);
}

/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
console.log("Floyd's triangle -----------");
let number = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += number + " ";
    number++;
  }
  console.log(row);
}

/*
1
01
101
0101
10101
*/
console.log("0 1 pattern -----------");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    let sum = i + j;
    if (sum % 2 == 0) {
      row += "1";
    } else {
      row += "0";
    }
  }
  console.log(row);
}

/*
 *      *
 **    **
 ***  ***
 ********
 ********
 ***  ***
 **    **
 *      *
 */
console.log("Butterfly pattern -----------");
// Upper part of the butterfly
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= 2 * (4 - i); j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

/*
 *****
 *****
 *****
 *****
 *****
 */
console.log("solid Rhombus");
for (let i = 1; i <= 5; i++) {
  // spaces
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }
  // stars
  for (let j = 1; j <= 5; j++) {
    process.stdout.write("*");
  }
  console.log();
}

/*
      1
     2 2
    3 3 3
   4 4 4 4
  5 5 5 5 5

*/
console.log("Number pyramid");
for (let i = 1; i <= 5; i++) {
  // spaces
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }
  // numbers
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log();
}
/*
      1
    2 1 2
  3 2 1 2 3
4 3 2 1 2 3 4
*/
console.log("palindrome");
for (let i = 1; i <= 4; i++) {
  // spaces
  for (let j = 1; j <= 4 - i; j++) {
    process.stdout.write(" ");
  }
  // first half
  for (let j = i; j >= 1; j--) {
    process.stdout.write(j.toString());
  }
  // second half
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j.toString());
  }
  console.log();
}
/*
2 * i - 1 => stars
spaces-> n-i
*/
console.log("Diamond Pattern")
for(let i = 1; i<=5; i++){
  // upper half
  // spaces
  for(let j=1; j<=5-i; j++){
    process.stdout.write(" ")
  }
  for(let j =1; j<=2*i-1; j++){
    process.stdout.write("*")
  }
  console.log()
}
// lower half
for(let i = 4; i>=1; i--){
  // upper half
  // spaces
  for(let j=1; j<=5-i; j++){
    process.stdout.write(" ")
  }
  for(let j =1; j<=2*i-1; j++){
    process.stdout.write("*")
  }
  console.log()
} 

