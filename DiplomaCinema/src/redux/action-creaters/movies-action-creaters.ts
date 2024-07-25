import { put, takeEvery } from "redux-saga/effects";
import { LOAD_MOVIE_DETAIL, LOAD_MOVIE_DETAIL_ERROR, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIES, SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS } from "../action-types";
import { IMovieOptions, IMoviesResponse } from "../../types";

export const loadMovies = (page: number, query = '') =>({
    type: LOAD_MOVIES,
    payload: { page, query },
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
});

export const loadMovieDetailSuccess = (movie: IMovieOptions) => ({
    type: LOAD_MOVIE_DETAIL_SUCCESS,
    movie,
});

export const loadMovieDetailError = (error: string) => ({
    type: LOAD_MOVIE_DETAIL_ERROR,
    error,
});

const API_KEY = 'b91ffaf5';

function* fetchLoadMovies(action: any) {
    const { page, query } = action.payload;

    const querySearchText = !!query ? `&s=${query}` : ``;

    const url = `http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}&page=${page}${querySearchText}`;
    const response: Response = yield fetch(url);
    const { Search, totalResults } : IMoviesResponse = yield response.json();

    yield put(setMovies(Search));
    yield put(setTotalResults(totalResults));
    yield put(setCurrentPage(page));
    yield put(setQuery(query));
}

function* fetchMovieDetail(action: any) {
    try {
        const url = `https://www.omdbapi.com/?i=${action.id}&apikey=${API_KEY}`;
        
        const response: Response = yield fetch(url);
        const data: IMovieOptions = yield response.json();

        if (response.ok) {
            yield put(loadMovieDetailSuccess(data));
        } else {
            yield put(loadMovieDetailError("Не удалось загрузить страницу"));
        }
    } catch (error) {
        yield put(loadMovieDetailError(`${error}`));
    }
}

export function* watcherMovies() {
    yield takeEvery(LOAD_MOVIES, fetchLoadMovies);
    yield takeEvery(LOAD_MOVIE_DETAIL, fetchMovieDetail);
}