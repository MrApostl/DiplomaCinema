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

export interface IStoreState {
    movies: IMovieState;
    users: IUserState;
}

export interface IUserState {
    user: IUser;
}

export interface IUser {
    username: string;
}

export interface IActivateOptions {
    uid: string | undefined;
    token: string | undefined;
}

export interface IMovieState {
    movies: IMovieOptions[];
    selectedMovie: IMovieOptions;
    currentPage: number;
    totalResults: number;
    query: string;
    error: string;
    loading: boolean;
}

export interface IMoviesResponse {
    Search: IMovieOptions[];
    totalResults: string;
    Response?: string;
}

export interface ISign {
    username?: string,
    email: string,
    password: string,
}
