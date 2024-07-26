import { countAlive, createGrid, runGridState } from '../utils/utils';

describe('Game of Life', () => {
    describe('countAlive', () => {
        it('should count the number of alive neighbors correctly', () => {
            const grid = [
                [1, 1, 0],
                [1, 0, 0],
                [0, 0, 0],
            ];

            expect(countAlive(grid, 0, 0)).toBe(2);
            expect(countAlive(grid, 1, 1)).toBe(3);
            expect(countAlive(grid, 2, 2)).toBe(0);
            expect(countAlive(grid, 1, 0)).toBe(2);
        });
    });

    describe('createGrid', () => {
        it('should create a grid of the specified size', () => {
            const gridSize = 50;
            const grid = createGrid();

            //grid has the correct number of rows and columns
            expect(grid.length).toBe(gridSize);
            expect(grid[0].length).toBe(gridSize);
        });

        it('should contain only 0s and 1s', () => {
            const grid = createGrid();

            // check all cells in the grid are 0 (dead) or 1 (alive)
            for (let row of grid) {
                for (let cell of row) {
                    expect([0, 1]).toContain(cell);
                }
            }
        });
    });

    describe('getNextGridState', () => {
        it('should apply Game of Life rules correctly', () => {
            const grid = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ];

            const expectedNextGrid = [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
            ];

            // horizontal line of three live cells should be a vertical line
            expect(runGridState(grid)).toEqual(expectedNextGrid);
        });

        it('runGridState', () => {
            const grid = [
                [1, 1, 0],
                [1, 1, 0],
                [0, 0, 0],
            ];

            const expectedNextGrid = [
                [1, 1, 0],
                [1, 1, 0],
                [0, 0, 0],
            ];

            // 2x2 block of live cells
            expect(runGridState(grid)).toEqual(expectedNextGrid);
        });
    });
});
