import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import TodoPage from './components/pages/TodoPage';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CaloriePage from './components/pages/CaloriePage';

const App = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const savedValue = localStorage.getItem('selectedTab');
        if (savedValue) {
            setValue(Number(savedValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedTab', value);
    }, [value]);

    // Обработчик изменения таба
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            navigate('/');
        } else if (newValue === 1) {
            navigate('/calorie');
        }
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="My Tabs">
                <Tab label="TodoList" component={Link} to="/" />
                <Tab label="Calorie Counter" component={Link} to="/calorie" />
            </Tabs>
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path="/calorie" element={<CaloriePage />} />
            </Routes>
        </div>
    );
};

export default App;
