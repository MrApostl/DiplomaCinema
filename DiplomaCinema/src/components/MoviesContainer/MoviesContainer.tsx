import { Box } from "@mui/material";
import { IMoviesContainerProps } from "./types";
import { MovieCard } from "./MovieCard";

export const MoviesContainer = ({ movies } : IMoviesContainerProps) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </Box>
    );
};
