let count = 14598;
let intervalId;
let speed = 100; // Time in milliseconds between count increments

function updateCountDisplay() {
  const countDisplay = document.getElementById("countDisplay");
  countDisplay.textContent = count;
}

intervalId = setInterval(() => {
  count++;
  updateCountDisplay();

  // Check if count reaches 100, then slow down the counting
  if (count >= 14598) {
    clearInterval(intervalId);
    speed = 10000; // Change the speed to a slower value (e.g., 500ms)
    intervalId = setInterval(() => {
      count++;
      updateCountDisplay();
    }, speed);
  }
}, speed);

let count2 = 11952;
let intervalId2;
let speed2 = 100; // Time in milliseconds between count increments

function updateCountDisplay2() {
  const countDisplay2 = document.getElementById("countDisplay2");
  countDisplay2.textContent = count2;
}

intervalId2 = setInterval(() => {
  count2++;
  updateCountDisplay2();

  // Check if count reaches 100, then slow down the counting
  if (count2 >= 11952) {
    clearInterval(intervalId2);
    speed2 = 100000; // Change the speed to a slower value (e.g., 500ms)
    intervalId2 = setInterval(() => {
      count2++;
      updateCountDisplay2();
    }, speed2);
  }
}, speed2);
