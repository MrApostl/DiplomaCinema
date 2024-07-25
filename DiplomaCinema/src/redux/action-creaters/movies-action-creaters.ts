import { LOAD_MOVIE_DETAIL, LOAD_MOVIE_DETAIL_ERROR, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIES, LOAD_MOVIES_ERROR, LOAD_MOVIES_SUCCESS, SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS } from "../action-types";
import { IMovieOptions } from "../../types";

export const loadMovies = (page: number, query = '') =>({
    type: LOAD_MOVIES,
    payload: { page, query },
}) as const

export const loadMoviesSuccess = () => ({
    type: LOAD_MOVIES_SUCCESS,
}) as const

export const loadMoviesError = (error: string) => ({
    type: LOAD_MOVIES_ERROR,
    error,
}) as const

export const setMovies = (movies: IMovieOptions[]) =>({
    type: SET_MOVIES,
    movies,
}) as const

export const setTotalResults = (totalResults: string) =>({
    type: SET_TOTAL_RESULTS,
    totalResults,
}) as const

export const setCurrentPage = (currentPage: string) =>({
    type: SET_CURRENT_PAGE,
    currentPage,
}) as const

export const setQuery = (query: string) => ({
    type: 'SET_QUERY',
    query,
}) as const

export const loadMovieDetail = (id: string) => ({
    type: LOAD_MOVIE_DETAIL,
    id,
}) as const

export const loadMovieDetailSuccess = (movie: IMovieOptions) => ({
    type: LOAD_MOVIE_DETAIL_SUCCESS,
    movie,
}) as const

export const loadMovieDetailError = (error: string) => ({
    type: LOAD_MOVIE_DETAIL_ERROR,
    error,
});

