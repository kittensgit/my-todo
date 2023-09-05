import React, { useState } from 'react';

const EditTodoForm = ({ todo, updateTask, toggleEdit }) => {
    const [value, setValue] = useState(todo.tasks);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSave = () => {
        updateTask({ ...todo, tasks: value });
        toggleEdit();
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    const handleBlur = () => {
        handleSave();
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                onBlur={handleBlur}
            />
            <button onClick={handleSave}>save</button>
        </div>
    );
};

export default EditTodoForm;
