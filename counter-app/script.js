let count = 0;
const counter = document.getElementById("counter");

function increment() {
    count++;
    counter.innerText = count;
}

function decrement() {
    count--;
    counter.innerText = count;
}

function reset() {
    count = 0;
    counter.innerText = count;
}