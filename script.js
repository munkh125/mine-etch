const container = document.querySelector(".container");
const controller = document.querySelector(".controller");
const grid = document.querySelector(".grid");

for(let i = 0 ; i < 16; i++ ){
    for(let j = 0 ; j< 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "background-color:red; height:10px; width:10px; margin:10px; border:solid black 1px;");
        grid.appendChild(square);
    }
}
grid.setAttribute("style", "width:50vw; height:50vh;");

function drawSquares(){
    const grid = document.querySelector(".grid");
    const numSquares = parseInt(document.querySelector("#numSquaresInput").value);
    const rows = Math.ceil(Math.sqrt(numSquares));
    const cols = Math.ceil(numSquares / rows);
    const squareSize = 100 / Math.max(rows,cols);

    grid.innerHTML = "";

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = squareSize + "%";
            square.style.height = squareSize + "%";
            square.style.top = (i * squareSize) + "%";
            square.style.left = (j * squareSize) + "%";
            grid.appendChild(square);

        }
    }
}