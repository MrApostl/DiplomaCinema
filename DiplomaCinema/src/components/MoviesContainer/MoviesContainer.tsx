import { Box, Button, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from 'react-redux'
import { IMovieState } from "../../types";
import { useEffect, useState } from "react";
import { loadMovies } from "../../redux/action-creaters";

export const MoviesContainer = () => {
    const dispatch = useDispatch();
    const { movies, currentPage, totalResults, query } = useSelector((state: IMovieState) => state);

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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {movies.map((movie) => ( 
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button 
                    variant="contained" 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
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
                >
                    Следующая
                </Button>
            </Box>
        </Box>
    );
};
