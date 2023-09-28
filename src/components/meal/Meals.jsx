import React, { useState } from 'react';
import { Box } from '@mui/material';
import Meal from './Meal';
import MealForm from './MealForm';
import { v4 as uuidv4 } from 'uuid';

const Meals = () => {
    const [selectedMeal, setSelectedMeal] = useState('Breakfast'); // Значение по умолчанию
    const [selectedFood, setSelectedFood] = useState('');
    const [value, setValue] = useState('');
    const [selectedFoodList, setSelectedFoodList] = useState([]);
    const [selectedMealName, setSelectedMealName] = useState('Breakfast'); // Состояние для выбранного приема пищи

    const foods = [
        {
            id: uuidv4(),
            name: 'soup',
            calorie: 53,
        },
        {
            id: uuidv4(),
            name: 'cake',
            calorie: 372,
        },
        {
            id: uuidv4(),
            name: 'salad',
            calorie: 180,
        },
    ];

    const addMeal = (meal) => {
        const newMeal = { ...meal, id: uuidv4(), mealName: selectedMealName }; // Добавляем имя приема пищи к блюду
        debugger;
        setSelectedFoodList((prevList) => [...prevList, newMeal]);
        localStorage.setItem(
            `meal_${selectedMealName}`,
            JSON.stringify([...selectedFoodList, newMeal])
        );
    };

    const addFood = () => {
        if (selectedFood) {
            const selectedFoodObj = foods.find(
                (food) => food.name === selectedFood
            );
            if (selectedFoodObj) {
                const mealObj = {
                    name: selectedFood,
                    calorie: selectedFoodObj.calorie,
                    weight: value || 0,
                };
                addMeal(mealObj);
            }
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <MealForm
                addFood={addFood}
                selectedFood={selectedFood}
                setSelectedFood={setSelectedFood}
                value={value}
                setValue={setValue}
                foods={foods}
                selectedMeal={selectedMeal}
                setSelectedMeal={setSelectedMeal}
                selectedMealName={selectedMealName} // Передаем выбранное имя приема пищи
                setSelectedMealName={setSelectedMealName} // Функция для обновления имени приема пищи
            />
            <Box
                sx={{
                    display: 'flex',
                    padding: '0 50px',
                    justifyContent: 'space-between',
                }}
            >
                <Meal
                    mealName={'Breakfast'}
                    foods={foods}
                    selectedFoodList={selectedFoodList}
                    selectedMealName={selectedMealName} // Передаем выбранное имя приема пищи
                    setSelectedFoodList={setSelectedFoodList}
                />
                <Meal
                    mealName={'Lunch'}
                    foods={foods}
                    selectedFoodList={selectedFoodList}
                    selectedMealName={selectedMealName} // Передаем выбранное имя приема пищи
                    setSelectedFoodList={setSelectedFoodList}
                />
                <Meal
                    mealName={'Dinner'}
                    foods={foods}
                    selectedFoodList={selectedFoodList}
                    selectedMealName={selectedMealName} // Передаем выбранное имя приема пищи
                    setSelectedFoodList={setSelectedFoodList}
                />
            </Box>
        </Box>
    );
};

export default Meals;
