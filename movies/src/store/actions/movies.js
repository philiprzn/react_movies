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

export const asyncGetMovies = (value = 'all') => dispatch => (setTimeout(() => {
    const searchingMovies = value.toLowerCase() === 'all'
        ? movies
        : movies.filter(movie => ~movie.title.toLowerCase().indexOf(value));
    
    // console.log('asyncGetMovies value', value);
    // console.log('asyncGetMovies searchingMovies', searchingMovies);

    dispatch({type: "GET_MOVIES", payload: searchingMovies})
}, 200));


