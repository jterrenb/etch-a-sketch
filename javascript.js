let squareQty;
let square;
let container = document.querySelector(".container");
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
        line.replaceChildren();
        container.replaceChildren();
        createSketchPad(input);
    } else {
        alert("You must write a number between 1 and 100 (both included)");
    }
});


container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if ( target.className == "square black90") {
        target.classList.remove ("black90")
        target.classList.add("fullblack");
    } else if ( target.className == "square black80") {
        target.classList.remove ("black80")
        target.classList.add("black90");
    } else if ( target.className == "square black70") {
        target.classList.remove ("black70")
        target.classList.add("black80");
    } else if ( target.className == "square black60") {
        target.classList.remove ("black60")
        target.classList.add("black70");
    } else if ( target.className == "square black50") {
        target.classList.remove ("black50")
        target.classList.add("black60");
    } else if ( target.className == "square black40") {
        target.classList.remove ("black40")
        target.classList.add("black50");
    } else if ( target.className == "square black30") {
        target.classList.remove ("black30")
        target.classList.add("black40");
    } else if ( target.className == "square black20") {
        target.classList.remove ("black20")
        target.classList.add("black30");
    } else if ( target.className == "square black10") {
        target.classList.remove ("black10")
        target.classList.add("black20");
    }else if(target.className === "square") {
        target.classList.add("black10")
    }
})
createSketchPad();