const container = document.querySelector(".container");
let cells = [];

let isErasing = false;
const defaultColor = "azure";

function makeGrid(x) {
    clear();
    for (i=0; i<x; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className="gridRow";
        for (let j=0; j<x; j++) {
            let cell = document.createElement("div");
            row.appendChild(cell).className="gridCell"; 

        };
    };
    cells = document.querySelectorAll(".gridCell");
    colorGrid();
};

makeGrid(16);

//change grid on slider change
const slider = document.querySelector(".slider");
const gridValue = document.querySelector("#grid-value");

slider.onchange = function () {
    gridValue.textContent = this.value + "x" + this.value;
    makeGrid(this.value);
};

function clear() {
    container.textContent="";
};

//erase button
function erase() {
    isErasing = true;
};

const eraseBtn = document.querySelector("#erase-button");
eraseBtn.addEventListener("click", erase);

// clear board button
function clearBoard() {
    const cells = document.querySelectorAll(".gridCell");
    cells.forEach(element => {
        element.style.backgroundColor = defaultColor;
    });
};

const clearBtn = document.querySelector("#clear-button");
clearBtn.addEventListener("click", clearBoard);

//set color for painting 
const colorPicker = document.querySelector("#color-picker");
let colorPicked = "";

function newColor() {
    colorPicked=this.value;
    isErasing = false;
};

colorPicker.addEventListener("change", newColor);

function colorGrid() {
    cells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            if (isErasing) {
                e.target.style.backgroundColor = defaultColor;
            } else if (colorPicked) {
                e.target.style.backgroundColor = colorPicked;
            }
        });
    });
}



