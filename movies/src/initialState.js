import { v4 as uuidv4 } from 'uuid';
import { v1 as v1 } from 'uuid';

export const INITIAL_STATE = {
    movies: [
        {
            id: uuidv4(),
            title: "Movie1",
            description: "Description1",
            rating: 9.2

        },
        {
            id: uuidv4(),
            title: "Movie2",
            description: "Description2",
            rating: 9.1
        },
        {
            id: uuidv4(),
            title: "Movie3",
            description: "Description3",
            rating: 9.4
        },
        {
            id: uuidv4(),
            title: "Movie4",
            description: "Description4",
            rating: 8.6
        },
    ],
    app: {
        title: 'Netflix App',
        profileMenuData: 'Profile Menu Data',
        isModalOpen: false,
    }
};