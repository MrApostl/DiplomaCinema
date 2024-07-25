import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { IMenuProps } from './types';

export const Menu = ({ items }: IMenuProps) => {
    const getPath = (text: string) => {
        switch (text) {
        case 'Главная':
            return '/';
        case 'Фильмы':
            return '/movies';
        case 'Любимые':
            return '/favorites';
        case 'Настройки':
            return '/settings';
        default:
            return '/';
        }
    };

    return (
        <Box 
        sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center'
        }}
        >
        {items.map((item, index) => (
            <MenuItem
                key={index}
                component={Link}
                to={getPath(item)}
                sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'background-color 0.3s, transform 0.3s',
                    '&:hover': {
                        backgroundColor: 'primary.light',
                        transform: 'scale(1.05)',
                    },
                    '&:active': {
                        backgroundColor: 'primary.dark',
                        transform: 'scale(0.95)',
                    },
                    borderRadius: 1, 
                    padding: 1, 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '100px', 
                    textAlign: 'center',
                    fontWeight: 'bold', 
                }}
            >
            {item}
            </MenuItem>
        ))}
        </Box>
    );
}