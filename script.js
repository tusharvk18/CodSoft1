let display = document.getElementById("result");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function performOperation(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}
