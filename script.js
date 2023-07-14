const createGrid = function createGrid(gridSize) {
    const gridContainerEl = document.getElementById('grid-container');
    gridContainerEl.innerHTML = '';

    for (let index = 0; index < gridSize; index++) {
        let newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        for (let index = 0; index < gridSize; index++) {
            let newCell = document.createElement('div');
            newCell.classList.add('cell');
            newRow.appendChild(newCell);
            addEventListener('mouseover', (newCell) => updateCell);
        }

        gridContainerEl.appendChild(newRow);
    }
}

const updateCell = function updateCell(cell) {
    console.log('update!');
}

createGrid(16);