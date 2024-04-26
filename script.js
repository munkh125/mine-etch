const container = document.querySelector(".container");
const controller = document.querySelector(".controller");
const numSquareInput = document.querySelector("#numSquareInput");
const grid = document.querySelector(".grid");
const blackBtn = document.querySelector("#blackBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const grayBtn = document.querySelector("#grayBtn");

let colorMode = "black";

function resetGrid(){
    grid.innerHTML = "";
}

function createSquare(gridSize){
    for(let i = 0; i < gridSize ** 2; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        let sideSize = 100/gridSize + "%"
        //add border for square
        // square.setAttribute("style", "box-shadow: 0px 0px 0px 1px rgb(100, 100, 100) inset;")
        square.style.width = sideSize
        square.style.height = sideSize
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
    switch(colorMode){
        case "black":
            e.target.style.backgroundColor = "black";
            break;
        case "rainbow":
            e.target.style.backgroundColor = `hsl(` + Math.floor(Math.random()* 360) + `, 100%, 50%)`;
            break;
        case "gray":
            if(this.style.backgroundColor.match(/rgba/)){
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.8){
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                }
            }else if(this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0,'){
                return
            }else{
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            }
            break;
    }
}

blackBtn.addEventListener("click", () => {
    colorMode = "black";
    generateGrid();
});

rainbowBtn.addEventListener("click", () => {
    colorMode = "rainbow";
    generateGrid();
});

grayBtn.addEventListener("click", () => {
    colorMode = "gray";
    generateGrid();
})

generateGrid();