export interface IMovieOptions {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre?: string;
    imdbRating?: string;
    Plot?: string;
    Director?: string;
    Response?: string;
}

export interface IMovieState {
    movies: IMovieOptions[];
    selectedMovie: IMovieOptions;
    currentPage: number;
    totalResults: number;
    query: string;
    error: string;
}

export interface IMoviesResponse {
    Search: IMovieOptions[];
    totalResults: string;
    Response?: string;
}