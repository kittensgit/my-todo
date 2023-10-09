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
        <Box className="meal-item">
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
                <Box className="meal-info">
                    <Box display={'flex'}>
                        <Typography variant="body1">
                            {meal.name} - {meal.weight} gramm -{' '}
                            {meal.calculatedCalories} calorie
                        </Typography>
                    </Box>

                    <Box>
                        <Button sx={{ minWidth: '24px' }} onClick={toggleEdit}>
                            <EditIcon />
                        </Button>
                        <Button
                            sx={{ minWidth: '24px' }}
                            onClick={() => deleteFood(meal.id)}
                        >
                            <DeleteIcon />
                        </Button>
                    </Box>
                    {isEdit ? (
                        <></>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '50px',
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
                    )}
                </Box>
            )}
        </Box>
    );
};

export default MealItem;
