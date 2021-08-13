let result = 16;
const etchFrame = document.createElement('div');
etchFrame.style.border = '10px solid red';
document.body.appendChild(etchFrame);

const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.border = '5px solid black';
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
container.style.gridTemplateRows = `repeat(${result}, 1fr)`;
etchFrame.appendChild(container);


const gridMaker = (result) => {
    for (i = 0; i < result*result; i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.style.border = '3px solid grey';
        gridBox.innerHTML = i;
        gridBox.style.backgroundColor = 'white'
        container.appendChild(gridBox);
    }
};

gridMaker(result);

const gBox = document.querySelectorAll('div.gridBox');

const clear = () => {
    gBox.forEach( (g) => {
        g.style.backgroundColor = 'grey';              
    })    
};

const draw = () => {
    gBox.forEach( (g) => {
        g.addEventListener('mouseover', () => {
            g.style.backgroundColor = 'black';
            g.style.border = '3px solid black';
        })
}
    )};

const buttonDiv = document.createElement('div');
buttonDiv.style.border = '3px solid black';
document.body.appendChild(buttonDiv);

const startButton = document.createElement('button');
startButton.innerHTML = 'Start Drawing';
startButton.addEventListener('click', (e) => {
    clear();
    draw();
});


buttonDiv.appendChild(startButton);

const clearButton = document.createElement('button');
clearButton.setAttribute('class', 'ccButtons');
clearButton.innerHTML = 'Clear';
clearButton.style.float = 'right';
clearButton.addEventListener('click', (e) => {
    confirm('Start fresh?');
    if (e) {
        clear();
    }
})

buttonDiv.appendChild(clearButton);

const changeGrid

const changeButton = document.createElement('button');
changeButton.setAttribute('class', 'ccButtons');
changeButton.innerHTML = 'Change Etch-a-Sketch size and clear board';
changeButton.style.float = 'right';

buttonDiv.appendChild(changeButton);


