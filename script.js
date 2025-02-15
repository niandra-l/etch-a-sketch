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

