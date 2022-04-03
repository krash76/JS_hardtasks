"use strict";

const items = document.querySelector(".items");
const description = document.querySelector(".description");

const getData = () => {
  fetch("db.json")
  .then(response =>  response.json())
  .then(data => {
    data.cars.forEach((car) => {
      for (let i=0; i<items.length; i++) {
        if ( items[i].textContent === car.brand) {
          items[i].value = `модель: ${car.model}\nцена: ${car.price} `;
        }
      }
    })
  })
  .catch(error => {
    console.log (error)
  });
}

items.addEventListener("input", () => {
  description.textContent = items.options[items.selectedIndex].value
});

getData();