import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MealForm from './MealForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { v4 as uuidv4 } from 'uuid';
import EditMealForm from './EditMealForm';

const Meal = ({ mealName }) => {
    const [selectedFoodList, setSelectedFoodList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const localMeal = JSON.parse(localStorage.getItem(`meal_${mealName}`));
        if (localMeal) {
            setSelectedFoodList(localMeal);
        }
    }, [mealName]);

    const addMeal = (meal) => {
        const newMeal = { ...meal, id: uuidv4() };
        const updatedMeal = [...selectedFoodList, newMeal];
        setSelectedFoodList(updatedMeal);
        localStorage.setItem(`meal_${mealName}`, JSON.stringify(updatedMeal));
    };

    const deleteMeal = (idMeal) => {
        setSelectedFoodList(
            selectedFoodList.filter(
                (selectedFood) => selectedFood.id !== idMeal
            )
        );
    };

    const updateMeal = (updatedMeal) => {
        setSelectedFoodList(
            selectedFoodList.map((food) =>
                food.id === updatedMeal.id ? updatedMeal : food
            )
        );
    };

    const calorieMeal = (weight, calorie) => {
        return Math.round((weight * calorie) / 100);
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <Box mx={2} mt={2}>
            <Typography variant="h2">{mealName}</Typography>
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
                            width: '360px',
                        }}
                    >
                        {isEdit ? (
                            <EditMealForm
                                meal={meal}
                                updateMeal={updateMeal}
                                toggleEdit={toggleEdit}
                            />
                        ) : (
                            <>
                                {meal.name} - {meal.weight} gramm -{' '}
                                {calorieMeal(meal.weight, meal.calorie)} calorie
                                <Button onClick={toggleEdit}>
                                    <EditIcon />
                                </Button>
                                <Button onClick={() => deleteMeal(meal.id)}>
                                    <DeleteIcon />
                                </Button>
                            </>
                        )}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Meal;
