const divOne = document.createElement("div");
const body = document.querySelector("body");
const askNum = document.querySelector(".askNum");
const reset = document.querySelector(".reset");
const progressive = document.querySelector(".progressive");
const RGB = document.querySelector(".RGB");
const topButtonDiv = document.querySelector(".topButtonDiv");
const buttons = document.querySelectorAll("button")

let rgbIsOn = false;
let progressiveIsOn = false;
let NumOfSquare = 16;

divOne.setAttribute("class", "divOne")
topButtonDiv.after(divOne)

function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb
}

function fillSquare(event) {
    if (rgbIsOn && event.target.style.opacity === "0") {
        event.target.style.backgroundColor = randomRGB();
    } else if (rgbIsOn && event.target.opacity !== "0") {

    } else {
        event.target.style.backgroundColor = "black";
    }
    if (progressiveIsOn) {
        event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
    } else {
        event.target.style.opacity = 1.0;
    }
}

function createGrid() {
    for (let i = 0; i < NumOfSquare; i++) {
        const divTwo = document.createElement("div");
        divTwo.setAttribute("class", "divTwo")
        divOne.appendChild(divTwo)
        for (let n = 0; n < NumOfSquare; n++) {
            const divThree = document.createElement("div");
            divThree.setAttribute("class", "divThree")
            divThree.setAttribute("style", "opacity: 0;")
            divThree.addEventListener("mouseover", (event) => fillSquare(event))
            divTwo.appendChild(divThree)
        }
    }
}

function removeGrid() {
    while (divOne.lastElementChild) {
        divOne.removeChild(divOne.lastElementChild);
    }
    createGrid()
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

RGB.addEventListener("click", () => {
    if (rgbIsOn) {
        rgbIsOn = false;
    } else {
        rgbIsOn = true;
    }
})

progressive.addEventListener("click", () => {
    if (progressiveIsOn) {
        progressiveIsOn = false;
    } else {
        progressiveIsOn = true;
    }
})

reset.addEventListener("click", () => {
    removeGrid()
})

buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.color = "#E38E49";
        event.target.style.backgroundColor = "#1F509A";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", (event) => {
        event.target.style.color = "#1F509A";
        event.target.style.backgroundColor = "#E38E49";
    })
})

createGrid()

