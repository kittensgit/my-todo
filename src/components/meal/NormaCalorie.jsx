import {
    Box,
    Button,
    Checkbox,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const NormaCalorie = ({
    eatenCalorie,
    eatenProtein,
    eatenFats,
    eatenCarbs,
    isShowChart,
    toggleShowChart,
}) => {
    const [normaCalorie, setNormaCalorie] = useState(0);
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
    }, [
        isMenChecked,
        isWomenChecked,
        age,
        weight,
        height,
        selectActivity,
        normaCalorie,
    ]);

    // Функция для сохранения значений в локальном хранилище
    const saveToLocalStorage = () => {
        localStorage.setItem('isMenChecked', JSON.stringify(isMenChecked));
        localStorage.setItem('isWomenChecked', JSON.stringify(isWomenChecked));
        localStorage.setItem('age', age);
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('selectActivity', selectActivity);
        localStorage.setItem('normaCalorie', normaCalorie);
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
        setNormaCalorie(Number(localStorage.getItem('normaCalorie')) || 0);
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

        setNormaCalorie(maleBMR + femaleBMR);
    };

    const handleClear = () => {
        setIsMenChecked(false);
        setIsWomenChecked(false);
        setAge('');
        setWeight('');
        setHeight('');
        setSelectActivity('');
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
                    marginBottom: '30px',
                }}
                variant="h2"
            >
                Calculate your daily calorie intake:
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5">Choose gender:</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={isMenChecked}
                            onChange={handleChangeMen}
                        />
                        <Typography variant="h6">Men</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={isWomenChecked}
                            onChange={handleChangeWomen}
                        />
                        <Typography variant="h6">Women</Typography>
                    </Box>
                </Box>
                <TextField
                    sx={{ width: '100px' }}
                    label="Enter age"
                    variant="outlined"
                    size="small"
                    value={age}
                    onChange={handleChangeAge}
                />
                <TextField
                    sx={{ width: '100px' }}
                    label="Enter weight"
                    variant="outlined"
                    size="small"
                    value={weight}
                    onChange={handleChangeWeight}
                />
                <TextField
                    sx={{ width: '100px' }}
                    label="Enter height"
                    variant="outlined"
                    size="small"
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
                <Button variant="contained" onClick={handleClick}>
                    Calculate
                </Button>
                <Button variant="outlined" onClick={handleClear}>
                    Clear all
                </Button>
            </Box>
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
            <Button
                onClick={() => {
                    toggleShowChart();
                }}
                sx={{ marginBottom: '20px' }}
                variant="outlined"
            >
                {isShowChart
                    ? 'hide chart of macronutrients eaten'
                    : 'show chart of macronutrients eaten'}
            </Button>
        </Box>
    );
};

export default NormaCalorie;
