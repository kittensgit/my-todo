import React, { useEffect, useState } from 'react';

import { Box, Button, MenuItem, TextField } from '@mui/material';

import CheckboxWithLabel from './CheckboxWithLabel';
import TextFieldWithLabel from './TextFieldWithLabel';

const NormaCalorieForm = ({ saveBMRToNormaCalorie, clearNormaCalorie }) => {
    const [isMenChecked, setIsMenChecked] = useState(false);
    const [isWomenChecked, setIsWomenChecked] = useState(false);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectActivity, setSelectActivity] = useState('');

    // Вызываем загрузку из локального хранилища при монтировании компонента
    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    // Вызываем сохранение в локальное хранилище при изменении значений
    useEffect(() => {
        saveToLocalStorage();
    }, [isMenChecked, isWomenChecked, age, weight, height, selectActivity]);

    // Функция для сохранения значений в локальном хранилище
    const saveToLocalStorage = () => {
        localStorage.setItem('isMenChecked', JSON.stringify(isMenChecked));
        localStorage.setItem('isWomenChecked', JSON.stringify(isWomenChecked));
        localStorage.setItem('age', age);
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('selectActivity', selectActivity);
    };

    // Функция для загрузки значений из локального хранилища
    const loadFromLocalStorage = () => {
        setIsMenChecked(
            JSON.parse(localStorage.getItem('isMenChecked')) || false
        );
        setIsWomenChecked(
            JSON.parse(localStorage.getItem('isWomenChecked')) || false
        );
        setAge(localStorage.getItem('age') || '');
        setWeight(localStorage.getItem('weight') || '');
        setHeight(localStorage.getItem('height') || '');
        setSelectActivity(localStorage.getItem('selectActivity') || '');
    };

    const handleChangeMen = () => {
        if (!isWomenChecked) {
            setIsMenChecked(!isMenChecked);
        } else {
            setIsMenChecked(true);
            setIsWomenChecked(false);
        }
    };

    const handleChangeWomen = () => {
        if (!isMenChecked) {
            setIsWomenChecked(!isWomenChecked);
        } else {
            setIsWomenChecked(true);
            setIsMenChecked(false);
        }
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };
    const handleChangeWeight = (e) => {
        setWeight(e.target.value);
    };
    const handleChangeHeight = (e) => {
        setHeight(e.target.value);
    };

    const handleChangeActivity = (e) => {
        setSelectActivity(e.target.value);
    };

    const calculateBMR = (weight, height, age, selectActivity, isMale) => {
        let bmr = isMale
            ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
            : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

        switch (selectActivity) {
            case 'Passive lifestyle':
                bmr *= 1.2;
                break;
            case 'Light activity':
                bmr *= 1.375;
                break;
            case 'Moderate activity':
                bmr *= 1.55;
                break;
            case 'High activity':
                bmr *= 1.725;
                break;
            default:
                bmr *= 1.9;
        }

        return Math.round(bmr);
    };

    const handleClick = () => {
        let maleBMR = 0;
        let femaleBMR = 0;

        if (isMenChecked) {
            maleBMR = calculateBMR(weight, height, age, selectActivity, true);
        }

        if (isWomenChecked) {
            femaleBMR = calculateBMR(
                weight,
                height,
                age,
                selectActivity,
                false
            );
        }

        saveBMRToNormaCalorie(maleBMR + femaleBMR);
    };

    const handleClear = () => {
        setIsMenChecked(false);
        setIsWomenChecked(false);
        setAge('');
        setWeight('');
        setHeight('');
        setSelectActivity('');
        clearNormaCalorie(0);
    };

    return (
        <Box className="normaCalorie-form">
            <Box className="normaCalorie-checkboxes">
                <h5 className="title-gender">Choose gender:</h5>
                <Box display={'flex'}>
                    <CheckboxWithLabel
                        checked={isMenChecked}
                        onChange={handleChangeMen}
                        label={'Men'}
                    />
                    <CheckboxWithLabel
                        checked={isWomenChecked}
                        onChange={handleChangeWomen}
                        label={'Women'}
                    />
                </Box>
            </Box>
            <Box className="normaCalorie-fields">
                <TextFieldWithLabel
                    label="Enter age"
                    value={age}
                    onChange={handleChangeAge}
                />
                <TextFieldWithLabel
                    label="Enter weight"
                    value={weight}
                    onChange={handleChangeWeight}
                />
                <TextFieldWithLabel
                    label="Enter height"
                    value={height}
                    onChange={handleChangeHeight}
                />
                <TextField
                    sx={{ width: '200px' }}
                    select
                    label="Physical activity"
                    size="small"
                    value={selectActivity}
                    onChange={handleChangeActivity}
                >
                    <MenuItem value="Passive lifestyle">
                        Passive lifestyle
                    </MenuItem>
                    <MenuItem value="Light activity">Light activity</MenuItem>
                    <MenuItem value="Moderate activity">
                        Moderate activity
                    </MenuItem>
                    <MenuItem value="High activity">High activity</MenuItem>
                    <MenuItem value="Very high activity">
                        Very high activity
                    </MenuItem>
                </TextField>
            </Box>

            <Box display={'flex'} gap={'10px'}>
                <Button variant="contained" onClick={handleClick}>
                    Calculate
                </Button>
                <Button variant="outlined" onClick={handleClear}>
                    Clear all
                </Button>
            </Box>
        </Box>
    );
};

export default NormaCalorieForm;
