

// Variabile agganciata al div 'gridCont'
let gridContainer = document.getElementById('gridCont');
// Variabile agganciata al button
let btnGridGen = document.getElementById('btnGridGen');

// Event listener del button
btnGridGen.addEventListener('click', function(){
    
    // Cancello tutti i figli di 'gridCont'
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Aggiungo celle a 'gridCont'
    for (let i = 1; i <= 100; i++) {

        // creazione singola cella
        let gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.innerHTML = i;
        // Aggiungo la cella a 'gridCont'
        gridContainer.append(gridCell);

        //Aggiungo azione al click sulla cella
        gridCell.addEventListener('click', function() {

            gridCell.classList.add('gridCellClick');
            console.log('Hai cliccato sulla cella ' + gridCell.innerHTML);

        })

    }

})



