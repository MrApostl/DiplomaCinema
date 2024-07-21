import Typography from '@mui/material/Typography';
import { ILogoProps } from './types';

export const Logo = ({ text }: ILogoProps) =>{
    return(
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            {text}
        </Typography>
    )
}