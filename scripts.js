const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const today = document.querySelector("#todayHome");
const weekAvg = document.querySelector("#weekAvg");
let todaysWeight = document.querySelector("#today");
const plusButton = document.querySelector("#plusButton")
const popUpEntry = document.querySelector('#weightEntry')

const weekWsaeights = [91, 91, 91, 91, 91, 91, 91];
// Can't calc with empty slots,
// Next fix is to filter out empty slots so avg always works

/* Load locally stored weights
document.addEventListener("DOMContentLoaded", () => {
  let todaySaved = localStorage.getItem("todaySaved");
  let last7days = localStorage.getItem("last7days");
  todaysWeight.innerHTML = todaySaved;
  weekAvg.innerHTML = last7days;
  console.log("Localstorage loaded:", todaySaved, "kg");
}); */

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Show submitted weight + save to localstorage
  todaysWeight.innerHTML = input.value;
  localStorage.setItem("todaySaved", input.value);
  console.log(`Today's weight set:`, input.value);

  // Built-in way to show current date with a number
  const day = new Date().getDay();

  // Save today's weight to it's index
  weekWeights[day] = Number(input.value);
  console.log(`Saved day ${day} to localstorage:`, weekWeights[day]);

  // Display the last 7 days average weight
  let weekSum = 0;
  for (let i = 0; i < weekWeights.length; i++) {
    weekSum = weekWeights[i] + weekSum;
  }
  let avg = weekSum / weekWeights.length;
  weekAvg.innerHTML = avg.toFixed(1);
  localStorage.setItem("last7days", Number(avg.toFixed(1)));

  console.log(weekWeights);
});

/*
Gets a new integer depending on day
(sunday = 0, sat = 6)
  const idag = new Date()
  console.log(idag.getDay())
*/

plusButton.addEventListener("click", () => {
  popUpEntry.classList.toggle("active")
})
