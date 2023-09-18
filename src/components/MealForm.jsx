import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const MealForm = () => {
    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <TextField
                sx={{ width: '190px' }}
                id="outlined-basic"
                label="Enter food"
                variant="outlined"
                size="small"
            />
            <TextField
                sx={{ width: '125px' }}
                id="outlined-basic"
                label="Enter weight"
                variant="outlined"
                size="small"
            />
            <Button variant="outlined">add</Button>
        </Box>
    );
};

export default MealForm;
