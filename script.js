const display = document.getElementById("display");

function addNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = "";
}

function addOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        let expression = display.value;
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}