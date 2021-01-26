import React, {useState, useEffect, useMemo, useCallback} from 'react';
import getMovies from "../../api/getMovies";
import {SORTING_HANDLER_FUNCTIONS} from './../../api/sortingHandlerFunctions';
import MoviesListView from "./MoviesListView";
import {toggleModalWindow} from "../../store/actions/app";
import {connect} from "react-redux";

function MoviesList(props) {
    const {movies, app} = props;
    const {sortingType, filterTypeArray} = app;

    const moviesForRender = useMemo(() => filterTypeArray.length === 0 ? [...movies] : movies.filter(movie => {
        return movie.genre.some(item => {
            return filterTypeArray.some(value => value === item);
        });
    }), [movies, filterTypeArray]);

    const filteredMovies = useMemo(() => sortingType === 'none' ? moviesForRender : [...moviesForRender.sort(SORTING_HANDLER_FUNCTIONS[sortingType])], [movies, sortingType, filterTypeArray]);

    return (
        <>
            {movies.length && <MoviesListView
                filteredMovies={filteredMovies}
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
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MoviesList));