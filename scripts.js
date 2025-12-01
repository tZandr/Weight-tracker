const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const history = document.querySelector("#historyHome");
/* const currentDate = new Date() */

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);

  let weight = document.createElement("p");
  history.appendChild(weight);
  weight.innerHTML = input.value;
});
