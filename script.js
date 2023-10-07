// get buttons and screen from document
const calcButtons = document.querySelectorAll("button");
const output = document.getElementById("output");
const cursor = document.getElementById("cursor");

// array to store user input
let input = [];

// get input from user
calcButtons.forEach((calcButton) =>
  calcButton.addEventListener("click", () => getInput(calcButton))
);

function getInput(calcButton) {
  const buttonValue = calcButton.textContent;

  // redisplay cursor if it is not visible
  if (window.getComputedStyle(cursor).getPropertyValue("display") === "none") {
    cursor.style.display = "block";
  }

  // check if clear or equals buttons are clicked
  if (buttonValue === "C") {
    clearCalculator();
  } else if (buttonValue === "=") {
    evaluate();
    output.textContent = input;
    cursor.style.display = "none";
  } else {
    // display input on screen
    input.push(buttonValue);
    output.textContent = input.join("");
  }
}

function clearCalculator() {
  input = [];
  output.textContent = "";
}

function evaluate() {
  const userInput = input.join("");

  if (userInput.includes("+")) {
    let firstOperand = parseInt(userInput.substring(0, userInput.indexOf("+")));
    let secondOperand = parseInt(
      userInput.substring(userInput.indexOf("+") + 1)
    );

    let answer = firstOperand + secondOperand;

    // sets array to hold solely the answer of the expression given
    input = [];
    input[0] = answer;
  } else if (userInput.includes("-")) {
    let firstOperand = parseInt(userInput.substring(0, userInput.indexOf("-")));
    let secondOperand = parseInt(
      userInput.substring(userInput.indexOf("-") + 1)
    );

    let answer = firstOperand - secondOperand;

    // sets array to hold solely the answer of the expression given
    input = [];
    input[0] = answer;
  } else if (userInput.includes("x")) {
    let firstOperand = parseInt(userInput.substring(0, userInput.indexOf("x")));
    let secondOperand = parseInt(
      userInput.substring(userInput.indexOf("x") + 1)
    );

    let answer = firstOperand * secondOperand;

    // sets array to hold solely the answer of the expression given
    input = [];
    input[0] = answer;
  } else if (userInput.includes("/")) {
    let firstOperand = parseInt(userInput.substring(0, userInput.indexOf("/")));
    let secondOperand = parseInt(
      userInput.substring(userInput.indexOf("/") + 1)
    );

    let answer = firstOperand / secondOperand;

    // sets array to hold solely the answer of the expression given
    input = [];
    input[0] = answer;
  } else {
    return;
  }
}
