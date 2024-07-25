import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, Link } from "@mui/material";
import { createUser } from "../../redux/action-creaters";
import { ISign } from "../../types";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signUpState, setSignUpState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (signUpState.password === signUpState.confirmPassword) {
            const userData: ISign = {
                username: signUpState.name,
                email: signUpState.email,
                password: signUpState.password
            };

            dispatch(createUser(userData));
            navigate('/');
        } else {
            alert("Пароли не совпадают");
            return;
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, p: 3, border: '1px solid grey', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{color: 'black'}}>
                    Создать аккаунт
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={signUpState.name}
                        onChange={(e) => setSignUpState({ ...signUpState, name: e.target.value })}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={signUpState.email}
                        onChange={(e) => setSignUpState({ ...signUpState, email: e.target.value })}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={signUpState.password}
                        onChange={(e) => setSignUpState({ ...signUpState, password: e.target.value })}
                        required
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={signUpState.confirmPassword}
                        onChange={(e) => setSignUpState({ ...signUpState, confirmPassword: e.target.value })}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Создать
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, color: 'black' }}>
                        Уже есть аккаунта? <Link href="/">Войти</Link>
                    </Typography>
                </form>
            </Box>
        </Container>
    );
};