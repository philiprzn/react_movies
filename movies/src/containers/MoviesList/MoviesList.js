import React, {useState, useEffect, useMemo, useCallback} from 'react';
import MoviesListView from "./MoviesListView";
import {toggleModalWindow} from "../../store/actions/app";
import {connect} from "react-redux";
import {asyncGetMovies} from "../../store/actions/movies";
import {Link, useLocation, withRouter} from "react-router-dom";
import {movies} from "../../initialState";

const useQuery = () => new URLSearchParams(useLocation().search);

function MoviesList(props) {
    const {movies, app, toggleModalWindow, history, location, match} = props;
    const {sortingType, filterTypeArray, searchingValues} = app;

    useEffect(() => {
        props.onGetMovies();
    }, []);
    
    // console.log('MoviesList location search', location.search);
    const params = useQuery();
    // const params = new URLSearchParams(location.search);
    const q = params.get('q') || 'all';

    const searchingMovies = q.toLowerCase() === 'all'
        ? movies
        : movies.filter(movie => ~movie.title.toLowerCase().indexOf(q));


    return (
        <>
            <MoviesListView
                movies={searchingMovies}
                filterTypeArray={filterTypeArray}
                toggleModalWindow={toggleModalWindow}
                sortingType={sortingType}
                searchingValues={searchingValues}
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

// export default React.memo(connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviesList)));
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviesList));