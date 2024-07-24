import { IMovieOptions, IMovieState } from "../../types";
import { SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS } from "../action-types";

const initialState: IMovieState = {
    movies: [] as IMovieOptions[],
    currentPage: 1,
    totalResults: 0,
};

const movieReducer = (state = initialState, action: any)  => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies,
            };

        case SET_CURRENT_PAGE:{
            return({
                    ...state,
                    currentPage: +action.currentPage,
                })
            };

        case SET_TOTAL_RESULTS:{
                return({
                    ...state,
                    totalResults: +action.totalResults, 
                })
            };
        default:
            return state;
    }
};

export default movieReducer;