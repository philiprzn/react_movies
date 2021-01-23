import constants from "./../../store/actionTypes";

const {TOGGLE_MODAL_WINDOW} = constants;

export const toggleModalWindow = (data = {}) => {
    // console.log("TOGGLE_MODAL_WINDOW", data);
    
    return {
        type: TOGGLE_MODAL_WINDOW,
        payload: data
    }
};