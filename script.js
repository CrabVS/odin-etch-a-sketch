const getColor = function getSelectedColorBrush() {
    const colorEl = document.getElementById('favcolor');

    return colorEl.value;
}

const getGridSize = function getSelectedGridSize() {
    const rangeEl = document.getElementById('myRange');
    
    return rangeEl.value;
}

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
            newCell.addEventListener('mouseover', () => updateCell(newCell));
        }

        gridContainerEl.appendChild(newRow);
    }
}

const updateCell = function updateCell(cell) {
    cell.style.backgroundColor = getColor()
}

const initializeApp = function initializeApp() {
    createGrid(getGridSize());
}

initializeApp();