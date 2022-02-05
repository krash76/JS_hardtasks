"use strict";

//task 2.1
let arr = [];

arr[0] = "2457";
arr[1] = "657125";
arr[2] = "474581";
arr[3] = "657";
arr[4] = "65";
arr[5] = "4214";
arr [6] = "674";

for (let i = 0; i < 7; i++){
  if (arr[i][0] === "2" || arr[i][0] === "4")
 console.log (arr[i])
}
// or
for (let el of arr){
  if (el[0] === "2" || el[0] === "4")
 console.log (el)
}

//task 2.2

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
  console.log( i, "divisors of this number/делители этого числа: " + 1 + " and/и " + i );
}
