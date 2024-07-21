import TextField from '@mui/material/TextField';
import { ISearchBarProps } from './types';

export const SearchBar = ({ placeholder } : ISearchBarProps) => {
    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            fullWidth
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
