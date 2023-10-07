import React from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';

// Компонент MealForm содержит форму для добавления блюд в список приемов пищи
const MealForm = ({
    foods,
    addSelectedFood,
    setSelectedFood,
    selectedFood,
    value,
    setValue,
    selectedMeal,
    setSelectedMeal,
    selectedMealName, // Принимаем выбранное имя приема пищи
    setSelectedMealName, // Принимаем функцию для обновления имени приема пищи
}) => {
    const handleFoodChange = (event) => {
        setSelectedFood(event.target.value);
    };

    const handleWeightChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddClick = () => {
        addSelectedFood();
        setSelectedFood('');
        setValue('');
        setSelectedMealName(selectedMeal); // Обновляем имя приема пищи
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (value && selectedFood) {
                addSelectedFood();
                setSelectedFood('');
                setValue('');
                setSelectedMealName(selectedMeal); // Обновляем имя приема пищи
            }
        }
    };

    return (
        <Box className="meal-form">
            <Box className="meal-form-fields">
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
                <TextField
                    sx={{ width: '150px' }}
                    select
                    label="Choose meal"
                    size="small"
                    value={selectedMealName} // Используем выбранное имя приема пищи
                    onChange={(e) => {
                        setSelectedMealName(e.target.value); // Обновляем имя приема пищи
                        setSelectedMeal(e.target.value);
                    }}
                >
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                </TextField>
            </Box>
            <Button size="small" variant="contained" onClick={handleAddClick}>
                Add
            </Button>
        </Box>
    );
};

export default MealForm;
