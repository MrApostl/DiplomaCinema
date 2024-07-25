import TextField from '@mui/material/TextField';
import { ISearchBarProps } from './types';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setQuery } from '../../redux/action-creaters';
import { useEffect, useState } from 'react';

export const SearchBar = ({ placeholder } : ISearchBarProps) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(setQuery(searchTerm));
            dispatch(setCurrentPage('1'));
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleSearchChange = (searchValue: string) => {
        setSearchTerm(searchValue);
    };
    
    return (
        <TextField
            variant='outlined'
            placeholder={placeholder}
            fullWidth
            onChange={(e) => handleSearchChange(e.target.value)}
            sx={{
                mt: 2,
                maxWidth: { xs: '100%', sm: 500 },
                input: { color: 'white' },
                fieldset: { borderColor: 'white' },
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
            }}
        />
    );
};
