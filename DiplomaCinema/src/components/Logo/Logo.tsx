import Typography from '@mui/material/Typography';
import { ILogoProps } from './types';
import { Box } from '@mui/material';

export const Logo = ({ text }: ILogoProps) =>{
    const halfIndex = Math.ceil(text.length / 2);
    const firstHalf = text.substring(0, halfIndex);
    const secondHalf = text.substring(halfIndex);

    return(
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'start',
                mr: 2,
            }}
        >
            <Typography 
                variant="h4" 
                component="div" 
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    mr: 2,
                }}
            >
                <Box component="span" sx={{ color: 'primary.main' }}>
                    {firstHalf}
                </Box>
                <Box component="span" sx={{ color: 'secondary.main' }}>
                    {secondHalf}
                </Box>
            </Typography>
        </Box>
    )
}