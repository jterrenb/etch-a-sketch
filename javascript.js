let squareQty;
let line = 0;
let column = 0;
let container = document.querySelector(".container");
let div = [];

function createCanvas(squareQty = 64) {
    for ( let i = 0; i< squareQty; i++) {
        div.push(document.createElement("div"));
        container.appendChild(div[i]);
    }
}

const btn= document.querySelector(".btn");
//btn.addEventListener("click", )



createCanvas(4096);