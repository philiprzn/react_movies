import React, {useState, useEffect, useMemo, useCallback} from 'react';
import getMovies from "../../api/getMovies";
import {SORTING_HANDLER_FUNCTIONS} from './../../api/sortingHandlerFunctions';
import MovieListVie from "./MovieListVew";

function createUser(name, surname) {
    const user = {name, surname};

    return user;
}

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [sortType, setSortType] = useState('none')

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const user = useMemo(() => createUser(name, surname), [name, surname])
    const [message, setMessage] = useState('Hello world');

    const greeting = useCallback((text) => {
    }, [message]);

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);

    useEffect(() => {
        const movies = getMovies;
        setMovies(movies);
    }, []);

    function handleSortChange(e) {
        setSortType(e.currentTarget.value);
    }

    function increaseCounter() {
        setCounter(counter + 1)
    }

    function updateName(e) {
        setName(e.target.value)
    }

    function updateSurname(e) {
        setSurname(e.target.value)
    }

    const hanldeMovieSort = useCallback((e) => {
        handleSortChange(e)
    }, [movies, sortType]);

    const moviesForRender = useMemo(() => [...movies], [movies]);
    const filteredMovies = useMemo(() => sortType === 'none' ? moviesForRender : movies.sort(SORTING_HANDLER_FUNCTIONS[sortType]), [movies, sortType]);

    return (
        <>
            {movies.length && <MovieListVie
                increaseCounter={increaseCounter}
                counter={counter}
                updateName={updateName}
                name={name}
                surname={surname}
                updateSurname={updateSurname}
                hanldeMovieSort={hanldeMovieSort}
                movies={movies}
                filteredMovies={filteredMovies}
            />
            }
        </>
    );
}