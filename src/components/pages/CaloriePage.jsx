import React, { useEffect, useState } from 'react';
import Meals from '../meal/meals/Meals';
import NormaCalorie from '../meal/normaCalorie/NormaCalorie';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const CaloriePage = () => {
    const [eatenCalorie, setEatenCalorie] = useState(0);
    const [eatenProtein, setEatenProtein] = useState(0);
    const [eatenFats, setEatenFats] = useState(0);
    const [eatenCarbs, setEatenCarbs] = useState(0);

    useEffect(() => {
        loadEatenCalorieAndMacroFromLocalStorage();
    }, []);

    const saveEatenCalorieToLocalStorage = (eatenCalorie) => {
        localStorage.setItem('eatenCalorie', eatenCalorie.toString());
    };
    const saveEatenProteinToLocalStorage = (eatenProtein) => {
        localStorage.setItem('eatenProtein', eatenProtein.toString());
    };
    const saveEatenFatsToLocalStorage = (eatenFats) => {
        localStorage.setItem('eatenFats', eatenFats.toString());
    };
    const saveEatenCarbsToLocalStorage = (eatenCarbs) => {
        localStorage.setItem('eatenCarbs', eatenCarbs.toString());
    };

    const loadEatenCalorieAndMacroFromLocalStorage = () => {
        const storedEatenCalorie = localStorage.getItem('eatenCalorie');
        const storedEatenProtein = localStorage.getItem('eatenProtein');
        const storedEatenFats = localStorage.getItem('eatenFats');
        const storedEatenCarbs = localStorage.getItem('eatenCarbs');
        if (
            storedEatenCalorie &&
            storedEatenProtein &&
            storedEatenFats &&
            storedEatenCarbs
        ) {
            setEatenCalorie(Number(storedEatenCalorie));
            setEatenProtein(Number(storedEatenProtein));
            setEatenFats(Number(storedEatenFats));
            setEatenCarbs(Number(storedEatenCarbs));
        }
    };

    const changeEatenCalorie = (calorieCount) => {
        const sumEatenCalorie = eatenCalorie + calorieCount;
        setEatenCalorie(sumEatenCalorie);
        saveEatenCalorieToLocalStorage(sumEatenCalorie);
    };

    const changeEatenProtein = (proteinCount) => {
        const sumEatenProtein = eatenProtein + proteinCount;
        setEatenProtein(sumEatenProtein);
        saveEatenProteinToLocalStorage(sumEatenProtein);
    };
    const changeEatenFats = (fatsCount) => {
        const sumEatenFats = eatenFats + fatsCount;
        setEatenFats(sumEatenFats);
        saveEatenFatsToLocalStorage(sumEatenFats);
    };
    const changeEatenCarbs = (carbsCount) => {
        const sumEatenCarbs = eatenCarbs + carbsCount;
        setEatenCarbs(sumEatenCarbs);
        saveEatenCarbsToLocalStorage(sumEatenCarbs);
    };

    const data = {
        labels: ['Protein', 'Fats', 'Carbs'],
        datasets: [
            {
                label: 'Count',
                data: [eatenProtein, eatenFats, eatenCarbs],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <NormaCalorie
                eatenCalorie={eatenCalorie}
                eatenProtein={eatenProtein}
                eatenFats={eatenFats}
                eatenCarbs={eatenCarbs}
            />

            {eatenProtein && eatenFats && eatenCarbs ? (
                <Box width={'300px'} margin={'0 auto'} mb={3}>
                    <Pie data={data} />
                </Box>
            ) : (
                <></>
            )}
            <Meals
                changeEatenCalorie={changeEatenCalorie}
                changeEatenProtein={changeEatenProtein}
                changeEatenFats={changeEatenFats}
                changeEatenCarbs={changeEatenCarbs}
            />
        </div>
    );
};

export default CaloriePage;
