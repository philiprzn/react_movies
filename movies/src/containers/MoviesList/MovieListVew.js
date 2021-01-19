import React from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesSorting from "../../components/MoviesSorting/MoviesSorting";

const MovieListView = (props) => {
    return (
        <>
            <div>
                <p>MovieList</p>
                <button onClick={props.increaseCounter}>На меня нажали {props.counter} раз</button>
                <br/>
                <br/>
                <input type="text" value={props.name} onChange={(e) => props.updateName(e)}/>
                <br/>
                <input type="text" value={props.surname} onChange={(e) => props.updateSurname(e)}/>
                <br/>
                <br/>
                <pre>{JSON.stringify(props.user, null, 2)}</pre>
                <br/>
            </div>

            <div className="moviesList-wrapper">
                <MoviesSorting hanldeMovieSort={props.hanldeMovieSort}/>
                <div className="moviesList">
                    MOVIES LIST
                    { props.filteredMovies.map(({title, description, id, rating}) =>
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