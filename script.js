const container = document.querySelector(".container");
const controller = document.querySelector(".controller");
const createBtn = document.querySelector("#createBtn");
const numSquareInput = document.querySelector("#numSquareInput");
const grid = document.querySelector(".grid");

function createSquare(){
    const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "background-color:red; height:20px; width:20px; margin:1px; border:solid black 1px;");
        grid.appendChild(square);
}

function resetGrid(){
    grid.innerHTML = "";
}

function createGrid(input){
    resetGrid();
    for(let i = 0; i < input * input; i++){
        createSquare();
    }
}

createBtn.addEventListener("click", () => {
    createGrid(numSquareInput.value);
});
