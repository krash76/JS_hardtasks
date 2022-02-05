"use strict";

const num = 266219;
const numArray = Array.from(num.toString());
let arr = new Array();
let result = 1;


numArray.forEach((el) => arr.push(Number(el)));
for (let i of arr) {
  result *= i;
}
console.log (result);
result = result**3;
console.log(result.toString().substring(0,2));