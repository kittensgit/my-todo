import React from 'react';

import { TextField, MenuItem, Box } from '@mui/material';

const SelectPriority = ({ value, onChange }) => {
    const priorities = [
        { value: 'high', label: 'High', color: '#ff2424' },
        { value: 'medium', label: 'Medium', color: '#f3f320' },
        { value: 'easy', label: 'Easy', color: '#2fbe2f' },
    ];

    return (
        <TextField
            sx={{ marginLeft: '10px', width: '150px' }}
            select
            label="Priority"
            value={value}
            onChange={onChange}
            size="small"
        >
            {priorities.map((priority) => (
                <MenuItem key={priority.value} value={priority.value}>
                    <Box display="flex" alignItems="center">
                        <div
                            style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: priority.color,
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                        />
                        {priority.label}
                    </Box>
                </MenuItem>
            ))}
        </TextField>
    );
};

export default SelectPriority;
