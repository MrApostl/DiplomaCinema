export interface Movie {
    id: number;
    title: string;
    image: string;
    rating: number;
    genres: string[];
}

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Великолепный век',
        image: 'https://upload.wikimedia.org/wikipedia/ru/9/9f/Muhte%C5%9Fem_Y%C3%BCzy%C4%B1l.jpg',
        rating: 10.0,
        genres: ['Adventure', 'Action', 'Documental'],
    },
    {
        id: 2,
        title: 'Великолепный век: Империя Кесём',
        image: 'https://ru-images-s.kinorium.com/movie/1080/1539327.jpg?1702297754',
        rating: 9.9,
        genres: ['Action', 'Documental', 'Fiction'],
    },
];