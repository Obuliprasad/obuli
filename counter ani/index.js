let counter = 0;

const counterValue = document.getElementById('value');
const incrementBtn = document.getElementById('a');
const decrementBtn = document.getElementById('b');
const resetBtn = document.querySelector('#c');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
resetBtn.addEventListener('click', c);

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}