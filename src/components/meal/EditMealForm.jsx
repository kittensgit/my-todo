import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const EditMealForm = ({ foods, meal, updateFood, toggleEdit, calorieFood }) => {
    const [value, setValue] = useState(meal.name);
    const [weight, setWeight] = useState(meal.weight);

    const handleChangeInput = (e) => {
        setValue(e.target.value);
    };

    const handleWeight = (e) => {
        setWeight(e.target.value);
    };

    const handleSave = () => {
        if (value) {
            const mealObj = foods.find((food) => food.name === value);
            if (mealObj) {
                const updatedMeal = {
                    id: meal.id,
                    mealName: meal.mealName,
                    name: value,
                    calorie: mealObj.calorie,
                    weight,
                    calculatedCalories: calorieFood(weight, mealObj.calorie),
                };
                updateFood(updatedMeal);
            }
        }
        toggleEdit();
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <TextField
                label="Enter task"
                variant="standard"
                value={value}
                onChange={handleChangeInput}
            />
            <TextField
                sx={{ width: '120px', marginTop: '10px', marginLeft: '20px' }}
                variant="outlined"
                size="small"
                label="weight"
                value={weight}
                onChange={handleWeight}
                onKeyDown={handleEnter}
            />
            <Button
                sx={{ marginTop: '10px' }}
                variant="contained"
                onClick={handleSave}
            >
                Save
            </Button>
        </Box>
    );
};

export default EditMealForm;
