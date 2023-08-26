import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    return (
        <div className="App">
            <h1>Todo count: {todos.length}</h1>
            <TodoForm />
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} tasks={todo.tasks} />
            ))}
        </div>
    );
};

export default App;
