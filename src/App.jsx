import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { Box, LinearProgress, Typography } from '@mui/material';
import FilterTodo from './components/FilterTodo';

const App = () => {
    const [todos, setTodos] = useState([]);

    const [filter, setFilter] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [priority, setPriority] = useState('ease');

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
            setPriority('ease');
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

    // const filteredTasks = todos.filter((todo) => {
    //     //filter task
    //     if (filter === 'completed') {
    //         return todo.complete;
    //     } else if (filter === 'uncompleted') {
    //         return !todo.complete;
    //     }
    //     //search task
    //     const textTask = todo.tasks.toLocaleLowerCase();
    //     const searchTextTaskLower = searchText.toLocaleLowerCase();
    //     return textTask.includes(searchTextTaskLower);
    // });

    const filterSortSearchTasks = (tasks, filter, searchText, sortOrder) => {
        const filteredTasks = tasks.filter((task) => {
            if (filter === 'completed') {
                return task.complete;
            } else if (filter === 'uncompleted') {
                return !task.complete;
            }

            const textTask = task.tasks.toLowerCase();
            const searchTextLowerCase = searchText.toLowerCase();
            return textTask.includes(searchTextLowerCase);
        });

        filteredTasks.sort((a, b) => {
            if (sortOrder === 'asc') {
                // Сначала сравниваем по приоритету
                if (a.priority === b.priority) {
                    // Если приоритеты совпадают, то сравниваем по времени создания
                    return new Date(a.createdAt) - new Date(b.createdAt);
                }
                return (
                    ['ease', 'medium', 'high'].indexOf(a.priority) -
                    ['ease', 'medium', 'high'].indexOf(b.priority)
                );
            } else if (sortOrder === 'desc') {
                // Сначала сравниваем по приоритету
                if (a.priority === b.priority) {
                    // Если приоритеты совпадают, то сравниваем по времени создания
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }
                return (
                    ['ease', 'medium', 'high'].indexOf(b.priority) -
                    ['ease', 'medium', 'high'].indexOf(a.priority)
                );
            }
        });

        return filteredTasks;
    };

    const filteredAndSortedTasks = filterSortSearchTasks(
        todos,
        filter,
        searchText,
        sortOrder
    );

    return (
        <div className="App">
            <Typography variant="h2" gutterBottom>
                Task count: {todos.length}
            </Typography>

            <TodoForm
                priority={priority}
                addTask={addTask}
                clearTask={clearTask}
                changePriority={changePriority}
            />
            <Box mt={2} sx={{ width: '400px' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>

            <FilterTodo
                setFilter={setFilter}
                searchText={searchText}
                setSearchText={setSearchText}
                setSortOrder={setSortOrder}
            />

            <Box marginBottom={'50px'}>
                {filteredAndSortedTasks.map((todo) => (
                    <Todo
                        todo={todo}
                        createdAt={todo.createdAt}
                        key={todo.id}
                        id={todo.id}
                        tasks={todo.tasks}
                        complete={todo.complete}
                        removeTask={removeTask}
                        toggleTodo={toggleTodo}
                        updateTask={updateTask}
                    />
                ))}
            </Box>
        </div>
    );
};

export default App;
