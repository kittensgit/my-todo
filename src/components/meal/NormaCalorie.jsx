import {
    Box,
    Button,
    Checkbox,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';

const NormaCalorie = () => {
    const [normaCalorie, setNormaCalorie] = useState(0);
    const [isMenChecked, setIsMenChecked] = useState(false);
    const [isWomenChecked, setIsWomenChecked] = useState(false);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectActivity, setSelectActivity] = useState('');

    const handleChangeMen = () => {
        setIsMenChecked(!isMenChecked);
    };
    const handleChangeWomen = () => {
        setIsWomenChecked(!isWomenChecked);
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

    return (
        <Box mx={3}>
            <Typography
                sx={{
                    marginLeft: '40px',
                    marginTop: '20px',
                    marginBottom: '10px',
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
                    sx={{ width: '150px' }}
                    label="Enter age"
                    variant="outlined"
                    size="small"
                    value={age}
                    onChange={handleChangeAge}
                />
                <TextField
                    sx={{ width: '150px' }}
                    label="Enter weight"
                    variant="outlined"
                    size="small"
                    value={weight}
                    onChange={handleChangeWeight}
                />
                <TextField
                    sx={{ width: '150px' }}
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
            </Box>
            <Typography
                sx={{
                    marginTop: '20px',
                    marginBottom: '10px',
                    textAlign: 'center',
                }}
                variant="h3"
            >
                Your result:
                <Typography variant="h1">0/{normaCalorie}</Typography>
            </Typography>
        </Box>
    );
};

export default NormaCalorie;
