import React from 'react';
import Cell from './Cell';

interface GridProps {
    grid: number[][];
}
// grid state and renders Cell components
const Grid: React.FC<GridProps> = ({ grid }) => {
    return (
        <div className="grid">
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        isAlive={cell === 1}
                    />
                ))
            )}
        </div>
    );
};

export default Grid;
