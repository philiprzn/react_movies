import React from 'react';
import { addMovie, deleteMovie, editMovie, getMovies } from './movies';
import constants from './../../store/actionTypes';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { movies } from "../../initialState";

const {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, GET_MOVIES} = constants;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

function fetchData () {
    return dispatch => {
        return Promise.resolve(movies)
            .then((response) => dispatch({type: "GET_MOVIES", payload: response}))
    };
}

describe('Movies action testing', () => {

    it('should create an action to create movie', () => {
        const movieToCreate = {
            id: 'movieNew',
            title: "MovieNew-2021",
            description: "Description2021",
            rating: 7.7,
            releaseDate: 2021,
            duration: 101,
            genre: ['documentary'],
        };
        const expectedAction = {
            type: ADD_MOVIE,
            payload: {
                id: 'movieNew',
                title: "MovieNew-2021",
                description: "Description2021",
                rating: 7.7,
                releaseDate: 2021,
                duration: 101,
                genre: ['documentary'],
            }
        }

        expect(addMovie(movieToCreate)).toEqual(expectedAction);
    });

    it('should create an action to edit movie', () => {
        const movieToEdit = {
            id: 'movie1',
            title: "MovieUpdated-2021",
            description: "Description2021",
            rating: 7.7,
            releaseDate: 2021,
            duration: 101,
            genre: ['documentary'],
        };
        const expectedAction = {
            type: EDIT_MOVIE,
            payload: {
                id: 'movie1',
                title: "MovieUpdated-2021",
                description: "Description2021",
                rating: 7.7,
                releaseDate: 2021,
                duration: 101,
                genre: ['documentary'],
            }
        }

        expect(editMovie(movieToEdit)).toEqual(expectedAction);
    });

    it('should create an action to delete movie', () => {
        const movieToDeleteId = '1';
        const expectedAction = {
            type: DELETE_MOVIE,
            payload: '1'
        }

        expect(deleteMovie(movieToDeleteId)).toEqual(expectedAction);
    });

    it('should create an action to get movies async', () => {
        const store = mockStore({})

        return store.dispatch(fetchData())
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual({type: "GET_MOVIES", payload: movies})
            })
    })
})