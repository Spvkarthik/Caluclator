let display = document.getElementById("display");
let trigButtons = document.getElementById("trig-buttons");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function squareNumber() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch {
        display.value = "Error";
    }
}

function calculateTrig(func) {
    try {
        let value = eval(display.value);
        if (func === 'sin') display.value = Math.sin(value * Math.PI / 180);
        if (func === 'cos') display.value = Math.cos(value * Math.PI / 180);
        if (func === 'tan') display.value = Math.tan(value * Math.PI / 180);
        if (func === 'asin') display.value = Math.asin(value) * 180 / Math.PI;
        if (func === 'acos') display.value = Math.acos(value) * 180 / Math.PI;
        if (func === 'atan') display.value = Math.atan(value) * 180 / Math.PI;
    } catch {
        display.value = "Error";
    }
}

function toggleTrigButtons() {
    if (trigButtons.style.display === "none" || trigButtons.style.display === "") {
        trigButtons.style.display = "flex";
    } else {
        trigButtons.style.display = "none";
    }
}
