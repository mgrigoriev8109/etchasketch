function getUserInputSquareQuantity(){
    let userSquarePerRowInput = parseInt(prompt("How many squares (less than 100) would you like one side of your grid to have?"));
    while (userSquarePerRowInput>=100){
        userSquarePerRowInput = parseInt(prompt("You accidentally typed in a number over 100, please type in another less than 100!"));
        }
    return userSquarePerRowInput;
}

function calculateWidthOfGridItem(){
    let widthOfGridItem = (500 / userSquarePerRowInput);
    return widthOfGridItem;
}

function calculateTotalGridItems(){
    let totalGridItemsInContainer = userSquarePerRowInput * userSquarePerRowInput; 
    
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
    let stringGridColumnsRows = 'grid-template-columns: ' + gridTemplateColumnRowString + 'grid-template-rows: ' + gridTemplateColumnRowString;
    gridContainer.style.cssText = stringGridColumnsRows; 
    for (i=0; i<totalGridItemsInContainer; i++){
        let generatedGridItem = document.createElement('div');
        generatedGridItem.classList.add('gridItem');
        let pixelWidthOfGridItem = widthOfGridItem + "px";
        generatedGridItem.style.height = pixelWidthOfGridItem;
        generatedGridItem.style.width = pixelWidthOfGridItem;
        gridContainer.appendChild(generatedGridItem);
        generatedGridItem.addEventListener('mouseover', function(e) {
            e.target.style.background = '#2a6592';
         });
    }
}

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {   
    let allGridItems = document.getElementsByClassName('gridItem');
    console.log(allGridItems);
    while(allGridItems[0]) {
        gridContainer.removeChild(allGridItems[0]);
    };
    generateGrid();
    });

generateGrid();
