import { IMovieOptions, IMovieState } from "../../types";
import { SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS, SET_QUERY, LOAD_MOVIE_DETAIL_ERROR, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIE_DETAIL, LOAD_MOVIES_ERROR, LOAD_MOVIES, LOAD_MOVIES_SUCCESS } from "../action-types";

const initialState: IMovieState = {
    movies: [] as IMovieOptions[],
    error: '',
    loading: false,
    selectedMovie: {} as IMovieOptions,
    currentPage: 1,
    totalResults: 0,
    query: '',
};

export const movieReducer = (state = initialState, action: any)  => {
    switch (action.type) {
        case SET_MOVIES:
            const movies = !!action.movies ? action.movies : [] as IMovieOptions[]; 
            return {
                ...state,
                movies,
                error: '',
            };

        case SET_CURRENT_PAGE:{
            return({
                    ...state,
                    currentPage: !!action.currentPage ? +action.currentPage : 1,
                })
            };

        case SET_TOTAL_RESULTS:{
            return({
                    ...state,
                    totalResults: !!action.totalResults ? +action.totalResults : 1, 
                })
            };

        case SET_QUERY:{
            return({
                    ...state,
                    query: !!action.query ? action.query : '',
                });
            };

        case LOAD_MOVIES:
            return {
                ...state,
                error: '',
                loading: true,
            };

        case LOAD_MOVIES_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
            };
            
        case LOAD_MOVIE_DETAIL:
            return {
                ...state,
                error: '',
                loading: true,
            };

        case LOAD_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                selectedMovie: action.movie,
                loading: false,
            };

        case LOAD_MOVIE_DETAIL_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        case LOAD_MOVIES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
            
        default:
            return state;
    }
};
