import { Button, TextField } from '@mui/material';
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
        <div className="editform">
            <TextField
                id="standard-basic"
                label="Enter task"
                variant="standard"
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                onBlur={handleBlur}
            />
            <Button onClick={handleSave} variant="contained">
                save
            </Button>
        </div>
    );
};

export default EditTodoForm;
