import { Box } from '@mui/material';
import React from 'react';
import Meal from './Meal';

const Meals = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 30px',
            }}
        >
            <Meal mealName={'Breakfast'} />
            <Meal mealName={'Lunch'} />
            <Meal mealName={'Dinner'} />
        </Box>
    );
};

export default Meals;
