// containers

const mainContainer = document.querySelector("#main");
mainContainer.style.display = "grid";
document.body.appendChild(mainContainer);

function createContainers(arr) {
    arr.forEach(section => {
        const container = document.createElement("div");
        container.style.display = "grid";
        container.id = `${section}Container`;
        mainContainer.appendChild(container);
    });
}

sections = ["display", "numPad", "operators", "functions","log"];
createContainers(sections);
numPadContainer.style.gridTemplate = "1fr 1fr 1fr 1fr / 1fr 1fr 1fr";
displayContainer.style.display = "grid";
displayContainer.style.gridTemplate = "1fr 1fr 1fr";

let displayValue = 0;

const display = document.createElement("div");
display.id = "display";
display.style.border = "2px solid black";
display.style.borderRadius = "15px";
display.textContent = displayValue;
display.style.fontSize = "48px";
displayContainer.appendChild(display);

// const log = document.createElement("div");
// log.id = "log";
// log.style.display = "grid";


function createNumPad() {
    for (let i = 0; i <= 9; i++) {
        const digit = document.createElement("button");
        digit.id = i;
        digit.textContent = i;
        digit.addEventListener("click", () => {
            console.log(i);
            displayValue = (displayValue * 10) + i;
            display.textContent = displayValue;
        });
        numPadContainer.appendChild(digit);
    }
}

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.id = "id";
clearButton.addEventListener("click", () => {
    displayValue = 0;
    display.textContent = displayValue;
});

const operateButton = document.createElement("button");
operateButton.textContent = "=";
operateButton.id = "operateButton";
operateButton.addEventListener("click", () => {
    y = displayValue;
    displayValue = operate(x, y, operator);
    display.textContent = displayValue;
    console.log(x, operator, y, "=", displayValue);
});

const plusButton = document.createElement("button");
plusButton.id = "plusButton";
plusButton.textContent = "+";
plusButton.addEventListener("click", () => {
    x = displayValue;
    operator = "+";
    displayValue = 0;
});

const minusButton = document.createElement("button");
minusButton.id = "minusButton";
minusButton.textContent = "-";
minusButton.addEventListener("click", () => {
    x = displayValue;
    operator = "-";
    displayValue = 0;
});

const multiplyButton = document.createElement("button");
multiplyButton.id = "multiplyButton";
multiplyButton.textContent = "*";
multiplyButton.addEventListener("click", () => {
    x = displayValue;
    operator = "*";
    displayValue = 0;
});

const divideButton = document.createElement("button");
divideButton.id = "divideButton";
divideButton.textContent = "/";
divideButton.addEventListener("click", () => {
    x = displayValue;
    operator = "/";
    displayValue = 0;
});

const powerButton = document.createElement("button");
powerButton.textContent = "**";
powerButton.addEventListener("click", () => {
    x = displayValue;
    operator = "**";
    displayValue = 0;
})

const factorialButton = document.createElement("button");
factorialButton.textContent = "!";
factorialButton.addEventListener("click", () => {
    x = displayValue;
    displayValue = factorial(x);
    display.textContent = displayValue;
})

operatorsContainer.appendChild(plusButton);
operatorsContainer.appendChild(minusButton);
operatorsContainer.appendChild(multiplyButton);
operatorsContainer.appendChild(divideButton);

functionsContainer.appendChild(powerButton);
functionsContainer.appendChild(factorialButton);

createNumPad();
numPadContainer.appendChild(clearButton);
numPadContainer.appendChild(operateButton);



// functions

function operate(a, b, operator) {
    operator = operator.toString();
    switch(operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        case "**":
            return power(a, b)
    }
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	return arr.reduce((total, current) => total + current, 0);
}

function multiplyArr(array) {
    return array.length
      ? array.reduce((total, current) => total * current)
      : 0;
}

function multiply(a,b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function power(a, b) {
	return a ** b;
}

function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n-1);
}

