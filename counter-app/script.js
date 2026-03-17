let count = 0
const label = document.getElementById('count')
function updateUI() {
    label.innerText = count;
}
document.getElementById('btn1').addEventListener('click', () => {
    if (count === 0) {
        alert("The count cannot be negative")
    } else {

        count--;
        updateUI();
    }
})
document.getElementById('btn2').addEventListener('click', () => {
    count = 0;
    updateUI();
})
document.getElementById('btn3').addEventListener('click', () => {
    count++;
    updateUI();
})