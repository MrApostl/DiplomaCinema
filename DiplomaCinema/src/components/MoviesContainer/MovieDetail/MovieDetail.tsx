import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { loadMovieDetail } from '../../../redux/action-creaters';
import { IMovieState } from '../../../types';
import { Rating } from '../Rating';

export const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedMovie, error, loading } = useSelector((state: IMovieState) => state);

    useEffect(() => {
        dispatch(loadMovieDetail(!!id ? id : ''));
    }, [dispatch, id]);
    
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, px: { xs: 2, sm: 3, md: 4 } }}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, maxWidth: 800, width: '100%' }}>
                <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', md: 400 } }}
                    image={selectedMovie.Poster}
                    alt={selectedMovie.Title}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Rating value={!!selectedMovie.imdbRating ? + selectedMovie.imdbRating : 0} />
                    <Typography variant="h4" sx={{ mt: 2 }}>{selectedMovie.Title}</Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>{selectedMovie.Year}</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>{selectedMovie.Plot}</Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>Director: {selectedMovie.Director}</Typography>
                    <Typography variant="body2" sx={{ mt: 4 }}>
                        {!!selectedMovie.Genre ? selectedMovie.Genre.replace(/,\s*/g, ' • ') : ''}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};