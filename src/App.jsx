import React, { useState } from 'react';
import { Button, Tab, Tabs, Typography } from '@mui/material';
import TodoPage from './components/pages/TodoPage';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="My Tabs">
                <Tab label="TodoList" component={Link} to="/" />
                <Tab label="Calorie Counter" component={Link} to="/calorie" />
            </Tabs>
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path="/calorie" element={<div>Страница 1</div>} />
            </Routes>
        </div>
    );
};

export default App;
