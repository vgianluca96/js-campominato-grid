

// Variabile agganciata al grid container
let gridContainer = document.getElementById('gridCont');
let btnGridGen = document.getElementById('btnGridGen');


btnGridGen.addEventListener('click', function(){
    
    for (let i = 1; i <= 100; i++) {
        
        // creazione singola cella
        let gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.innerHTML = i;
        // Aggiungo la cella al grid container
        gridContainer.append(gridCell);

        //Aggiungo azione al click
        gridCell.addEventListener('click', function() {

            gridCell.classList.add('gridCellClick');

            console.log('Hai cliccato sulla cella n.' + gridCell.innerHTML);

        })

    }

})



