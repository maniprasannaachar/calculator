const display = document.getElementById("display");

// Function to append numbers to the display
function appendNumber(number) {
  display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
  const lastChar = display.value[display.value.length - 1];
  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += operator;
}

// Function to append a decimal point
function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
