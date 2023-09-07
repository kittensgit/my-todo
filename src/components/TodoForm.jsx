import React, { useState } from 'react';

const TodoForm = ({ addTask, clearTask }) => {
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
            <button style={{ marginRight: '20px' }} onClick={addTodo}>
                add task
            </button>
            <button
                onClick={() => {
                    clearTask();
                }}
            >
                clear all done task
            </button>
        </div>
    );
};

export default TodoForm;
