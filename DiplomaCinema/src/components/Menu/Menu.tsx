import Box from '@mui/material/Box';
import { IMenuProps } from './types';
import { MenuItem } from './MenuItem';

export const Menu = ({ items } : IMenuProps) =>{
    return (
        <div>
            <Box 
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center'
                }}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} text={item} />
                ))}
            </Box>
        </div>
    )
}