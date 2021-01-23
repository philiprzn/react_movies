import ACTIONS from '../actionTypes';
import { INITIAL_STATE } from './../../initialState';
const { movies: mov, app } = INITIAL_STATE;

function movies(state = INITIAL_STATE.movies, action = {}) {
    
    console.log('movies reducer data ===', action);
    
    switch (action.type) {
        case ACTIONS.ADD_MOVIE:
            return [...state, action.payload];
        case ACTIONS.EDIT_MOVIE:
            const { id, title, description } = action.payload;

            return state.map((movie, index) => {
                return movie.id === id ? {...movie, title, description} : movie
            });
        case ACTIONS.DELETE_MOVIE:
            return state.filter(movie => movie.id != action.payload);
        default:
            return state;
    }
};

export default movies;