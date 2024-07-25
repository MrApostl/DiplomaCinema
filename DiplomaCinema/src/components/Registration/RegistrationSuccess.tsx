import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

export const RegistrationSuccess = () => {
    const navigate = useNavigate();
    
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container
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
                Успешно!
            </Typography>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    padding: '20px',
                }}
            >
                <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black' }}>
                    Электронная почта подтверждена.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black' }}>
                    Вы прошли регистрацию
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleGoHome}
                >
                    На главную
                </Button>
            </Box>
        </Container>
    );
};