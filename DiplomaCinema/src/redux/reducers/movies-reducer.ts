import { IMovieOptions, IMovieState } from "../../types";
import { SET_CURRENT_PAGE, SET_MOVIES, SET_TOTAL_RESULTS, SET_QUERY } from "../action-types";

const initialState: IMovieState = {
    movies: [] as IMovieOptions[],
    currentPage: 1,
    totalResults: 0,
    query: '',
};

const movieReducer = (state = initialState, action: any)  => {
    switch (action.type) {
        case SET_MOVIES:
            const movies = !!action.movies ? action.movies : [] as IMovieOptions[]; 
            return {
                ...state,
                movies,
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
            
        default:
            return state;
    }
};

export default movieReducer;