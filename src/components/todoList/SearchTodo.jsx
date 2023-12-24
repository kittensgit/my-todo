import React from 'react';

import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchTodo = ({ searchText, setSearchText }) => {
    return (
        <TextField
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            size="small"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
        />
    );
};

export default SearchTodo;
