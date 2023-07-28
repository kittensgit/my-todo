import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ]);

    const addTodo = (tasks) => {
        const newTodo = {
            id: uuidv4(),
            tasks: tasks,
            complete: false,
        };
        setTodos([newTodo, ...todos]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        let newTodo = [...todos].filter((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(newTodo);
    };

    return (
        <div className="App">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    complete={todo.complete}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    tasks={todo.tasks}
                    id={todo.id}
                />
            ))}
        </div>
    );
};

export default App;
