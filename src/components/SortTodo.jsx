import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortTodo = ({ sortOrder, setSortOrder }) => {
    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };
    return (
        <FormControl>
            <InputLabel htmlFor="sortOrderSelect">Sort Order</InputLabel>
            <Select
                label="Sort Order"
                id="sortOrderSelect"
                value={sortOrder}
                onChange={handleSortOrderChange}
                size="small"
                sx={{ width: '132px' }}
            >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortTodo;
