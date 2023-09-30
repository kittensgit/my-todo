import React, { useState } from 'react';
import Meals from '../meal/Meals';
import NormaCalorie from '../meal/NormaCalorie';

const CaloriePage = () => {
    const [eatenCalorie, setEatenCalorie] = useState(0);

    const changeEatenCalorie = (calorieCount) => {
        setEatenCalorie(eatenCalorie + calorieCount);
    };

    return (
        <div>
            <NormaCalorie eatenCalorie={eatenCalorie} />
            <Meals changeEatenCalorie={changeEatenCalorie} />
        </div>
    );
};

export default CaloriePage;
