import { v4 as uuidv4 } from 'uuid';
import { v1 as v1 } from 'uuid';

export const INITIAL_STATE = {
    movies: [
        {
            id: uuidv4(),
            title: "Movie1-2014",
            description: "Description1",
            rating: 9.2,
            releaseDate: 2014
        },
        {
            id: uuidv4(),
            title: "Movie2-1991",
            description: "Description2",
            rating: 9.1,
            releaseDate: 1991
        },
        {
            id: uuidv4(),
            title: "Movie3-1997",
            description: "Description3",
            rating: 9.4,
            releaseDate: 1997
        },
        {
            id: uuidv4(),
            title: "Movie4-2005",
            description: "Description4",
            rating: 8.6,
            releaseDate: 2005
        },
    ],
    app: {
        title: 'Netflix App',
        profileMenuData: 'Profile Menu Data',
        isModalWindowOpen: false,
        modalWindowType: null,
        calledMovieId: '',
    }
};