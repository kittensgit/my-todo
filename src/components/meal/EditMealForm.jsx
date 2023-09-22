import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const EditMealForm = ({ meal, updateMeal, toggleEdit }) => {
    const [value, setValue] = useState(meal.name);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSave = () => {
        updateMeal({ ...meal, name: value });
        toggleEdit();
    };

    return (
        <div>
            <TextField
                label="Enter task"
                variant="standard"
                value={value}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSave}>
                Save
            </Button>
        </div>
    );
};

export default EditMealForm;
