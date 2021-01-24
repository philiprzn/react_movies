import React from 'react';
import './moviesList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesSorting from "../../components/MoviesSorting/MoviesSorting";

const MovieListView = (props) => {
    return (
        <>
            <div className="moviesList-wrapper">
                <MoviesSorting/>
                <div className="moviesList">
                    {props.filteredMovies.map(({title, description, id, rating}) =>
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
    )
};

export default React.memo(MovieListView);