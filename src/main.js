
function calculateResult() {
    const value = document.getElementById("value").textContent;
    const power = document.getElementById("power").textContent;
    document.getElementById("result").textContent = value ** power;
}