const colors = ["green", "red", "rgb(255, 456, 203)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => { 
    const getRandomColor = getChangedRandomColor();
    document.body.style.backgroundColor =    colors[getRandomColor];
    colors.textContent = colors[getRandomColor];

});

function getChangedRandomColor() {
    return Math.floor(Math.random() * colors.length)
}