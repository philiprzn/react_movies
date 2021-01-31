import ACTIONS from '../actionTypes';
import { INITIAL_STATE } from './../../initialState';
const { movies: mov, app } = INITIAL_STATE;

function movies(state = INITIAL_STATE.movies, action = {}) {

    switch (action.type) {
        case ACTIONS.GET_MOVIES:
            return [...action.payload];
        case ACTIONS.ADD_MOVIE:
            return [...state, action.payload];
        case ACTIONS.EDIT_MOVIE:
            const { id, title, description, releaseDate } = action.payload;

            return state.map((movie, index) => {
                return movie.id === id ? {...movie, title, description, releaseDate} : movie
            });
        case ACTIONS.DELETE_MOVIE:
            return state.filter(movie => movie.id != action.payload);
        default:
            return state;
    }
};

export default movies;