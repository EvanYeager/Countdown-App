const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const TIMER = 1000; // in milis
let currentDate = new Date();
let year = currentDate.getUTCFullYear() + 1;
const newYears = new Date("1 Jan " + year);
let days,
   hours,
   minutes,
   seconds;
currentDate = null;

function countdown() {
   if (!currentDate) // only true for the first iteration
      currentDate = new Date();
   else
      currentDate.setMilliseconds(currentDate.getMilliseconds() + TIMER); // increase time by one second; more efficient than finding new date
   
   findTimeRemaining();
   setElements();
}

function findTimeRemaining() {
   const totalSeconds = (newYears - currentDate) / 1000;

   days = Math.floor(totalSeconds / 3600 / 24);
   hours = Math.floor(totalSeconds / 3600 % 24);
   minutes = Math.floor(totalSeconds / 60 % 60);
   seconds = Math.floor(totalSeconds % 60);
}

function setElements() {
   daysEl.innerHTML = days;
   hoursEl.innerHTML = hours;
   minutesEl.innerHTML = minutes;
   secondsEl.innerHTML = seconds;
}

countdown(); // initialize

// countdown() every second
setInterval(() => {
   countdown();
}, TIMER);