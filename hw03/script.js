"use strict";

//task_1

//if
let lang = prompt("Choose your language / Выбери язык ", "ru/en");

if (lang === "ru") {
  console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье")
} else if (lang === "en") {
  console.log("Monday, Tuesday, Wenesday, Thursday, Saturday, Sunday")
}

//switch
switch (lang) {
  case "ru":
    console.log("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
  break;
  case "en" :
    console.log("Monday, Tuesday, Wenesday, Thursday, Saturday, Sunday");
  break;
}

//array
const daysArray = {
  ru: "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье",
  en: "Monday, Tuesday, Wenesday, Thursday, Saturday, Sunday"
}

for (let key in daysArray) {
  if (key === lang) {
    console.log (daysArray[key])
  }
}

//task_2
let namePerson = prompt("Put the name / Введи имя");
(namePerson === "Artem") ? console.log ("director") :
(namePerson === "Alex") ? console.log("teacher") :
console.log ("student");
