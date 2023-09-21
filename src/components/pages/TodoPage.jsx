import { Box, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../todoList/TodoForm';
import FilterTodo from '../todoList/FilterTodo';
import TodoList from '../todoList/TodoList';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [priority, setPriority] = useState('easy');

    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks) {
            setTodos(localTasks);
        }
    }, []);

    const addTask = (tasks) => {
        if (tasks) {
            const newTask = {
                id: uuidv4(),
                tasks,
                complete: false,
                priority: priority,
                createdAt: new Date(),
                updatedAt: null,
            };
            setPriority('easy');
            const updatedTasks = [newTask, ...todos];
            setTodos(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const updateTask = (updateTodo) => {
        // Обновляем поле updatedAt при редактировании
        const updatedTodo = { ...updateTodo, updatedAt: new Date() };

        setTodos(
            todos.map((todo) =>
                todo.id === updateTodo.id ? updatedTodo : todo
            )
        );

        const updatedTasks = todos.map((todo) =>
            todo.id === updateTodo.id ? updatedTodo : todo
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const removeTask = (id) => {
        const updatedTasks = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const toggleTodo = (id) => {
        const tasks = todos.filter((task) => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTodos(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const clearTask = () => {
        setTodos(todos.filter((todo) => todo.complete !== true));
    };

    const changePriority = (priority) => {
        setPriority(priority);
    };

    const completedTasks = todos.filter((todo) => todo.complete);
    const progress = (completedTasks.length / todos.length) * 100;

    // Функция для фильтрации задач по параметрам filter
    const filterTasksByFilter = (tasks, filter) => {
        if (filter === 'completed') {
            return tasks.filter((task) => task.complete);
        } else if (filter === 'uncompleted') {
            return tasks.filter((task) => !task.complete);
        }
        return tasks; // иначе верни все таски
    };

    // Функция для фильтрации задач по тексту поиска
    const filterTasksBySearchText = (tasks, searchText) => {
        const searchTextLowerCase = searchText.toLowerCase();
        return tasks.filter((task) => {
            const textTask = task.tasks.toLowerCase();
            return textTask.includes(searchTextLowerCase); // верни таску елси она содержит поисковый текст
        });
    };

    // Функция для сортировки задач по параметру sortOrder
    const sortTasks = (tasks, sortOrder) => {
        const priorities = ['easy', 'medium', 'high'];
        return tasks.sort((a, b) => {
            if (sortOrder === 'asc') {
                if (a.priority === b.priority) {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                }
                return (
                    priorities.indexOf(a.priority) -
                    priorities.indexOf(b.priority)
                );
            } else if (sortOrder === 'desc') {
                if (a.priority === b.priority) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }
                return (
                    priorities.indexOf(b.priority) -
                    priorities.indexOf(a.priority)
                );
            }
            return 0; // Добавляем возврат 0 для случая, когда sortOrder не равен 'asc' или 'desc'
        });
    };

    // Основная функция для фильтрации, сортировки и поиска задач
    const filterSortSearchTasks = (tasks, filter, searchText, sortOrder) => {
        const tasksFilteredByFilter = filterTasksByFilter(tasks, filter);
        const tasksFilteredBySearchText = filterTasksBySearchText(
            tasksFilteredByFilter,
            searchText
        );
        const sortedTasks = sortTasks(tasksFilteredBySearchText, sortOrder);
        return sortedTasks;
    };

    const filteredAndSortedTasks = filterSortSearchTasks(
        todos,
        filter,
        searchText,
        sortOrder
    );

    return (
        <div className="App">
            <Typography variant="h2" gutterBottom mt={2}>
                Task count: {todos.length}
            </Typography>
            <TodoForm
                priority={priority}
                addTask={addTask}
                clearTask={clearTask}
                changePriority={changePriority}
            />
            <Box mt={2} sx={{ width: '50%' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <FilterTodo
                setFilter={setFilter}
                searchText={searchText}
                setSearchText={setSearchText}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <TodoList
                filteredAndSortedTasks={filteredAndSortedTasks}
                removeTask={removeTask}
                updateTask={updateTask}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default TodoPage;
