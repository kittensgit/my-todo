import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MealItem from './MealItem';

const Meal = ({
    mealName,
    foods,
    selectedFoodList,
    setSelectedFoodList,
    changeEatenCalorie,
    calorieFood,
    calcMacronutrient,
    changeEatenProtein,
    changeEatenCarbs,
    changeEatenFats,
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
        const deletedMeal = selectedFoodList.find(
            (selectedFood) => selectedFood.id === idMeal
        );

        if (deletedMeal) {
            // Вызываем changeEatenCalorie с отрицательным значением калорий удаленной еды
            changeEatenCalorie(-deletedMeal.calculatedCalories);
            changeEatenProtein(-deletedMeal.calculatedProtein);
            changeEatenFats(-deletedMeal.calculatedFats);
            changeEatenCarbs(-deletedMeal.calculatedCarbs);

            // Удаляем еду из selectedFoodList и обновляем localStorage
            const updatedMeal = selectedFoodList.filter(
                (selectedFood) => selectedFood.id !== idMeal
            );
            setSelectedFoodList(updatedMeal);
            localStorage.setItem(`meals`, JSON.stringify(updatedMeal));
        }
    };

    const updateFood = (updatedMeal) => {
        const updatedSelectedFoodList = selectedFoodList.map((food) =>
            food.id === updatedMeal.id ? updatedMeal : food
        );

        // Найдем старый объект блюда в списке, чтобы получить его старое значение калорий
        const oldMeal = selectedFoodList.find(
            (food) => food.id === updatedMeal.id
        );

        // Рассчитываем разницу в калориях между новым и старым значением
        const calorieDifference =
            updatedMeal.calculatedCalories - oldMeal.calculatedCalories;
        // Рассчитываем разницу в белках между новым и старым значением
        const proteinDifference =
            updatedMeal.calculatedProtein - oldMeal.calculatedProtein;
        // Рассчитываем разницу в жирах между новым и старым значением
        const fatsDifference =
            updatedMeal.calculatedFats - oldMeal.calculatedFats;
        // Рассчитываем разницу в углеводах между новым и старым значением
        const carbsDifference =
            updatedMeal.calculatedCarbs - oldMeal.calculatedCarbs;

        changeEatenCalorie(calorieDifference);
        changeEatenProtein(proteinDifference);
        changeEatenFats(fatsDifference);
        changeEatenCarbs(carbsDifference);

        setSelectedFoodList?.(updatedSelectedFoodList);
        localStorage.setItem(`meals`, JSON.stringify(updatedSelectedFoodList));
    };

    return (
        <Box
            mx={2}
            mt={2}
            sx={{
                width: '400px',
            }}
        >
            <Typography sx={{ textAlign: 'center' }} variant="h2">
                {mealName}
            </Typography>
            <Box>
                {selectedFoodList &&
                    filteredFoodList.map((meal) => (
                        <MealItem
                            key={meal.id}
                            foods={foods}
                            meal={meal}
                            deleteFood={deleteFood}
                            updateFood={updateFood}
                            calorieFood={calorieFood}
                            calcMacronutrient={calcMacronutrient}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default Meal;
