import constants from "./../../store/actionTypes";

import { v4 as uuidv4 } from 'uuid';
const movies = [
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
        title: "Movie5-2011",
        description: "Description4",
        rating: 5.6,
        releaseDate: 2011,
        genre: ['comedy', 'crime'],
    },
];

const {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, GET_MOVIES} = constants;

export const addMovie = (movie) => ({
    type: ADD_MOVIE,
    payload: movie
});

export const deleteMovie = (movieId) => {
    return {
        type: DELETE_MOVIE,
        payload: movieId
    }
};

export const editMovie = (movieToEdit) => {
    console.log('src\\store\\actions\\movies.js  movieToEdit ===', movieToEdit);
    
    return {
        type: EDIT_MOVIE,
        payload: movieToEdit
    }
};

export const getMovies = () => {
    return {
        type: GET_MOVIES,
    }
};

export const asyncGetMovies = () => dispatch => (setTimeout(() => {
    console.log('I GOT MOVIES');
    dispatch({type: "GET_MOVIES", payload: movies})
}, 1000));


