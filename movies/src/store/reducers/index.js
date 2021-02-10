import { combineReducers } from 'redux';

import movies from './../reducers/movies';
import app from './../reducers/app';

export const rootReducer = combineReducers({
    movies,
    app,
});
