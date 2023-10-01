import React, { useEffect, useState } from 'react';
import Meals from '../meal/Meals';
import NormaCalorie from '../meal/NormaCalorie';

const CaloriePage = () => {
    const [eatenCalorie, setEatenCalorie] = useState(0);

    useEffect(() => {
        loadEatenCalorieFromLocalStorage();
    }, []);

    const saveEatenCalorieToLocalStorage = (eatenCalorie) => {
        localStorage.setItem('eatenCalorie', eatenCalorie.toString());
    };

    const loadEatenCalorieFromLocalStorage = () => {
        const storedEatenCalorie = localStorage.getItem('eatenCalorie');
        if (storedEatenCalorie) {
            setEatenCalorie(Number(storedEatenCalorie));
        }
    };

    const changeEatenCalorie = (calorieCount) => {
        const sumEatenCalorie = eatenCalorie + calorieCount;
        setEatenCalorie(sumEatenCalorie);
        saveEatenCalorieToLocalStorage(sumEatenCalorie);
    };

    return (
        <div>
            <NormaCalorie eatenCalorie={eatenCalorie} />
            <Meals changeEatenCalorie={changeEatenCalorie} />
        </div>
    );
};

export default CaloriePage;
