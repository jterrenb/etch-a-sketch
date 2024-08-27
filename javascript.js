let squareQty;
let square;
let container = document.querySelector(".container");
let div = [];
let line;

function createSketchPad(squareQty = 64) {
    line = document.createElement("div");
    line.classList.add("line");
    container.appendChild(line);
    square = document.createElement("div");
    square.classList.add("square");
    line.appendChild(square);
    for ( let i = 1; i< squareQty; i++) {
        line.appendChild(square.cloneNode());
    }
    for (let l = 1; l < squareQty; l++) {
        container.appendChild(line.cloneNode(true));
    }
}

const btn= document.querySelector(".btn");
//btn.addEventListener("click", )



createSketchPad(64);