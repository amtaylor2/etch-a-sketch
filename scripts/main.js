//create 16x16 grid of square divs using javascript

//Set-up a hover effect so that the grid divs change color
//with mouse passover, leaving a pixelated trail like a pen

//Create a button that will clear the current grid and will
//send the user a pop-up asking for the number of squares 
//per side for the new grid
//*limit input to a max of 100

// input default x = 16, ask for user input

const body = document.querySelector('body');

const container = document.createElement('div')
container.setAttribute('id', 'gridContainer');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
container.style.border = '5px solid blue';


body.appendChild(container);

const gridMaker = () => {
   let  i = 1
    while (i < 257) {
const gridBox = document.createElement('div');
gridBox.setAttribute('id',i);
gridBox.setAttribute('class', 'gridBox');
gridBox.style.border = '5px solid black';
gridBox.textContent = i;
gridBox.addEventListener('mouseover', (e) => {
    gridBox.style.backgroundColor = 'black';
});

container.appendChild(gridBox);

i++
    }
}
gridMaker();

const clearButton = document.createElement('button');
clearButton.style.alignContent = 'center';
clearButton.innerHTML = 'Clear board';
clearButton.addEventListener('click', () => {
    confirm('Are you sure you want to erase you beautiful art work?')
})
/*button.addEventListener('click', () => {
    prompt('Please enter the size of your grid')
});
*/
body.appendChild(clearButton);

const changeButton = document.createElement('button');
changeButton.innerHTML = 'Clear and change grid size';

body.appendChild(changeButton);