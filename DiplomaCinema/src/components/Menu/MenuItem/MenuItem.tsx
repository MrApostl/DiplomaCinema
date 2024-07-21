import { Typography } from "@mui/material";
import { IMenuItemProps } from "./types";

export const MenuItem = ({ text } : IMenuItemProps)  => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ cursor: 'pointer', '&:hover': { color: '#61dafb' } }}
        >
            {text}
        </Typography>
    );
};