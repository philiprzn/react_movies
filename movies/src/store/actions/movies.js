import constants from "./../../store/actionTypes";

const {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} = constants;

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
