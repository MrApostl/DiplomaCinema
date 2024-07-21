import { Box, RatingProps, Typography } from "@mui/material";

export const Rating = ({ value } : RatingProps) => {
    return (
        <Box
            sx={{
                backgroundColor: '#61dafb',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 1,
            }}
        >
            <Typography variant="body1">{value}</Typography>
        </Box>
    );
};
