const container = document.querySelector(".container");

function makeGrid(x) {
    for (i=0; i<x; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className="gridRow";
        for (let j=0; j<x; j++) {
            col = document.createElement("div");
            row.appendChild(col).className="gridCol";  
        }
    }

}

makeGrid(16);

//change grid on slider change
const slider = document.querySelector(".slider");
const gridValue = document.querySelector("#grid-value");

slider.onchange = function () {
    gridValue.textContent = this.value + "x" + this.value;
    clear();
    makeGrid(this.value);
}

function clear() {
    container.textContent="";
}

//erase button
let cells = document.querySelectorAll(".gridCol");

function erase() {
        cells.forEach((element) => {
            element.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = defaultColor;
        })
    })

}

const eraseBtn = document.querySelector("#erase-button");
eraseBtn.addEventListener("click", erase);


// clear board button
function clearBoard() {
    cells.forEach((element) => {
        element.style.backgroundColor = defaultColor;
    })

}

const clearBtn = document.querySelector("#clear-button");
clearBtn.addEventListener("click", clearBoard);

//set background color change when mouseover
const colorPicker = document.querySelector("#color-picker");
const defaultColor = "azure";
let colorPicked = "";

function newColor() {
    colorPicked=this.value;
    cells.forEach((element) => {
        element.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = colorPicked;
        })
    })
}

colorPicker.addEventListener("change", newColor);




