const container = document.querySelector(".container");

function makeGrid(x) {
    for (i=0; i<x; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
    }
}


makeGrid(16);

