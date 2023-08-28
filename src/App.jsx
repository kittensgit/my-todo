import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    const removeTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>task count: {todos.length}</h1>
            <TodoForm />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    tasks={todo.tasks}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
};

export default App;
