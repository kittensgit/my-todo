import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';

import SelectPriority from './SelectPriority';

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
            <SelectPriority
                value={todo.priority}
                onChange={(e) => {
                    updateTask({ ...todo, priority: e.target.value });
                }}
            />
            <Button onClick={handleSave} variant="contained">
                save
            </Button>
        </div>
    );
};

export default EditTodoForm;
