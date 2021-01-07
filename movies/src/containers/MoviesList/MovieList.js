import React, {Component} from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import { ContextConsumer } from "../../components/ContextProvider/ContextProvider";

export default class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContextConsumer>
                {({movies}) => (
                    <div className="moviesList-wrapper">
                        <div className="sorting-block">
                            <h3>SORT BY</h3>
                            <select>
                                <option>None</option>
                                <option>Release Date</option>
                                <option>Rating</option>
                            </select>
                        </div>
                        <div className="moviesList">
                            {movies.map(({title, description, id}) =>
                                <MovieCard title={title}
                                           description={description}
                                           key={id}
                                           id={id}
                                />
                            )}
                        </div>
                    </div>
                )}
            </ContextConsumer>
        );
    }
};

MovieList.contextType = ContextConsumer;