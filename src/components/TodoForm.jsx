import React, { useState } from 'react';

const TodoForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                value={value}
                onChange={handleChange}
                placeholder="Enter task"
            />
            <button>Add task</button>
        </div>
    );
};

export default TodoForm;
