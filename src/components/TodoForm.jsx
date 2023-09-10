import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import SelectPriority from './SelectPriority';

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
            <SelectPriority
                value={priority}
                onChange={(e) => changePriority(e.target.value)}
            />
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
