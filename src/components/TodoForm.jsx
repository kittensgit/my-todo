import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addTodo = () => {
        addTask(value);
        setValue('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div>
            <input
                className="form"
                type="text"
                placeholder="enter task"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button onClick={addTodo}>Add task</button>
        </div>
    );
};

export default TodoForm;
