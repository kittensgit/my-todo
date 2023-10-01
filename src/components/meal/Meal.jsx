import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MealItem from './MealItem';

const Meal = ({
    mealName,
    foods,
    selectedFoodList,
    setSelectedFoodList,
    changeEatenCalorie,
}) => {
    useEffect(() => {
        const localMeal = JSON.parse(localStorage.getItem(`meals`));
        if (localMeal) {
            setSelectedFoodList(localMeal);
        }
    }, [setSelectedFoodList]);
    const filteredFoodList = selectedFoodList.filter(
        (meal) => meal.mealName === mealName
    );

    const deleteFood = (idMeal) => {
        const updatedMeal = selectedFoodList.filter(
            (selectedFood) => selectedFood.id !== idMeal
        );
        setSelectedFoodList(updatedMeal);
        localStorage.setItem(`meals`, JSON.stringify(updatedMeal));
    };

    const updateFood = (updatedMeal) => {
        const updatedSelectedFoodList = selectedFoodList.map((food) =>
            food.id === updatedMeal.id ? updatedMeal : food
        );
        setSelectedFoodList?.(updatedSelectedFoodList);
        localStorage.setItem(`meals`, JSON.stringify(updatedSelectedFoodList));
        changeEatenCalorie(updatedMeal.calculatedCalories);
    };

    return (
        <Box mx={2} mt={2}>
            <Typography variant="h2">{mealName}</Typography>
            <Box>
                {selectedFoodList &&
                    filteredFoodList.map((meal) => (
                        <MealItem
                            key={meal.id}
                            foods={foods}
                            meal={meal}
                            deleteFood={deleteFood}
                            updateFood={updateFood}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default Meal;
