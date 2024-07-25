import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button, Link, Paper } from '@mui/material';
import { createJwt } from '../../redux/action-creaters/users-action-creaters';
import { ISign } from '../../types';

export const SignIn = () => {
    const dispatch = useDispatch();

    const [signInState, setSignInState] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const userData: ISign = { email: signInState.email, password: signInState.password };
        dispatch(createJwt(userData));
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={signInState.email}
                        onChange={(e) => setSignInState({ ...signInState, email: e.target.value })}
                    />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={signInState.password}
                        onChange={(e) => setSignInState({ ...signInState, password: e.target.value })}
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Link href="#" variant="body2">
                        Forgot Password?
                    </Link>
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign In
                </Button>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="body2">
                        Don't have an account? <Link href="#">Sign Up</Link>
                    </Typography>
                </Box>
            </form>
        </Paper>
    );
};