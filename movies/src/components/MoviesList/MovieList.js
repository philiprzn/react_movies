import React from 'react';
import styles from './movieList.css';
import MovieCard from "../MovieCard/MovieCard";
import movies from './../../../movies';

const MovieList = () => {
    const Movies = movies.map(({ title, description, id }) =>
        <MovieCard title={title} description={description} id={id}/>
    );

    return (
        <div className="movielist">
            {Movies}
        </div>
    )
};

export default MovieList;