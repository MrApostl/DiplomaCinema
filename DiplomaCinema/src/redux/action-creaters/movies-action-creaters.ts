import { put, takeEvery } from "redux-saga/effects";
import { LOAD_MOVIE_DETAIL, LOAD_MOVIE_DETAIL_ERROR, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIES, LOAD_MOVIES_ERROR, SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS } from "../action-types";
import { IMovieOptions, IMoviesResponse } from "../../types";

export const loadMovies = (page: number, query = '') =>({
    type: LOAD_MOVIES,
    payload: { page, query },
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

const API_KEY = 'b91ffaf5';

function* fetchLoadMovies(action: any) {
    try {
        const { page, query } = action.payload;

        const querySearchText = !!query ? `&s=${encodeURIComponent(query)}` : `&s=avengers`;

        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&page=${page}${querySearchText}`;
        const response: Response = yield fetch(url);
        const { Search, totalResults, Response } : IMoviesResponse = yield response.json();

        if (Response === 'False') {
            yield put(loadMoviesError("Не найдены фильмы"));
        } else {
            yield put(setMovies(Search));
            yield put(setTotalResults(totalResults));
            yield put(setCurrentPage(page));
            yield put(setQuery(query));
        }
    } catch (error) {
        yield put(loadMoviesError(`${error}`));
    }
}

function* fetchMovieDetail(action: any) {
    try {
        const url = `https://www.omdbapi.com/?i=${action.id}&apikey=${API_KEY}`;
        
        const response: Response = yield fetch(url);
        const data: IMovieOptions = yield response.json();

        if (data.Response === 'False') {
            yield put(loadMovieDetailError("Не удалось загрузить страницу"));
        } else {
            yield put(loadMovieDetailSuccess(data));
        }
    } catch (error) {
        yield put(loadMovieDetailError(`${error}`));
    }
}

export function* watcherMovies() {
    yield takeEvery(LOAD_MOVIES, fetchLoadMovies);
    yield takeEvery(LOAD_MOVIE_DETAIL, fetchMovieDetail);
}