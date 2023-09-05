import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    const addTask = (tasks) => {
        if (tasks) {
            const newTask = {
                id: uuidv4(),
                tasks,
                complete: false,
            };
            setTodos([newTask, ...todos]);
        }
    };

    const updateTask = (updateTodo) => {
        setTodos(
            todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
        );
    };

    const removeTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        const tasks = todos.filter((task) => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTodos(tasks);
    };

    const completedTasks = todos.filter((todo) => todo.complete);
    const progress = (completedTasks.length / todos.length) * 100;

    return (
        <div className="App">
            <h1>task count: {todos.length}</h1>
            <TodoForm addTask={addTask} />
            <div className="line">
                <div
                    style={{ width: `${progress}%` }}
                    className="progress"
                ></div>
            </div>
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
