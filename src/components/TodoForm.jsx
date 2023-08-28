import React, { useState } from 'react';

const TodoForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="enter task"
                value={value}
                onChange={handleChange}
            />
            <button>add task</button>
        </div>
    );
};

export default TodoForm;
