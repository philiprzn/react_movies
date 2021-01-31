import React, { useMemo } from 'react';
import './moviesList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesSorting from "../../components/MoviesSorting/MoviesSorting";
import {SORTING_HANDLER_FUNCTIONS} from "../../api/sortingHandlerFunctions";

const MovieListView = (props) => {

    const {movies, filterTypeArray, sortingType} = props;

    const moviesForRender = useMemo(() => filterTypeArray.length === 0 ? [...movies] : movies.filter(movie => {
        return movie.genre.some(item => {
            return filterTypeArray.some(value => value === item);
        });
    }), [movies, filterTypeArray]);

    const filteredMovies = useMemo(() => sortingType === 'none' ? moviesForRender : [...moviesForRender.sort(SORTING_HANDLER_FUNCTIONS[sortingType])], [movies, sortingType, filterTypeArray]);

    return (
        <>
            <div className="moviesList-wrapper">
                <MoviesSorting/>
                {props.movies.length > 0 && <div className="moviesList">
                    {filteredMovies.map(({title, description, id, rating, releaseDate}) =>
                        <MovieCard title={title}
                                   description={description}
                                   key={id}
                                   id={id}
                                   rating={rating}
                                   releaseDate={releaseDate}
                                   toggleModalWindow={props.toggleModalWindow}
                        />
                    )}
                </div>}
            </div>
        </>
    )
};

export default React.memo(MovieListView);