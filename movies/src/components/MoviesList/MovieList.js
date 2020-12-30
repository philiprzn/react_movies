import React from 'react';
import './movieList.css';
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
    const { movies } = props;

    const Movies = movies.map(({ title, description, id }) =>
        <MovieCard title={title} description={description} key={id}/>
    );

    return (
        <div className="movielist">
            {Movies}
        </div>
    )
};

export default MovieList;