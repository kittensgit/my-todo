import { Box, Typography } from '@mui/material';
import React from 'react';

const Breakfast = () => {
    const food = [
        {
            name: 'soup',
            calorie: 66,
        },
        {
            name: 'cake',
            calorie: 344,
        },
        {
            name: 'salad',
            calorie: 159,
        },
    ];
    return (
        <Box mx={2} mt={2}>
            <Typography variant="h2">Breakfast</Typography>
            <Box>
                {food.map((f) => (
                    <Typography
                        mt={2}
                        className="todo"
                        sx={{ border: '1px dashed #000' }}
                    >
                        {f.name}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Breakfast;
