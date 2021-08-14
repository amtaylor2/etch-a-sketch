let result = 16;

const etchFrame = document.createElement('div');
etchFrame.style.border = '10px solid red';
document.body.appendChild(etchFrame);

//Explore adding new class to div gridBox; similar to having
//a toggle feature; May make it easier to clear/change

const changeGrid = () => {
    changeButton.addEventListener('click', (e) => {
        confirm('Are you sure you want to erase this masterpiece?')
        if (e) {
           let reply = prompt(`How large do you want to Etch-a-Sketch?(Max size = 100 x 100) \n Current size: ${result} x ${result} `)
           reply = Number(reply); 
           console.log(Number.isInteger(reply))
           if (Number.isInteger(reply) && reply <= 100) {
                result = reply;
                console.log(result);
                return result;
            }      
        }
    })
    return result; //need global var result to update after execution
};

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
        g.style.border = '3px solid grey';              
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
    


console.log(result);
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



//create funct to prompt user input, return input as result
//use result to update grid templates, gridmaker;
const changeButton = document.createElement('button');
changeButton.setAttribute('class', 'ccButtons');
changeButton.innerHTML = 'Change Etch-a-Sketch size and clear board';
changeButton.style.float = 'right';

buttonDiv.appendChild(changeButton);
changeGrid();