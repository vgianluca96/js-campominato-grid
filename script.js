

// Variabile agganciata al grid container
let gridContainer = document.getElementById('gridCont');


for (let i = 1; i <= 100; i++) {
    
    // creazione singola cella
    let gridCell = document.createElement('div');
    gridCell.classList.add('gridCell');
    // Aggiungo la cella al grid container
    gridContainer.append(gridCell);

}


