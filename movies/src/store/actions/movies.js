import constants from "./../../store/actionTypes";
import { movies } from "../../initialState";
import { v4 as uuidv4 } from 'uuid';

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
}, 200));


