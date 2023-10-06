import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';

const CheckboxWithLabel = ({ checked, onChange, label }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={checked} onChange={onChange} />
            <Typography variant="h6">{label}</Typography>
        </Box>
    );
};

export default CheckboxWithLabel;
