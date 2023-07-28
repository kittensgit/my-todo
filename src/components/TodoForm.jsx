import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    const addTask = () => {
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="enter task..."
                value={value}
                onChange={handleChangeValue}
            />
            <button onClick={addTask}>add</button>
        </div>
    );
};

export default TodoForm;
