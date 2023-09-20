import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MealForm from './MealForm';
import DeleteIcon from '@mui/icons-material/Delete';

import { v4 as uuidv4 } from 'uuid';

const Breakfast = () => {
    const [selectedFoodList, setSelectedFoodList] = useState([]);

    const addMeal = (meal) => {
        const newMeal = { ...meal, id: uuidv4() };
        setSelectedFoodList([...selectedFoodList, newMeal]);
    };

    const deleteMeal = (idMeal) => {
        setSelectedFoodList(
            selectedFoodList.filter(
                (selectedFood) => selectedFood.id !== idMeal
            )
        );
    };

    return (
        <Box mx={2} mt={2}>
            <Typography variant="h2">Breakfast</Typography>
            <MealForm onAddMeal={addMeal} />
            <Box>
                {selectedFoodList.map((meal) => (
                    <Typography
                        key={meal.id}
                        mt={2}
                        className="meal"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '1px dashed #000',
                            padding: '10px',
                            width: '400px',
                        }}
                    >
                        {meal.name} - {meal.weight} - {meal.calorie} calorie
                        <Button onClick={() => deleteMeal(meal.id)}>
                            <DeleteIcon />
                        </Button>
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Breakfast;
