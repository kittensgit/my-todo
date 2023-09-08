import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { Box, LinearProgress, Typography } from '@mui/material';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

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
            };
            const updatedTasks = [newTask, ...todos];
            setTodos(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const updateTask = (updateTodo) => {
        setTodos(
            todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
        );
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

    const completedTasks = todos.filter((todo) => todo.complete);
    const progress = (completedTasks.length / todos.length) * 100;

    return (
        <div className="App">
            <Typography variant="h2" gutterBottom>
                task count: {todos.length}
            </Typography>

            <TodoForm addTask={addTask} clearTask={clearTask} />
            <Box mt={2} sx={{ width: '400px' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>

            {todos.map((todo) => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    id={todo.id}
                    tasks={todo.tasks}
                    complete={todo.complete}
                    removeTask={removeTask}
                    toggleTodo={toggleTodo}
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
};

export default App;
