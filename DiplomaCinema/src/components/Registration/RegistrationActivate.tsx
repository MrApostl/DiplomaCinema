import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { confirmUser } from "../../redux/action-creaters";

export const RegistrationActivate = () => {
    const { uid, token } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (uid && token) {
            dispatch(confirmUser({ uid, token }));
        }
    }, [uid, token, dispatch]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                mt: 2
            }}
        >
            <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ color: 'black' }}>
                Идет активация аккаунта...
            </Typography>
            <Typography variant="body1" sx={{ color: 'black' }}>
                UID: {uid}
            </Typography>
            <Typography variant="body1" sx={{ color: 'black' }}>
                Token: {token}
            </Typography>
        </Box>
    );
};
