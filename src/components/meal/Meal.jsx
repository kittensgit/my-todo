import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import MealForm from './MealForm';
import { v4 as uuidv4 } from 'uuid';
import MealItem from './MealItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Meal = ({ mealName }) => {
    const foods = [
        {
            id: uuidv4(),
            name: 'tea',
            calorie: 111,
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
    const [selectedFoodList, setSelectedFoodList] = useState([]);

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
        setSelectedFoodList(updatedSelectedFoodList);
        localStorage.setItem(
            `meal_${mealName}`,
            JSON.stringify(updatedSelectedFoodList)
        );
    };

    const calorieMeal = (weight, calorie) => {
        return Math.round((weight * calorie) / 100);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return; // Проверяем, что есть место для перемещения

        const items = Array.from(selectedFoodList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setSelectedFoodList(items);
        localStorage.setItem(`meal_${mealName}`, JSON.stringify(items));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Box mx={2} mt={2}>
                <Typography variant="h2">{mealName}</Typography>
                <MealForm foods={foods} onAddMeal={addMeal} />
                <Box>
                    <Droppable droppableId={mealName}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {selectedFoodList.map((meal, index) => (
                                    // Здесь используем Draggable для отдельного элемента
                                    <Draggable
                                        key={meal.id}
                                        draggableId={meal.id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <MealItem
                                                foods={foods}
                                                meal={meal}
                                                deleteMeal={deleteMeal}
                                                updateMeal={updateMeal}
                                                calorieMeal={calorieMeal}
                                                provided={provided}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Box>
            </Box>
        </DragDropContext>
    );
};

export default Meal;
