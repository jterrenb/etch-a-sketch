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
btn.addEventListener("click", (question) => {
    let input = +prompt("Type how many squares do you want for line (max 100 squares for line):", 64);
    if (input > 0 && input <= 100) {
        alert(input);
    } else {
        alert("Mal");
    }
});


//container.addEventListener("mouseenter", (event) => {
//    let target = event.target;
//    event.target.classList.add("black");
//})
//createSketchPad(64);