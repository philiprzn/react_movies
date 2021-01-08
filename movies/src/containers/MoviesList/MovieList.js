import React, {Component} from 'react';
import './movieList.css';
import MovieCard from "../../components/MovieCard/MovieCard";
import getMovies from "../../api/getMovies";
import { SORTING_HANDLER_FUNCTIONS } from './../../api/sortingHandlerFunctions';

export default class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            sortFilter: 'none'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const movies = getMovies();

        this.setState((state, props) => {
            return {
                movies: movies
            }
        });
    }

    handleChange (event) {
        this.setState({ sortFilter: event.currentTarget.value })
    }

    render() {
        const { movies, sortFilter } = this.state;
        const moviesForSorting = [...movies];

        const filteredMovies = this.state.sortFilter === 'none' ? movies : moviesForSorting.sort(SORTING_HANDLER_FUNCTIONS[sortFilter]);

        return (
            <>
                <div className="moviesList-wrapper">
                    <div className="sorting-block">
                        <h3>SORT BY</h3>
                        <select onChange={this.handleChange}>
                            <option value='none'>None</option>
                            <option value='releaseDate'>Release Date</option>
                            <option value='rating'>Rating</option>
                        </select>
                    </div>
                    <div className="moviesList">
                        { movies && filteredMovies.map(({title, description, id, rating}) =>
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
    }
};