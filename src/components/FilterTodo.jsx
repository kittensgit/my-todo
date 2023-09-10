import React from 'react';
import SearchTodo from './SearchTodo';
import { Box, Button } from '@mui/material';

const FilterTodo = ({ setFilter, searchText, setSearchText }) => {
    return (
        <Box mt={2} sx={{ display: 'flex', gap: '10px' }}>
            <Button
                variant="contained"
                onClick={() => {
                    setFilter('all');
                }}
            >
                All
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    setFilter('completed');
                }}
            >
                Completed
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    setFilter('uncompleted');
                }}
            >
                Uncompleted
            </Button>
            <SearchTodo searchText={searchText} setSearchText={setSearchText} />
        </Box>
    );
};

export default FilterTodo;
