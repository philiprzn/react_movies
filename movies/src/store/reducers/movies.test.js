import React from 'react';
import movies from './movies';
import { addMovie, deleteMovie, editMovie } from './../actions/movies';
import {render, screen} from "@testing-library/react";

describe('Movies reducer Testing', () => {
    const state = [
        {
            id: 'movie1',
            title: "Movie1-2013",
            description: "Description1",
            rating: 9.3,
            releaseDate: 2013,
            duration: 154,
            genre: ['crime', 'horror'],
        },
        {
            id: 'movie2',
            title: "Movie2-1991",
            description: "Description2",
            rating: 9.1,
            releaseDate: 1991,
            duration: 113,
            genre: ['horror', 'documentary'],
        },
    ];

    it('new movie should be added', () => {
        const newMovie = {
            id: 'movie3',
            title: "Movie3-2021",
            description: "Description3",
            rating: 7.3,
            releaseDate: 2021,
            duration: 96,
            genre: ['horror']
        };
        const action = addMovie(newMovie);
        const newState = movies(state, action);

        expect(newState.length).toBe(3);
    });

    it('should delete movie from state', () => {
        const movieToDeleteId = 'movie1';
        const action = deleteMovie(movieToDeleteId);
        const newState = movies(state, action);

        expect(newState.length).toBe(1);
    });

    it('should edit movie from state', () => {
        const movieToEdit = {
            id: 'movie1',
            title: "Movie1-2021",
            description: "Description2021",
            rating: 7.3,
            releaseDate: 2021,
            duration: 96,
            genre: ['horror']
        };
        const action = editMovie(movieToEdit);
        const newState = movies(state, action);

        expect(newState[0].title).toBe('Movie1-2021');
    });
});