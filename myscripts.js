const clearButton = document.querySelector('#clearButton');
let widthOfGridItem = 0;
let totalGridItemsInContainer = 0;


//SOLUTION TO MY PROBLEM:
function calculateQuantityOfGridSquares(){
    let userSquarePerRowInput = prompt("How many squares (less than 100) would you like one side of your grid to have?");
    while (userSquarePerRowInput>=100){
        userSquarePerRowInput = prompt("You accidentally typed in a number over 100, please type in another less than 100!");
        }
    return userSquarePerRowInput;
}

calculateQuantityOfGridSquares();
widthOfGridItem = 10000 / userSquarePerRowInput;
totalGridItemsInContainer = userSquarePerRowInput * userSquarePerRowInput; 

/*
function generateGrid(gridContainer) {
    for (i=0; i<totalGridItemsInContainer; i++){
        let gridContainer = document.querySelector("#gridContainer");
        let generatedGridItem = document.createElement('div');
        generatedGridItem.classList.add('gridItem');
        gridContainer.appendChild(generatedGridItem);
        generatedGridItem.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
         });
    }
}

 // 10,000 pixels should be the size of the grid container

calculateQuantityOfGridSquares();

generateGrid();
*/
/*

function clearGrid(){

}

clearButton.addEventListener('click', () => {
});
    First the button can have the functionality of taking in user input, and generating 
    the correct number of squares within a gridContainer of 10,000 pixels.

    After that functionality works, I will add the clearGrid function

    // first this button sends a prompt asking how many squares per row
    // if the number is above 100 it sends an alert and starts over
    // we find size of grid item width and height
    // then we run another seperately created function for loop to .removeChild 256 time
    // then we turn the above for loop into a function where 255 is replaced 
    // by a value we can input
    // we change the gridContainer style to match the size input, and we
    // run the for loop again, this time setting the gridItem styles to the
    // (calculated) input height and width

    // final functions, place there at the top of the code seperate from the addEventListener
    // : removeGridItems (for loop), createGridItems (for loop), calculateGridItemSize (math)

*/