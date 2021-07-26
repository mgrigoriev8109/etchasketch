const gridContainer = document.getElementById("#gridContainer");

for (i=0; i<=16; i++){
    let generatedGridItem =  gridContainer.appendChild(div);
    generatedGridItem.className += 'gridItem';
}
