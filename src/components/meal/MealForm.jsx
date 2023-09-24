import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';

const MealForm = ({ foods, onAddMeal }) => {
    const [selectedFood, setSelectedFood] = useState('');
    const [value, setValue] = useState('');

    const handleFoodChange = (event) => {
        setSelectedFood(event.target.value);
    };

    const handleWeightChange = (e) => {
        setValue(e.target.value); // Обновляем локальное состояние веса
    };

    const addFood = () => {
        if (selectedFood) {
            const selectedFoodObj = foods.find(
                (food) => food.name === selectedFood
            );
            if (selectedFoodObj) {
                onAddMeal({
                    name: selectedFood,
                    calorie: selectedFoodObj.calorie,
                    weight: value || 0,
                });
            }
        }
    };

    const handleAddClick = () => {
        addFood();
        setSelectedFood('');
        setValue('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (value && selectedFood) {
                addFood();
                setSelectedFood('');
                setValue('');
            }
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
                sx={{ width: '150px' }}
                select
                label="Choose food"
                size="small"
                value={selectedFood}
                onChange={handleFoodChange}
            >
                {foods.map((food) => (
                    <MenuItem key={food.name} value={food.name}>
                        {food.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                sx={{ width: '125px' }}
                id="outlined-basic"
                label="Enter weight"
                variant="outlined"
                size="small"
                value={value}
                onChange={handleWeightChange}
                onKeyDown={handleEnter}
            />
            <Button size="small" variant="outlined" onClick={handleAddClick}>
                Add
            </Button>
        </Box>
    );
};

export default MealForm;
