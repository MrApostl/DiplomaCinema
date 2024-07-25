import { Avatar, Box, Typography } from "@mui/material";
import { getUserSlice } from "../../helpers";
import { useSelector } from "react-redux";
import { IStoreState } from "../../types";

export const UserProfile = () => {
    const {username} = useSelector((state: IStoreState) => state.users.user)

    const userText = !!username ? username : 'Noy Name';

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#282c34', padding: '10px', borderRadius: '8px' }}>
            <Avatar sx={{ bgcolor: '#8A5FF9', marginRight: '10px' }}>{getUserSlice(userText)}</Avatar>
            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{userText}</Typography>
        </Box>
    );
};