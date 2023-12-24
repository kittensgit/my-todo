import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

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
            <h2 className="title1">Calculate your daily calorie intake:</h2>
            <NormaCalorieForm
                saveBMRToNormaCalorie={saveBMRToNormaCalorie}
                clearNormaCalorie={clearNormaCalorie}
            />
            <h4 className="title2">
                Your calorie intake and the number of calories you have already
                eaten:
            </h4>
            <h1 className="title-calorie">
                {eatenCalorie}/{normaCalorie}
            </h1>
            <Box display={'flex'} justifyContent={'center'} gap={'20px'}>
                <h4 className="title-pfc">Protein: {eatenProtein}</h4>
                <h4 className="title-pfc">Fats: {eatenFats}</h4>
                <h4 className="title-pfc">Carbs: {eatenCarbs}</h4>
            </Box>
        </Box>
    );
};

export default NormaCalorie;
