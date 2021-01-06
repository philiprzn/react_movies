import React from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieList = ({ movies, deleteMovie, openModal, editMovie }) => {
    return (
        <div className="movielist">
            {movies.map(({ title, description, id }) =>
                <MovieCard title={title}
                           description={description}
                           deleteMovie={deleteMovie}
                           editMovie={editMovie}
                           key={id}
                           id={id}
                           openModal={openModal}
                           />
            )}
        </div>
    )
};

export default MovieList;