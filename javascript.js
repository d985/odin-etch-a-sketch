const container = document.querySelector('#container');

const divWidth = window.innerWidth / 4 - 8;
const divHeight = window.innerHeight / 4 - 8;


console.log(window.innerWidth);
console.log(divHeight);
//console.log(document.body.clientWidth);


for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.setAttribute('class', 'bg-1')
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.borderStyle = 'solid';

    div.onmouseenter = function() {
        div.removeAttribute('class')
        div.setAttribute('class', 'bg-0')
    }

    container.appendChild(div);
}


