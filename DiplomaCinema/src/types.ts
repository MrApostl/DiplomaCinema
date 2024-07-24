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
}

export interface IMoviesResponse {
    Search: IMovieOptions[],
    totalResults: string,
}