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

    return (
        <div>
            <input
                type="text"
                placeholder="enter task"
                value={value}
                onChange={handleChange}
            />
            <button onClick={addTodo}>add task</button>
        </div>
    );
};

export default TodoForm;
