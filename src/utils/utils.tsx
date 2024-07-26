// count the number of neighbors for a cell in the grid
export const countAlive = (grid: number[][], currentRow: number, currentCol: number): number => {
    let aliveCount = 0;
    const totalRows = grid.length;
    const totalCols = grid[0].length;

    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (let colOffset = -1; colOffset <= 1; colOffset++) {
            if (rowOffset === 0 && colOffset === 0) continue; // skip cell
            const neighborRow = currentRow + rowOffset;
            const neighborCol = currentCol + colOffset;
            if (neighborRow >= 0 && neighborRow < totalRows && neighborCol >= 0 && neighborCol < totalCols) {
                aliveCount += grid[neighborRow][neighborCol];
            }
        }
    }

    return aliveCount;
};

// function to create a 50x50 grid
export const createGrid = (): number[][] => {
    const size = 50;
    const grid = [];

    for (let row = 0; row < size; row++) {
        const rowArray = [];
        for (let col = 0; col < size; col++) {
            const cellState = Math.random() > 0.5 ? 1 : 0; // 50% chance (percentage of live cells)
            rowArray.push(cellState);
        }
        grid.push(rowArray);
    }

    return grid;
};

// creates a copy of the current grid
const createNextGrid = (grid: number[][]): number[][] => {
    return grid.map(row => [...row]);
};

//if a cell should remain alive
const cellLive = (aliveNeighbors: number): boolean => {
    return aliveNeighbors === 2 || aliveNeighbors === 3;
};

// if a dead cell should become alive
const cellRepeat = (aliveNeighbors: number): boolean => {
    return aliveNeighbors === 3;
};


// if a cell is alive
const isCellAlive = (cell: number): boolean => {
    return cell === 1;
};

//update func number of alive neighbors
const updateCellState = (grid: number[][], row: number, col: number, aliveNeighbors: number): number => {
    if (isCellAlive(grid[row][col])) {
        return cellLive(aliveNeighbors) ? 1 : 0;
    } else {
        return cellRepeat(aliveNeighbors) ? 1 : 0;
    }
};

// function to count the next state of the grid
export const runGridState = (grid: number[][]): number[][] => {
    const nextGrid = createNextGrid(grid);

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const aliveNeighbors = countAlive(grid, row, col);
            nextGrid[row][col] = updateCellState(grid, row, col, aliveNeighbors);
        }
    }

    return nextGrid;
};
