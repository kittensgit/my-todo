import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [todos, setTodos] = useState([
        { id: uuidv4(), tasks: 'go to store', complete: false },
        { id: uuidv4(), tasks: 'to make dinner', complete: false },
    ])

    const addTodo = (tasks) => {
        const newTodo = {
            id: uuidv4(),
            tasks: tasks,
            complete: false
        }
        setTodos([  newTodo, ...todos])
    }

    return (
        <div className='App'>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} tasks={todo.tasks} id={todo.id} />
            ))}
        </div>
    )
}

export default App