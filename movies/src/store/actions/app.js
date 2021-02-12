import constants from "./../../store/actionTypes";

const {TOGGLE_MODAL_WINDOW, CHANGE_SORTING_VALUE, CHANGE_FILTERING_VALUES, CHANGE_SEARCHING_VALUES} = constants;

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

export const handleFilterChange = (filteringValues) => {
    return {
        type: CHANGE_FILTERING_VALUES,
        payload: filteringValues
    }
};

export const handleSearchChange = (filteringValues) => {
    return {
        type: CHANGE_SEARCHING_VALUES,
        payload: filteringValues
    }
};