import { put, takeEvery } from "redux-saga/effects";
import { LOAD_MOVIES, SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS } from "../action-types";
import { IMovieOptions, IMoviesResponse } from "../../types";

export const loadMovies = (page: number) =>({
    type: LOAD_MOVIES,
    payload: page,
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

const API_KEY = 'b91ffaf5';

function* fetchLoadMovies(action: any) {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}&page=${action.payload}`;
    const response: Response = yield fetch(url);
    const { Search, totalResults } : IMoviesResponse = yield response.json();
    
    yield put(setMovies(Search));
    yield put(setTotalResults(totalResults));
    yield put(setCurrentPage(action.payload));
}

export function* watcherMovies() {
    yield takeEvery(LOAD_MOVIES, fetchLoadMovies);
}