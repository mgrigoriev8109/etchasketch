const gridContainer = document.querySelector("#gridContainer");

for (i=0; i<=16; i++){
    let generatedGridItem = document.createElement('div');
    generatedGridItem.classList.add('gridItem');
    gridContainer.appendChild(generatedGridItem);
}
