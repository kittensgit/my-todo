import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <input
                value={value}
                onChange={handleChange}
                placeholder="Enter task"
            />
            <button onClick={handleAdd}>Add task</button>
        </div>
    );
};

export default TodoForm;
