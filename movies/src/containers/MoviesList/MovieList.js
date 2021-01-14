import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import getMovies from "../../api/getMovies";
import {SORTING_HANDLER_FUNCTIONS} from './../../api/sortingHandlerFunctions';

export default function MovieList() {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movies = getMovies;
        setMovies(movies);
    });

    const [sortType, setSortType] = useState('none')

    function handleSortChange(e) {
        setMovies(movies.sort(SORTING_HANDLER_FUNCTIONS[e.currentTarget.value]));
        setSortType(e.currentTarget.value);
    }

    const hanldeMovieSort = useCallback((e) => { handleSortChange(e) }, [movies, sortType]);

    const moviesForRender = useMemo(() => [...movies], [movies]);
    // const filteredMovies = useMemo(() => sortType === 'none' ? moviesForSorting : movies.sort(SORTING_HANDLER_FUNCTIONS[sortType]), [movies, sortType]);

    return (
        <>
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
                    {movies && movies.map(({title, description, id, rating}) =>
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