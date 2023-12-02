let gridSize = 0;
let width = 0;
let height = 0;
let cellDivs;
let contentDiv = document.querySelector("#content");
let rgbArray = [];
let colorString;

// Create 16 x 16 grid using 16 row divs, each containing 16 cell divs
// for (let i = 0; i < 16; i++) {
//     const rowDiv = document.createElement("div");
//     rowDiv.classList.add("rowDiv");
//     for (let j = 0; j < 16; j++) {
//         const cellDiv = document.createElement("div");
//         cellDiv.classList.add("cellDiv");
//         rowDiv.appendChild(cellDiv);
//     }
//     contentDiv.appendChild(rowDiv);
// }

const generateRandomRGBArray = () => {
    rgbArray = [];
    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255));
    }
    return rgbArray;
}

const applyColor = () => {
    cellDivs = document.querySelectorAll(".cellDiv");

    cellDivs.forEach((cell) => {
        // console.log(cell);
        cell.addEventListener("mouseenter", (e) => {
            // console.log(e);
            rgbArray = generateRandomRGBArray();
            e.target.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
        }, { once: true })
    })

    cellDivs.forEach((cell) => {
        cell.addEventListener
    })
}

const setGridSizeButton = document.querySelector("#setGridSizeButton");

setGridSizeButton.addEventListener("click", () => {
    gridSize = parseInt(prompt("How many squares per side do you want, good sir/madam?"));
    (gridSize < 100) ? setGridSize(gridSize) : alert("Error: Please insert value under 100")
})

const setGridSize = (squaresPerSide) => {
    contentDiv = document.querySelector("#content");
    while (contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
        console.log("I'm in");
    }
    // console.log(contentDiv.hasChildNodes());
    width = 960 / squaresPerSide;
    height = 960 / squaresPerSide;
    for (let i = 0; i < squaresPerSide; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for (let j = 0; j < squaresPerSide; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cellDiv");
            cellDiv.style.width = `${width}px`;
            cellDiv.style.height = `${height}px`;
            rowDiv.appendChild(cellDiv);
        }
        contentDiv.appendChild(rowDiv);
    }
    applyColor();
}