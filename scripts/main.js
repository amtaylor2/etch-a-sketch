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
gridBox.setAttribute('id','box'+ i);
gridBox.setAttribute('class', 'gridBox');
gridBox.style.border = '5px solid black';
gridBox.textContent = i;

container.appendChild(gridBox);

i++
    }
}
gridMaker();

const gridItemPlacer = () => {

}




