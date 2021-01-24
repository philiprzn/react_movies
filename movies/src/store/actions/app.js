import constants from "./../../store/actionTypes";

const {TOGGLE_MODAL_WINDOW, CHANGE_SORTING_VALUE} = constants;

export const toggleModalWindow = (data = {}) => {
    return {
        type: TOGGLE_MODAL_WINDOW,
        payload: data
    }
};

export const handleSortChange = (sortingValue) => {
    return {
        type: CHANGE_SORTING_VALUE,
        payload: sortingValue
    }
};