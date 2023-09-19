import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import MealForm from './MealForm';

const Breakfast = () => {
    const [selectedFoodList, setSelectedFoodList] = useState([]);

    const addMeal = (meal) => {
        setSelectedFoodList([...selectedFoodList, meal]);
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
                        sx={{ border: '1px dashed #000', padding: '10px' }}
                    >
                        {meal.name} - {meal.weight} - {meal.calorie} calorie
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Breakfast;
