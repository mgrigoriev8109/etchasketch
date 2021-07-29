const clearButton = document.querySelector('#clearButton');

function getUserInputSquareQuantity(){
    let userSquarePerRowInput = parseInt(prompt("How many squares (less than 100) would you like one side of your grid to have?"));
    while (userSquarePerRowInput>=100){
        userSquarePerRowInput = parseInt(prompt("You accidentally typed in a number over 100, please type in another less than 100!"));
        }
    return userSquarePerRowInput;
}

function calculateWidthOfGridItem(){
    let widthOfGridItem = Math.round(100 / userSquarePerRowInput);
    return widthOfGridItem;
}

function calculateTotalGridItems(){
    let totalGridItemsInContainer = userSquarePerRowInput * userSquarePerRowInput; 
    if (totalGridItemsInContainer % 2 === 1){
        totalGridItemsInContainer = totalGridItemsInContainer - 1;
    }
    return totalGridItemsInContainer;
}

function turnUserInputIntoStyleString(userInputGridSquares, userInputWidthOfGridItem){
    
    let gridTemplateColumnRowString = 'repeat(' + userInputGridSquares + ', ' + userInputWidthOfGridItem + 'px);';
    return gridTemplateColumnRowString;
}


function generateGrid() {
    let gridContainer = document.querySelector("#gridContainer");
    userSquarePerRowInput =  getUserInputSquareQuantity();
    widthOfGridItem = calculateWidthOfGridItem();
    totalGridItemsInContainer = calculateTotalGridItems();
    gridTemplateColumnRowString = turnUserInputIntoStyleString(userSquarePerRowInput, widthOfGridItem);
    // NEXT TRY USING CSS DEV TOOLS OR DEBUGGER TO FIGURE OUT COMPUTED STYLES OF GRIDCONTAINER
    let stringGridTemplateColumns = 'grid-template-columns: ' + gridTemplateColumnRowString;
    let stringGridTemplateRows = 'grid-template-rows: ' + gridTemplateColumnRowString;
    gridContainer.style.cssText = stringGridTemplateColumns; 
    gridContainer.style.cssText = stringGridTemplateRows;
    
    for (i=0; i<totalGridItemsInContainer; i++){
        let generatedGridItem = document.createElement('div');
        generatedGridItem.classList.add('gridItem');
        let pixelWidthOfGridItem = widthOfGridItem + "px";
        generatedGridItem.style.height = pixelWidthOfGridItem;
        generatedGridItem.style.width = pixelWidthOfGridItem;
        gridContainer.appendChild(generatedGridItem);
        generatedGridItem.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
         });
    }
}
generateGrid();

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