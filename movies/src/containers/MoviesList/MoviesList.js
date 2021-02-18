import React, {useState, useEffect, useMemo, useCallback} from 'react';
import MoviesListView from "./MoviesListView";
import {connect} from "react-redux";
import {toggleModalWindow} from "../../store/actions/app";
import {asyncGetMovies} from "../../store/actions/movies";
import {withRouter} from "react-router-dom";
import useQuery from "../../customHooks/useQuery/useQuery";
import {SORTING_HANDLER_FUNCTIONS} from "../../api/sortingHandlerFunctions";

function MoviesList(props) {
    const {movies, app, toggleModalWindow, location} = props;
    const {sortingType, filterTypeArray, searchingValues} = app;
    const params = useQuery();
    const q = params.get('q');

    useEffect(() => {
        props.onGetMovies();
    }, []);

    let searchingMovies = [];

    if (q) {
        searchingMovies = q.toLowerCase() === 'all'
            ? movies
            : movies.filter(movie => ~movie.title.toLowerCase().indexOf(q));
    }

    const moviesForRender = useMemo(() => filterTypeArray.length === 0
        ? [...searchingMovies]
        : searchingMovies.filter(movie => {
            return movie.genre.some(item => {
                return filterTypeArray.some(value => value === item);
            });
    }), [searchingMovies, filterTypeArray]);

    const filteredMovies = useMemo(() => sortingType === 'none' ?
        moviesForRender
        : [...moviesForRender.sort(SORTING_HANDLER_FUNCTIONS[sortingType])]
        , [movies, sortingType, filterTypeArray, searchingValues]);

    return (
        <>
            <MoviesListView
                movies={filteredMovies}
                toggleModalWindow={toggleModalWindow}
            />
        </>
    );
};

function mapStateToProps(state) {
    const {movies, app} = state;

    return {movies, app};
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
        onGetMovies: (value) => dispatch(asyncGetMovies(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviesList));
// export default React.memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviesList)));