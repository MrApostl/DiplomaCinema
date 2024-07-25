import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from 'react-redux'
import { IMovieState } from "../../types";
import { useEffect } from "react";
import { loadMovies } from "../../redux/action-creaters";

export const MoviesContainer = () => {
    const dispatch = useDispatch();
    const { movies, currentPage, totalResults, query, error, loading } = useSelector((state: IMovieState) => state);

    useEffect(() => {
        dispatch(loadMovies(currentPage, query));
    }, [currentPage, query]);

    const handlePageChange = (page: number) => {
        dispatch(loadMovies(page, query));
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalResults / 10)) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 7, px: 2 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 7, px: 2 }}>
                <Typography color="error" variant="h6">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                mt: 2, 
                px: { xs: 2, sm: 3, md: 4 } 
            }}
        >
            <Box 
                sx={{ 
                    display: 'grid', 
                    gap: 2, 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }, 
                    justifyItems: 'center' 
                }}
            >
                {movies.map((movie) => ( 
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </Box>
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mt: 2, 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    alignItems: 'center' 
                }}
            >
                <Button 
                    variant="contained" 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                    sx={{
                        '&.Mui-disabled': {
                            backgroundColor: '#2e060d', 
                            color: '#fff',
                        },
                    }}
                >
                    Предыдущая
                </Button>
                <Typography variant="h6">
                    Страница {currentPage} из {Math.ceil(totalResults / 10)}
                </Typography>
                <Button 
                    variant="contained" 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(totalResults / 10)}
                    sx={{
                        '&.Mui-disabled': {
                            backgroundColor: '#2e060d', 
                            color: '#fff',
                        },
                    }}
                >
                    Следующая
                </Button>
            </Box>
        </Box>
    );
};
