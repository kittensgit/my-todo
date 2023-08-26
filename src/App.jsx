import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    const addTodo = (tasks) => {
        const newTodo = {
            id: uuidv4(),
            tasks,
            complete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo count: {todos.length}</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todo={todo}
                    tasks={todo.tasks}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default App;
