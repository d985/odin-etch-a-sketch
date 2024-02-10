const container = document.querySelector('#container');
const containerHeight = window.innerHeight - 18 - 37.2; // 37.2 is size of button + header div padding; 18 accounts for borders + ???
const containerWidth =  document.body.clientWidth;
container.style.height = `${containerHeight}px`;
container.style.width = `${containerHeight}px`;

function createGrid(elementsPerSide) {
    container.innerHTML = "";

    for (let i = 0; i < elementsPerSide; i++) { 
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        for (let j = 0; j < elementsPerSide; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid');
            gridDiv.style.borderStyle = 'solid';
            gridDiv.style.borderWidth = '1px';
            gridDiv.style.borderColor = "hsl(0,0%,93%)";
            
            let luminosity = 100;
            let hue = getRandomInt(361);
            let saturation = getRandomInt(34)*3;
            gridDiv.addEventListener("mouseover", () => {
                if (luminosity > 30) { luminosity -= 7; }
                gridDiv.style.backgroundColor = `hsl(${hue},${saturation}%,${luminosity}%)`;
            });
            
            rowDiv.appendChild(gridDiv);
        }
        container.appendChild(rowDiv);
    }
}

createGrid(10);

const resizeButton = document.querySelector('#resizeButton');
resizeButton.addEventListener("click", () => {
    let numElements = prompt("Enter the number of elements per side", "10");
    if (numElements > 100) { numElements = 100 };
    createGrid(numElements);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}