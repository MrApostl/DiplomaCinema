import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IMovieCardProps } from "./types";
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }: IMovieCardProps) => {
    return (
        <Card 
            sx={{
                width: { xs: '100%', sm: 250, md: 200 },
                boxShadow: 3,
                borderRadius: 2,
                textDecoration: 'none',
                '&:hover': {
                    boxShadow: 6,
                }
            }}
            component={Link} 
            to={`/movies/${movie.imdbID}`}
            >
            <CardMedia
                sx={{ height: { xs: 400, sm: 350, md: 300 }, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                component="img"
                height="300"
                image={movie.Poster}
                alt={movie.Title}
            />
            <CardContent sx={{ padding: 2 }}>
                
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.2rem', md: '1.1rem' } }}
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
            </CardContent>
        </Card>
    );
};