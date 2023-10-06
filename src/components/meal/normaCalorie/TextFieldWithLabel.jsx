import { TextField } from '@mui/material';
import React from 'react';

const TextFieldWithLabel = ({ label, value, onChange }) => {
    return (
        <TextField
            sx={{ width: '130px' }}
            label={label}
            variant="outlined"
            size="small"
            value={value}
            onChange={onChange}
        />
    );
};

export default TextFieldWithLabel;
