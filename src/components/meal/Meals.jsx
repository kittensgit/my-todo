import React, { useState } from 'react';
import { Box } from '@mui/material';
import Meal from './Meal';
import MealForm from './MealForm';
import { v4 as uuidv4 } from 'uuid';

// Компонент Meals отображает форму приемов пищи и список выбранных блюд
const Meals = ({ changeEatenCalorie }) => {
    const [selectedMeal, setSelectedMeal] = useState('Breakfast'); // Выбранный прием пищи
    const [selectedFood, setSelectedFood] = useState(''); // Выбранное блюдо
    const [value, setValue] = useState(''); // Введенный вес
    const [selectedFoodList, setSelectedFoodList] = useState([]); // Список выбранных блюд
    const [selectedMealName, setSelectedMealName] = useState('Breakfast'); // Имя выбранного приема пищи

    const mealNames = ['Breakfast', 'Lunch', 'Dinner'];
    const foods = [
        {
            id: uuidv4(),
            name: 'soup',
            calorie: 56,
            protein: 5.34,
            fats: 1.71,
            carbs: 4.74,
        },
        {
            id: uuidv4(),
            name: 'cake',
            calorie: 372,
            protein: 6.4,
            fats: 22,
            carbs: 38.7,
        },
        {
            id: uuidv4(),
            name: 'salad',
            calorie: 180,
            protein: 13,
            fats: 7,
            carbs: 5,
        },
    ];

    const calorieFood = (weight, calorie) => {
        return Math.round((weight * calorie) / 100);
    };

    const calcMacronutrient = (weight, protein) => {
        return Math.round((weight * protein) / 100);
    };

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

            // Сохраняем все приемы пищи в одном ключе localStorage
            localStorage.setItem(
                `meals`, // Название ключа можно оставить общим для всех приемов
                JSON.stringify(updatedFoodList)
            );
        }
    };

    const addSelectedFood = () => {
        // Проверяем, выбрана ли какая-либо пища
        if (selectedFood) {
            // Находим объект выбранной пищи в массиве foods
            const selectedFoodObj = foods.find(
                (food) => food.name === selectedFood
            );

            // Если найден объект выбранной пищи
            if (selectedFoodObj) {
                // Создаем объект для еды в приеме пищи с именем, калориями и весом
                const mealObj = {
                    name: selectedFood,
                    calorie: selectedFoodObj.calorie,
                    weight: value || 0, // value -  это вес
                    calculatedCalories: calorieFood(
                        value || 0,
                        selectedFoodObj.calorie
                    ),
                    calculatedProtein: calcMacronutrient(
                        value || 0,
                        selectedFoodObj.protein
                    ),
                    calculatedFats: calcMacronutrient(
                        value || 0,
                        selectedFoodObj.fats
                    ),
                    calculatedCarbs: calcMacronutrient(
                        value || 0,
                        selectedFoodObj.carbs
                    ),
                };

                // Вызываем функцию для добавления еды в прием пищи
                addFoodToMeal(mealObj);
                changeEatenCalorie(mealObj.calculatedCalories);
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
                {mealNames.map((mealName) => (
                    <Meal
                        key={mealName} // Важно добавить ключ для каждого компонента в маппинге
                        mealName={mealName}
                        foods={foods}
                        selectedFoodList={selectedFoodList}
                        selectedMealName={selectedMealName}
                        setSelectedFoodList={setSelectedFoodList}
                        changeEatenCalorie={changeEatenCalorie}
                        calorieFood={calorieFood}
                        calcMacronutrient={calcMacronutrient}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Meals;
