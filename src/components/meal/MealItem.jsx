import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditMealForm from './EditMealForm';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const MealItem = ({
    foods,
    meal,
    deleteFood,
    updateFood,
    calorieFood,
    calcMacronutrient,
}) => {
    // console.log(meal);
    const [isEdit, setIsEdit] = useState(false);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <Box
            key={meal.id}
            mt={2}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px dashed #000',
                padding: '10px',
                width: '400px',
                flexWrap: 'wrap',
            }}
        >
            {isEdit ? (
                <EditMealForm
                    foods={foods}
                    meal={meal}
                    updateFood={updateFood}
                    toggleEdit={toggleEdit}
                    calorieFood={calorieFood}
                    calcMacronutrient={calcMacronutrient}
                />
            ) : (
                <>
                    <Typography variant="body1">
                        {meal.name} - {meal.weight} gramm -{' '}
                        {meal.calculatedCalories} calorie
                    </Typography>
                    <Button onClick={toggleEdit}>
                        <EditIcon />
                    </Button>
                    <Button onClick={() => deleteFood(meal.id)}>
                        <DeleteIcon />
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '80px',
                            marginTop: '10px',
                        }}
                    >
                        <Typography variant="body2">
                            Protein: {meal.calculatedProtein}
                        </Typography>
                        <Typography variant="body2">
                            Fats: {meal.calculatedFats}
                        </Typography>
                        <Typography variant="body2">
                            Carbs: {meal.calculatedCarbs}
                        </Typography>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default MealItem;
