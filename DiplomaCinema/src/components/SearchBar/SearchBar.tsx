import TextField from '@mui/material/TextField';
import { ISearchBarProps } from './types';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setQuery } from '../../redux/action-creaters';

export const SearchBar = ({ placeholder } : ISearchBarProps) => {
    const dispatch = useDispatch();

    const handleSearchChange = (searchValue: string) => {
        dispatch(setQuery(searchValue));
        dispatch(setCurrentPage("1"));
    };
    
    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            fullWidth
            onChange={(e) => handleSearchChange(e.target.value)}
            sx={{
                mt: 2,
                maxWidth: 500,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
                '& .MuiInputBase-input': {
                    color: 'white', 
                },
            }}
        />
    );
};
