import ACTIONS from '../actionTypes';
import { INITIAL_STATE } from './../../initialState';
const { app: apa } = INITIAL_STATE;

function app(state = apa, action = {calledMovieId: null, movieToEdit: null}) {
    switch (action.type) {
        case ACTIONS.TOGGLE_MODAL_WINDOW:
            return {
                ...state,
                isModalWindowOpen: !state.isModalWindowOpen,
                modalWindowType: action.payload.modalWindowType,
                calledMovieId: action.payload.calledMovieId,
                movieToEdit: action.payload.editedMovieData
    };
        case ACTIONS.CHANGE_SORTING_VALUE:
            return {
                ...state,
                sortingType: action.payload
            };

        case ACTIONS.CHANGE_FILTERING_VALUES:
            return {
                ...state,
                filterTypeArray: action.payload
            };
        case ACTIONS.CHANGE_SEARCHING_VALUES:
            return {
                ...state,
                searchingValues: action.payload
            }
        default:
            return state;
    }
};

export default app;
