import React, { useState } from 'react';
import { Box } from '@mui/material';
import Meal from './Meal';
import MealForm from './MealForm';
import { v4 as uuidv4 } from 'uuid';
// import { CheckBox } from '@mui/icons-material';

// Компонент Meals отображает форму приемов пищи и список выбранных блюд
const Meals = () => {
    const [selectedMeal, setSelectedMeal] = useState('Breakfast'); // Выбранный прием пищи
    const [selectedFood, setSelectedFood] = useState(''); // Выбранное блюдо
    const [value, setValue] = useState(''); // Введенный вес
    const [selectedFoodList, setSelectedFoodList] = useState([]); // Список выбранных блюд
    const [selectedMealName, setSelectedMealName] = useState('Breakfast'); // Имя выбранного приема пищи

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

    // Функция для добавления блюда в список
    const addFoodToMeal = (meal) => {
        if (selectedFoodList) {
            const newMeal = {
                ...meal,
                id: uuidv4(),
                mealName: selectedMealName,
            };
            const updatedFoodList = [...selectedFoodList, newMeal];
            setSelectedFoodList(updatedFoodList);
            localStorage.setItem(
                `meal_${selectedMealName}`,
                JSON.stringify(updatedFoodList)
            );
        }
    };

    // Функция для добавления выбранного блюда
    const addSelectedFood = () => {
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
                addFoodToMeal(mealObj);
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
                addSelectedFood={addSelectedFood}
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
