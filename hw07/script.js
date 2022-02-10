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
let today = week[date.getDay()];
//let today = week[1];
const div = document.querySelector(".weekdays");
let lastP;

for ( let i = 0; i < week.length; i++) {
  div.insertAdjacentHTML("beforeend",`<p></p>`);
  lastP = div.lastElementChild;
  lastP.insertAdjacentText("beforeend", week[i]);
  if ((i === 0 && week[i] === today) || ( i === 6 && week[i] === today)) {
    lastP.style.fontStyle = "italic";
    lastP.style.fontWeight = "bold";
   } else if ((i === 0 && week[i] !== today) || ( i === 6 && week[i] !== today)) {
     lastP.style.fontStyle = "italic";
   } else if ((i !== 0 && week[i] === today) || ( i !== 6 && week[i] === today)) {
     lastP.style.fontWeight = "bold";
   }
}
