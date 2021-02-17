import React, {useState, useEffect, useMemo, useCallback} from 'react';
import MoviesListView from "./MoviesListView";
import {toggleModalWindow} from "../../store/actions/app";
import {connect} from "react-redux";
import {asyncGetMovies} from "../../store/actions/movies";
import {movies} from "../../initialState";
import useQuery from "../../customHooks/useQuery/useQuery";
import {SORTING_HANDLER_FUNCTIONS} from "../../api/sortingHandlerFunctions";

import {
    BrowserRouter as Router,
    Switch, Route, Link,
    NavLink, useParams,
    useLocation, Redirect, withRouter
} from "react-router-dom";
import {useHistory} from "react-router";

function MoviesList(props) {
    const {movies, app, toggleModalWindow, history, location, match} = props;
    const {sortingType, filterTypeArray, searchingValues} = app;

    let FCNPARAMS = useLocation();

    useEffect(() => {
        props.onGetMovies();
    }, []);

    // const params = useQuery();
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || 'all';
    // const q = params.get('q');

    console.log('================================');
    console.log('MoviesList FCNPARAMS', FCNPARAMS);

    console.log('MoviesList location', location);
    console.log('MoviesList match', match);
    console.log('MoviesList history', history);
    console.log('================================');


    useEffect(() => {
        console.log('useEffect params', q);
    }, [params]);
    
    const searchingMovies = q.toLowerCase() === 'all'
        ? movies
        : movies.filter(movie => ~movie.title.toLowerCase().indexOf(q));

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
                // filterTypeArray={filterTypeArray}
                // sortingType={sortingType}
                // searchingValues={searchingValues}
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