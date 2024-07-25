import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

export const RegistrationConfirm = () => {
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
                backgroundColor: '#34282a'
            }}
        >
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Подтверждение регистрации
            </Typography>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    mt: 2
                }}
            >
                <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black' }}>
                    Пожалуйста, активируйте свою учетную запись с помощью ссылки активации на электронной <span style={{ fontWeight: 'bold' }}>почте</span>.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black' }}>
                    Пожалуйста, проверьте свою электронную почту
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