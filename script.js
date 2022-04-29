const button = document.getElementById('button');
const resetBut = document.getElementById('reset');
const text = document.getElementById('text');
const bruh = document.getElementById('bruh');

function add(num) {
    text.innerHTML = parseInt(text.innerText) + num;
    bruh.innerHTML = "";
    if (text.innerHTML.includes("58") || text.innerHTML.includes("54"))
        bruh.innerHTML = "Clutch moment :D";
}

function reset() { // This function is for debugging purposes
    text.innerHTML = 0;
    bruh.innerHTML = "";
}

button.addEventListener('click', () => {
    add(1)
});

resetBut.addEventListener('click', reset);