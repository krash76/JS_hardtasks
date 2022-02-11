"use strict";
// russian version
const rusWeek = {
  0: "Воскресенье",
  1: "Понедельник", 
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота"
};

const rusMonths = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

document.body.innerHTML = "<div></div>";
document.body.insertAdjacentHTML("beforeend", "<div></div>");

const divs = document.querySelectorAll("div");
const div1 = divs[0];
const div2 = divs[1];

setInterval( () => {
  let today = new Date();
  let weekday = rusWeek[today.getUTCDay()];
  let date = today.getDate();
  let month = today.getMonth() +1;
  console.log (month);
  let monthText = rusMonths[today.getMonth()];
  let year = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let hoursForm;
  let minForm;
  let secForm;
  
  if (hours === 1 || hours === 21) {
    hoursForm = "час"
  } else if ((hours > 1 && hours < 5) || (hours > 21 && hours < 25)) {
    hoursForm = "часа";
  } else {
    hoursForm = "часов";
  };

  let minString = minutes.toString();
  let secString = seconds.toString();
  
  if (minString[minString.length-1] === "1") {
    minForm = "минута";
  } else if ((minString[minString.length-1] === "2" || minString[minString.length-1] === "3" || minString[minString.length-1] === "4")) {
    minForm = "минуты";
  } else {
    minForm = "минут";
  };

  if (secString[secString.length-1] === "1") {
    secForm = "секунда";
  } else if ((secString[secString.length-1] === "2" || secString[secString.length-1] === "3" || secString[secString.length-1] === "4")) {
    secForm = "секунды";
  } else {
    secForm = "секунд";
  };

  if (date.toString().length < 2) {
    date = "0" + date.toString();
  };
  if (month.toString().length < 2) {
    month = "0" + month.toString();
  }; 
  if (hours.toString().length < 2) {
    hours = "0" + date.toString();
  };
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes.toString();
  };
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds.toString();
  };
  
  div1.textContent = `Сегодня ${weekday}, ${date} ${monthText} ${year} года, ${hours} ${hoursForm} ${minutes} ${minForm} ${seconds} ${secForm}`;
  div2.textContent = `${date}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
}, 1000) 


//english version
/* 
const engWeek = {
  0: "Sunday",
  1: "Monday", 
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const engMonths = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.body.innerHTML = "<div></div>";
const div = document.querySelector("div");
div.className = "date";

setInterval( () => {
  let today = new Date();
  let weekday = engWeek[today.getUTCDay()];
  let date = today.getDate();
  let month = engMonths[today.getMonth()];
  let year = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  div.textContent = `Today is ${weekday}, ${date} ${month} ${year}, ${hours} hours ${minutes} minutes ${seconds} seconds`;
}, 1000)
*/