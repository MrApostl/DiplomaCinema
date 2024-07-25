import Typography from '@mui/material/Typography';
import { ILogoProps } from './types';

export const Logo = ({ text }: ILogoProps) =>{
    return(
        <Typography 
            variant="h4" 
            component="div" 
            sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}
        >
            {text}
        </Typography>
    )
}