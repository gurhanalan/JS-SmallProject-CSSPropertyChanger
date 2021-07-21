const posChangeY = document.querySelector("#position-y");
const posChangeX = document.querySelector("#position-x");
const size = document.querySelector("#size");
const shape = document.querySelector("#shape-select");

const rgbaR = document.querySelector("#rgba-r");
const rgbaG = document.querySelector("#rgba-g");
const rgbaB = document.querySelector("#rgba-b");
const rgbaA = document.querySelector("#rgba-a");
const randomButton = document.querySelector("#random-btn");

const box = document.querySelector("#block");

posChangeY.addEventListener("change", () => {
    box.style.top = `${posChangeY.value}px`;
});

posChangeX.addEventListener("change", () => {
    box.style.left = `${posChangeX.value}px`;
});

size.addEventListener("change", () => {
    box.style.transform = `scale(${size.value})`;
});

shape.addEventListener("change", () => {
    if (shape.value === "2") {
        box.style.borderRadius = "100%";
    }
    if (shape.value === "1") {
        box.style.borderRadius = "0";
    }
});

rgbaR.addEventListener("change", () => {
    box.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
});
rgbaG.addEventListener("change", () => {
    box.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
});
rgbaB.addEventListener("change", () => {
    box.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
});
rgbaA.addEventListener("change", () => {
    box.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
});

function randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

randomButton.addEventListener("click", () => {
    rgbaR.value = randomNum(0, 255);
    rgbaB.value = randomNum(0, 255);
    rgbaG.value = randomNum(0, 255);
    rgbaA.value = Math.random().toFixed(2);
    box.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
});
