export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre?: string;
    imdbRating?: string;
    Plot?: string;
    Director?: string;
}

export interface IMoviesContainerProps {
    movies: IMovie[];
}