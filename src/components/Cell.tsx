import React from 'react';

interface CellProps {
    isAlive: boolean;
}
//Renders a div with a class of alive or dead
const Cell: React.FC<CellProps> = ({ isAlive }) => {
    return (
        <div className={`cell ${isAlive ? 'alive' : 'dead'}`}></div>
    );
};

export default Cell;
