const container = document.querySelector(".container");
const controller = document.querySelector(".controller");
const createBtn = document.querySelector("#createBtn");
const numSquareInput = document.querySelector("#numSquareInput");
const grid = document.querySelector(".grid");

function resetGrid(){
    grid.innerHTML = "";
}

function createSquare(gridSize){
    for(let i = 0; i < gridSize ** 2; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        let sideSize = 100/gridSize + "%"
        square.setAttribute("style", "box-shadow: 0px 0px 0px 1px rgb(100, 100, 100) inset;")
        square.style.width = sideSize
        square.style.height = sideSize
        // square.style.border = "0.1px solid black"
        grid.appendChild(square);
    }
}

function generateGrid(){
    resetGrid();
    createSquare(numSquareInput.value);
    squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", highlight)
    })
}

function highlight(e){
    e.target.style.backgroundColor = "black";
    // e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

createBtn.addEventListener("click", () => {
    generateGrid();
});

generateGrid();