const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const today = document.querySelector("#todayHome");
const weekAvg = document.querySelector("#weekAvg");
let todaysWeight = document.querySelector("#today");

const weekWeights = [];

// Load locally stored weights
document.addEventListener("DOMContentLoaded", () => {
  let todaySaved = localStorage.getItem("todaySaved");
  todaysWeight.innerHTML = todaySaved;
  console.log("Localstorage loaded:", todaySaved, "kg");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Show submitted weight + save to localstorage
  todaysWeight.innerHTML = input.value;
  localStorage.setItem("todaySaved", input.value);
  console.log(`Today's weight set:`, input.value);

  // Built-in way to show current date with a number
  const day = new Date().getDay();

  // Save today's weight to it's index
  weekWeights[day] = input.value;
  console.log(`Saved day ${day} to localstorage:`, weekWeights[1]);

  // Display the last 7 days average weight
  // Deliberately -and- temporarily incorrect.
  weekAvg.innerHTML = weekWeights[1];
});

/*
Gets a new integer depending on day
(sunday = 0, sat = 6)
  const idag = new Date()
  console.log(idag.getDay())
*/
