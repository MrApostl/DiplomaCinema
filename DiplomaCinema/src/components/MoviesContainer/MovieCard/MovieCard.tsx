import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { IMovieCardProps } from "./types";

export const MovieCard = ({ movie }: IMovieCardProps) => {
    return (
        <Card sx={{ width: 200, boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={movie.Poster}
                alt={movie.Title}
                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
            />
            <CardContent sx={{ padding: 2 }}>
                {/* <Rating value={+movie.imdbRating} /> */}
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem' }}
                >
                    {movie.Title}
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 0.5 }}
                >
                    {movie.Year}
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary"
                >
                    {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {!!movie.Genre ? movie.Genre.join(' • ') : ''}
                </Typography> */}
            </CardContent>
        </Card>
    );
};