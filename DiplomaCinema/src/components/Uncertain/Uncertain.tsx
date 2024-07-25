import { IUncertainProps } from './types.ts';
import { Box } from '@mui/material';

export const Uncertain = ({ text }: IUncertainProps) =>{
    return(
        <Box sx={{ width: '100%', mt: 2 }}>
            {text}
        </Box>
    )
}