const gridContainer = document.querySelector("#gridContainer");
const clearButton = document.querySelector('#clearButton');

for (i=0; i<=255; i++){
    let generatedGridItem = document.createElement('div');
    generatedGridItem.classList.add('gridItem');
    gridContainer.appendChild(generatedGridItem);
    generatedGridItem.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue';
    
    })
}

clearButton.addEventListener('click', () => {
    // first this button sends a prompt asking how many squares per row
    // if the number is above 100 it sends an alert and starts over
    // we assign gridItem width and height to 160 (pixels per side of 
    // square) / numberOfSquares to find out width and height of square
    // then we run another seperately created function for loop to .removeChild 256 time
    // then we turn the above for loop into a function where 255 is replaced 
    // by a value we can input
    // we change the gridContainer style to match the size input, and we
    // run the for loop again, this time setting the gridItem styles to the
    // (calculated) input height and width

    // final functions, place there at the top of the code seperate from the addEventListener
    // : removeGridItems (for loop), createGridItems (for loop), calculateGridItemSize (math)

})