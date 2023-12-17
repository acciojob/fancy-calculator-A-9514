//your JS code here. If required.
let zero = document.querySelector(".number-0");
/* Numbers */ 
let numbers = document.querySelectorAll(".numbers");
/* Operators */
let operators = document.querySelectorAll(".operators");
/* equals */
let equals = document.querySelector(".equals");
/* clear */ 
let clear = document.querySelector(".clear");
/* decimal */ 
let decimal = document.querySelector(".decimal");
/* input */
let input = document.querySelector(".input");

var clearSwitch = 0;
zero.addEventListener("click", displayZero);
function displayZero() {
  input.innerText += zero.innerText;
}

clear.addEventListener("click", clearInput);
function clearInput() {
  input.innerText = "";
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {

    input.innerText += numbers[i].innerText;
    console.log(typeof numbers[i].innerText)
  });
}

decimal.addEventListener('click', ()=>{
  if (input.innerText != "Enter the numbers") {
    input.innerText += decimal.innerText;
  }
})

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', ()=>{
    if (input.innerText == "Enter the numbers") {
      input.innerText = "";
    }
    input.innerText += operators[i].innerText;
    });
}
equals.addEventListener('click', () => {
  input.innerText = eval(input.innerText);
})

