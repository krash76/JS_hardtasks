const week = [];

week[0] = "Sunday";
week[1] = "Monday";
week[2] = "Tuesday";
week[3] = "Wednesday";
week[4] = "Thursday";
week[5] = "Friday";
week[6] = "Saturday";

//or
//const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
const today = week[date.getDay()];
const div = document.querySelector(".weekdays");
let lastP;

for ( let i = 0; i<week.length; i++) {
  div.insertAdjacentHTML("beforeend",`<p></p>`);
  lastP = div.lastElementChild;
  lastP.insertAdjacentText("beforeend", week[i]);
  if (week[i] === today) {
    lastP.style.fontWeight = "bold";
    lastP.style.fontStyle = "italic";
  } else if (i === 0 || i === 6) {
    lastP.style.fontWeight = "bold";
  } else {
    lastP.style.fontStyle = "italic";
  } 
}
