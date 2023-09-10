import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const SelectPriority = ({ priority, changePriority }) => {
    return (
        <TextField
            sx={{ marginLeft: '10px', width: '110px' }}
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
    );
};

export default SelectPriority;
