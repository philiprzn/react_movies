import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import getMovies from "../../api/getMovies";
import {SORTING_HANDLER_FUNCTIONS} from './../../api/sortingHandlerFunctions';

function createUser (name, surname) {
    const user = {name, surname};
    
    // console.log('createUser USER ===', user);
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
        console.log(text);
    }, [message]);

    useEffect(() => {
        greeting(message);
    }, [greeting, message]);

    useEffect(() => {
        console.log('useEffect 34');
        const movies = getMovies;
        setMovies(movies);
    }, []);

    function handleSortChange(e) {
        setSortType(e.currentTarget.value);
    }

    const hanldeMovieSort = useCallback((e) => { handleSortChange(e) }, [movies, sortType]);
    const moviesForRender = useMemo(() => [...movies], [movies]);
    const filteredMovies = useMemo(() => sortType === 'none' ? moviesForRender : movies.sort(SORTING_HANDLER_FUNCTIONS[sortType]), [movies, sortType]);

    return (
        <>
            <div>
                <button onClick={() => {setCounter(counter + 1)}}>На меня нажали {counter} раз</button>
                <br/>
                <br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <br/>
                <br/>
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <br/>
            </div>
            <div className="moviesList-wrapper">
                <div className="sorting-block">
                    <h3>SORT BY</h3>
                    <select onChange={hanldeMovieSort}>
                    {/*<select onChange={e => handleSortChange(e)}>*/}
                        <option value='none'>None</option>
                        <option value='releaseDate'>Release Date</option>
                        <option value='rating'>Rating</option>
                    </select>
                </div>
                <div className="moviesList">
                    MOVIES LIST
                    {movies && filteredMovies.map(({title, description, id, rating}) =>
                        <MovieCard title={title}
                                   description={description}
                                   key={id}
                                   id={id}
                                   rating={rating}
                        />
                    )}
                </div>
            </div>
        </>
    );
};