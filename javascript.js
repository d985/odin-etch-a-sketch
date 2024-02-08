const container = document.querySelector('#container');
const divWidth = document.body.clientWidth/4;
console.log(window.innerWidth);
console.log(document.body.clientWidth);

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${divWidth}px`;
    div.style.height = `180px`;
    div.style.borderStyle = 'solid';
    container.appendChild(div);
}