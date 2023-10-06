import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NormaCalorieForm from './NormaCalorieForm';

const NormaCalorie = ({
    eatenCalorie,
    eatenProtein,
    eatenFats,
    eatenCarbs,
}) => {
    const [normaCalorie, setNormaCalorie] = useState(0);

    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    useEffect(() => {
        saveToLocalStorage();
    }, [normaCalorie]);

    const saveToLocalStorage = () => {
        localStorage.setItem('normaCalorie', normaCalorie);
    };

    const loadFromLocalStorage = () => {
        setNormaCalorie(Number(localStorage.getItem('normaCalorie')) || 0);
    };

    const saveBMRToNormaCalorie = (bmr) => {
        setNormaCalorie(bmr);
    };

    const clearNormaCalorie = () => {
        setNormaCalorie(0);
    };

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDirection={'column'}
            mx={3}
        >
            <Typography
                sx={{
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
                variant="h2"
            >
                Calculate your daily calorie intake:
            </Typography>
            <NormaCalorieForm
                saveBMRToNormaCalorie={saveBMRToNormaCalorie}
                clearNormaCalorie={clearNormaCalorie}
            />
            <Typography
                sx={{
                    marginTop: '20px',
                    textAlign: 'center',
                }}
                variant="h4"
            >
                Your calorie intake and the number of calories you have already
                eaten:
            </Typography>
            <Typography
                sx={{
                    marginBottom: '10px',
                }}
                variant="h1"
            >
                {eatenCalorie}/{normaCalorie}
            </Typography>
            <Box display={'flex'} justifyContent={'center'} gap={'20px'}>
                <Typography variant="h4" mb={3}>
                    Protein: {eatenProtein}
                </Typography>
                <Typography variant="h4" mb={3}>
                    Fats: {eatenFats}
                </Typography>
                <Typography variant="h4" mb={3}>
                    Carbs: {eatenCarbs}
                </Typography>
            </Box>
        </Box>
    );
};

export default NormaCalorie;
