import React, {useState, useEffect, useMemo, useCallback} from 'react';
import MoviesListView from "./MoviesListView";
import {toggleModalWindow} from "../../store/actions/app";
import {connect} from "react-redux";
import {asyncGetMovies} from "../../store/actions/movies";
import {Link} from "react-router-dom";

function MoviesList(props) {
    const {movies, app, toggleModalWindow} = props;
    const {sortingType, filterTypeArray, searchingValues} = app;

    useEffect(() => {
        props.onGetMovies();
    }, []);

    return (
        <>
            <MoviesListView
                movies={movies}
                filterTypeArray={filterTypeArray}
                toggleModalWindow={toggleModalWindow}
                sortingType={sortingType}
                searchingValues={searchingValues}
            />}
        </>
    );
}

function mapStateToProps(state) {
    const {movies, app} = state;

    return {movies, app};
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModalWindow: (type) => dispatch(toggleModalWindow(type)),
        onGetMovies: () => dispatch(asyncGetMovies())
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MoviesList));