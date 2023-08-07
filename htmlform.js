const range = document.getElementById("income");
const rangeValue = document.getElementById("rangeValue");

range.addEventListener("input", updateValue);

function updateValue() {
    const newValue = range.value;
    rangeValue.textContent = newValue;
}