const gridContainer = document.querySelector("#gridContainer");


for (i=0; i<=255; i++){
    let generatedGridItem = document.createElement('div');
    generatedGridItem.classList.add('gridItem');
    gridContainer.appendChild(generatedGridItem);
    generatedGridItem.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue';
    
    })
}

