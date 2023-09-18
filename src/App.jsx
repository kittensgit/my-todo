import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import TodoPage from './components/pages/TodoPage';

const App = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="My Tabs">
                <Tab label="TodoList" />
                <Tab label="Calorie counter" />
            </Tabs>
            {/* Содержимое активной вкладки */}
            {value === 0 && <TodoPage />}
            {value === 1 && <div>Содержимое вкладки 2</div>}
        </div>
    );
};

export default App;
