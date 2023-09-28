import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditMealForm from './EditMealForm';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const MealItem = ({ foods, meal, deleteMeal, updateMeal, calorieMeal }) => {
    const [isEdit, setIsEdit] = useState(false);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <Box
            key={meal.id}
            mt={2}
            className="meal"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px dashed #000',
                padding: '10px',
                width: '360px',
            }}
        >
            {isEdit ? (
                <EditMealForm
                    foods={foods}
                    meal={meal}
                    updateMeal={updateMeal}
                    toggleEdit={toggleEdit}
                />
            ) : (
                <>
                    <Typography variant="body2">
                        {meal.name} - {meal.weight} gramm -{' '}
                        {calorieMeal(meal.weight, meal.calorie)} calorie
                    </Typography>
                    <Button onClick={toggleEdit}>
                        <EditIcon />
                    </Button>
                    <Button onClick={() => deleteMeal(meal.id)}>
                        <DeleteIcon />
                    </Button>
                </>
            )}
        </Box>
    );
};

export default MealItem;
