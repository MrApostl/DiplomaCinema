import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IMovieCardProps } from "./types";
import { Rating } from "../Rating";

export const MovieCard = ({ movie } : IMovieCardProps) => {
    return (
        <Card sx={{ width: 200 }}>
            <CardMedia
                component="img"
                height="300"
                image={movie.image}
                alt={movie.title}
            />
            <CardContent>
                <Rating value={movie.rating} />
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.genres.join(' • ')}
                </Typography>
            </CardContent>
        </Card>
    );
};
