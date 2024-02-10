const container = document.querySelector('#container');
const containerHeight = window.innerHeight - 18 - 37.2; // 37.2 is size of button + header div padding; 18 accounts for borders + ???
container.style.height = `${containerHeight}px`;

function createGrid(elementsPerSide) {
    container.innerHTML = "";
    let divWidth =  document.body.clientWidth/elementsPerSide - 4;

    for (let i = 0; i < elementsPerSide**2; i++) {        
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${divWidth}px`;
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '2px';
        div.textContent = i;
        
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
        
        container.appendChild(div);
    }
}

createGrid(4);

const resizeButton = document.querySelector('#resizeButton');
resizeButton.addEventListener("click", () => {
    let numElements = prompt("Enter the number of elements per side", "10");
    if (numElements > 100) { numElements = 100 };
    createGrid(numElements);
});