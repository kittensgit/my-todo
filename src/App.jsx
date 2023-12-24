import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import { Tab, Tabs } from '@mui/material';

import TodoPage from './components/pages/TodoPage';
import CaloriePage from './components/pages/CaloriePage';

const App = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Получаем текущий путь из объекта window.location
        const currentPath = window.location.pathname;

        // Устанавливаем значение value в зависимости от текущего пути
        if (currentPath === '/my-todo') {
            setValue(0);
        } else if (currentPath === '/calorie') {
            setValue(1);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedTab', value);
    }, [value]);

    // Обработчик изменения таба
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            navigate('/my-todo');
        } else if (newValue === 1) {
            navigate('/calorie');
        }
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="My Tabs">
                <Tab label="TodoList" component={Link} to="/my-todo" />
                <Tab label="Calorie Counter" component={Link} to="/calorie" />
            </Tabs>
            <Routes>
                <Route path="/my-todo" element={<TodoPage />} />
                <Route path="/calorie" element={<CaloriePage />} />
            </Routes>
        </div>
    );
};

export default App;
