export interface IMovieOptions {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre?: string[];
    imdbRating?: string;
}

export interface IMovieState {
    movies: IMovieOptions[];
    currentPage: number;
    totalResults: number;
    query: string;
}

export interface IMoviesResponse {
    Search: IMovieOptions[],
    totalResults: string,
}