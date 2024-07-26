import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import './styles.css';
import { createGrid, runGridState } from './utils/utils';

const App: React.FC = () => {
    const [grid, setGrid] = useState<number[][]>(createGrid());

    useEffect(() => {
        const interval = setInterval(() => {
            setGrid(prevGrid => runGridState(prevGrid));
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Grid grid={grid} />
        </div>
    );
};

export default App;
