import React from 'react';

import { Box, Checkbox } from '@mui/material';

const CheckboxWithLabel = ({ checked, onChange, label }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={checked} onChange={onChange} />
            <h6 className="subtitle-gender">{label}</h6>
        </Box>
    );
};

export default CheckboxWithLabel;
