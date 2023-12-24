import React from 'react';

import { TextField } from '@mui/material';

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
