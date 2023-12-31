
let counterValue = 0;
const valueElement = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

function updateValue() {
    valueElement.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});

updateValue();
