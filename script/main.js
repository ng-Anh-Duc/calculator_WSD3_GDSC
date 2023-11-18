const textCounter = document.getElementById("text-counter");
const btAdd = document.getElementById("bt-add");
const btRemove = document.getElementById("bt-remove");
const keys = Array.from(document.querySelectorAll('.key'));
const display = document.querySelector('.display');

let count = 0;

btAdd.onclick = function () {
    count++;
    textCounter.innerHTML = "GDSC member counter: " + count;
};

btRemove.onclick = function () {
    count--;
    if (count < 0) {
        count = 0;
    };
    textCounter.innerHTML = "GDSC member counter: " + count;
};

keys.map(key => {
    key.addEventListener('click', () => {
        display.value += key.innerText;
        if (key.innerText === 'C') {
            display.value = '';
        }
        if (key.innerText === '=') {
            try {
                display.value = eval(display.value.slice(0, -1));
            } catch {
                display.value = "Error";
            }
        }
    });
});