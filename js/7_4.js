let valueRef = document.querySelector('#value');
let counterValue = 0;


const addDecrementRef = document.querySelector('[data-action="decrement"]');
const addIncrementRef = document.querySelector('[data-action="increment"]');


addDecrementRef.addEventListener('click', decrement);
addIncrementRef.addEventListener('click', increment);


function decrement() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

