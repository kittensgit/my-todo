import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MealItem from './MealItem';

const Meal = ({ mealName, foods, selectedFoodList, setSelectedFoodList }) => {
    useEffect(() => {
        const localMeal = JSON.parse(localStorage.getItem(`meal_${mealName}`));
        if (localMeal) {
            setSelectedFoodList(localMeal);
        }
    }, [mealName, setSelectedFoodList]);
    const filteredFoodList = selectedFoodList.filter(
        (meal) => meal.mealName === mealName
    );

    const deleteMeal = (idMeal) => {
        const updatedMeal = selectedFoodList.filter(
            (selectedFood) => selectedFood.id !== idMeal
        );
        setSelectedFoodList(updatedMeal);
        localStorage.setItem(`meal_${mealName}`, JSON.stringify(updatedMeal));
    };

    const updateMeal = (updatedMeal) => {
        const updatedSelectedFoodList = selectedFoodList.map((food) =>
            food.id === updatedMeal.id ? updatedMeal : food
        );
        setSelectedFoodList?.(updatedSelectedFoodList);
        localStorage.setItem(
            `meal_${mealName}`,
            JSON.stringify(updatedSelectedFoodList)
        );
    };

    const calorieMeal = (weight, calorie) => {
        return Math.round((weight * calorie) / 100);
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
                            deleteMeal={deleteMeal}
                            updateMeal={updateMeal}
                            calorieMeal={calorieMeal}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default Meal;
