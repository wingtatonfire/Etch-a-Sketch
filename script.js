const divOne = document.createElement("div");
divOne.setAttribute("class", "divOne")
const body = document.querySelector("body");
const askNum = document.querySelector(".askNum");
askNum.after(divOne)
NumOfSquare = 16;
function createGrid() {
    for (let i = 0; i <= NumOfSquare; i++) {
        const divTwo = document.createElement("div");
        divTwo.setAttribute("class", "divTwo")
        divOne.appendChild(divTwo)
        for (let n = 0; n <= NumOfSquare; n++) {
            const divThree = document.createElement("div");
            divThree.setAttribute("class", "divThree")
            divThree.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black";
            })
            divTwo.appendChild(divThree)
        }
    }
}

askNum.addEventListener("click", () => {
    NumOfSquare = Number(prompt("How many square you want per side?"));
    while (NumOfSquare < 0 || NumOfSquare > 100 || isNaN(NumOfSquare)) {
        NumOfSquare = Number(prompt("Please input a valid number under 100"));
    }
    while (divOne.lastElementChild) {
        divOne.removeChild(divOne.lastElementChild);
    }
    NumOfSquare = Number(NumOfSquare);
    createGrid()
})
createGrid()
