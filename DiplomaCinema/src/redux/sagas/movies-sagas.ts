import { put, takeEvery } from "redux-saga/effects";
import { IMovieOptions, IMoviesResponse } from "../../types";
import { loadMovieDetailError, loadMovieDetailSuccess, loadMoviesError, setCurrentPage, setMovies, setQuery, setTotalResults } from "../action-creaters";
import { LOAD_MOVIE_DETAIL, LOAD_MOVIES } from "../action-types";
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