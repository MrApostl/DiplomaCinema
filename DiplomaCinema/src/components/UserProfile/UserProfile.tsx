import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { getUserSlice } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/action-creaters";

export const UserProfile = () => {
    const {username} = useSelector((state: IStoreState) => state.users.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userText = !!username ? username : 'Noy Name';

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#282c34', padding: '10px', borderRadius: '8px' }}>
            <Avatar sx={{ bgcolor: '#8A5FF9', marginRight: '10px' }}>{getUserSlice(userText)}</Avatar>
            <Typography sx={{ color: 'white', fontWeight: 'bold', mr: 2, }}>{userText}</Typography>

            <IconButton onClick={handleLogout} sx={{ color: 'white', marginRight: '10px' }}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
};