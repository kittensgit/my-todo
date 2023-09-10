import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const TodoForm = ({ addTask, clearTask, priority, changePriority }) => {
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
        <div className="todoform">
            <TextField
                size="small"
                id="outlined-basic"
                label="Enter task"
                variant="outlined"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <TextField
                sx={{ marginLeft: '10px' }}
                select
                label="Priority"
                value={priority}
                onChange={(e) => {
                    changePriority(e.target.value);
                }}
                size="small"
            >
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="ease">Ease</MenuItem>
            </TextField>
            <Button
                style={{ marginRight: '20px', marginLeft: '20px' }}
                onClick={addTodo}
                variant="contained"
            >
                add task
            </Button>
            <Button
                onClick={() => {
                    clearTask();
                }}
                variant="outlined"
            >
                {' '}
                clear all done task
            </Button>
        </div>
    );
};

export default TodoForm;
