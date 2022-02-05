"use strict";

let text = prompt("Enter any text/ введите любой текст");
while (text === undefined || text === null || text.trim().length === 0) {
    alert("error! enter the text, please!");
    text = prompt("Enter any text/ введите любой текст");
}

function getString(text) {
  if (text.trim().length > 30) {
    text = text.trim().substring(0, 30);
  }
  return (text = text  + "...");
}

console.log(getString(text));
