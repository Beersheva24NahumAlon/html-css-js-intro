
function calculateResult() {
    const value = document.getElementById("value").textContent;
    const power = document.getElementById("power").textContent;
    try {
        checkValue(value, "value");
        checkValue(power, "power");
        document.getElementById("result").textContent = value ** power;
    } catch (error) {
        alert(error.message);
    }
    
}

function checkValue(value, desc) {
    value = value.trim();
    if (value == undefined || value == null || value == "") {
        throw new Error(`${desc} should be defined`);
    }
    if (!Number.isInteger(+value)) {
        throw new Error(`${desc} should be integer`);
    }
}