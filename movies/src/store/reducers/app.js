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
        default:
            return state;
    }
};

export default app;
