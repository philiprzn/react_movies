import { v4 as uuidv4 } from 'uuid';
import { v1 as v1 } from 'uuid';

export const INITIAL_STATE = {
    movies: [],
    app: {
        title: 'Netflix App',
        profileMenuData: 'Profile Menu Data',
        isModalWindowOpen: false,
        modalWindowType: null,
        calledMovieId: null,
        sortingType: 'none',
        filterTypeArray: [],
        searchingValues: null,
        query: null,
    }
};

export const movies = [
    {
        id: 'movie1',
        title: "Movie1-2013",
        description: "Description1",
        rating: 9.3,
        releaseDate: 2013,
        duration: 154,
        genre: ['crime', 'horror'],
    },
    {
        id: 'movie2',
        title: "Movie2-1991",
        description: "Description2",
        rating: 9.1,
        releaseDate: 1991,
        duration: 113,
        genre: ['horror', 'documentary'],
    },
    {
        id: 'movie3',
        title: "Movie3-1997",
        description: "Description3",
        rating: 7.4,
        releaseDate: 1997,
        duration: 97,
        genre: ['comedy'],
    },
    {
        id: 'movie4',
        title: "Movie4-2005",
        description: "Description4",
        rating: 8.6,
        releaseDate: 2005,
        duration: 105,
        genre: ['documentary'],
    },
    {
        id: 'movie5',
        title: "Movie5-2011",
        description: "Description4",
        rating: 5.6,
        releaseDate: 2011,
        duration: 99,
        genre: ['comedy', 'crime'],
    },
];