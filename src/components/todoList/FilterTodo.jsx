import React from 'react';
import SearchTodo from './SearchTodo';
import { Box, Button } from '@mui/material';
import SortTodo from './SortTodo';

const FilterTodo = ({
    setFilter,
    searchText,
    setSearchText,
    sortOrder,
    setSortOrder,
}) => {
    return (
        <Box
            mt={2}
            sx={{
                display: 'flex',
                gap: '10px',
                marginLeft: '20px',
                marginRight: '20px',
            }}
            className="filtertodo"
        >
            <Box className="buttonsfilter">
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
            </Box>
            <SearchTodo searchText={searchText} setSearchText={setSearchText} />

            <SortTodo sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </Box>
    );
};

export default FilterTodo;
