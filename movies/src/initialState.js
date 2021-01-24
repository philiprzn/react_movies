import { v4 as uuidv4 } from 'uuid';
import { v1 as v1 } from 'uuid';

export const INITIAL_STATE = {
    movies: [
        {
            id: uuidv4(),
            title: "Movie1-2013",
            description: "Description1",
            rating: 9.3,
            releaseDate: 2013,
            genre: ['crime', 'horror'],
        },
        {
            id: uuidv4(),
            title: "Movie2-1991",
            description: "Description2",
            rating: 9.1,
            releaseDate: 1991,
            genre: ['horror', 'documentary'],
        },
        {
            id: uuidv4(),
            title: "Movie3-1997",
            description: "Description3",
            rating: 7.4,
            releaseDate: 1997,
            genre: ['comedy'],
        },
        {
            id: uuidv4(),
            title: "Movie4-2005",
            description: "Description4",
            rating: 8.6,
            releaseDate: 2005,
            genre: ['documentary'],
        },
        {
            id: uuidv4(),
            title: "Movie5-2005",
            description: "Description4",
            rating: 5.6,
            releaseDate: 2011,
            genre: ['comedy', 'crime'],
        },
    ],
    app: {
        title: 'Netflix App',
        profileMenuData: 'Profile Menu Data',
        isModalWindowOpen: false,
        modalWindowType: null,
        calledMovieId: null,
        sortingType: 'none',
        filterType: [],
    }
};