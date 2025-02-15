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

// clear board button
let rows = document.querySelectorAll(".gridRow");


function clearBoard() {
    rows.forEach((element) => {
        element.style.backgroundColor = "azure";
    })

}

const clearBtn = document.querySelector("#clear-board");
clearBtn.addEventListener("click", clearBoard);


