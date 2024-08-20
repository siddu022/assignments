// clock that shows the current machine time.

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateClock() {
  let date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  console.log(`${hours}:${minutes}:${seconds} ${meridiem}`);
}

setInterval(updateClock, 1000);
