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

const clearGrid = function clearGrid() {
    const gridContainerEl = document.getElementById('grid-container');
    gridContainerEl.innerHTML = '';
}

const resetGrid = function clearAndCreateGrid() {
    clearGrid();
    createGrid(getGridSize());
}

const updateCell = function updateCell(cell) {
    cell.style.backgroundColor = getColor()
}

const initializeApp = function initializeApp() {
    const resetButtonEl = document.getElementById('reset-button');
    const rangeEl = document.getElementById('myRange');
    const rangeLabelEl = document.querySelector('#range-container label');

    resetButtonEl.addEventListener('click', () => {
        resetGrid();
    })

    rangeEl.addEventListener('change', () => {
        const gridSize = getGridSize();

        resetGrid();
        rangeLabelEl.textContent = `${gridSize}x${gridSize}`;
    })

    createGrid(getGridSize());
}

initializeApp();