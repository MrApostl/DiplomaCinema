export interface IMovie {
    id: number;
    title: string;
    image: string;
    rating: number;
    genres: string[];
}

export interface IMoviesContainerProps {
    movies: IMovie[];
}