import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';

const CheckboxWithLabel = ({ checked, onChange, label }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={checked} onChange={onChange} />
            <h6 className="subtitle-gender">{label}</h6>
        </Box>
    );
};

export default CheckboxWithLabel;
