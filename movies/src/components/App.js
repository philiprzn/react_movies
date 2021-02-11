import React, {Component, useState, useEffect} from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MoviesList from "../containers/MoviesList/MoviesList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { connect } from 'react-redux';
import { addMovie, getMovies }  from './../store/actions/movies';
import { toggleModalWindow }  from './../store/actions/app';
import MovieDetails from "./MovieDetails/MovieDetails";

import {
    BrowserRouter as Router,
    Switch, Route, Link,
    NavLink,
    useParams
} from "react-router-dom";

const App = (props) => {
    const { app, toggleModalWindow, movies } = props;
    const { isModalWindowOpen } = app;

        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/film/:id" render={({location}) => <MovieDetails />} />
                    </Switch>

                    <Header />
                    <MoviesList />
                    {isModalWindowOpen &&  <ModalWindow />}
                </div>
            </Router>
        );
};

function mapStateToProps(state) {
    const { movies, app } = state;

    return { movies, app };
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (newMovieData) => dispatch(addMovie(newMovieData)),
        toggleModalWindow: () => dispatch(toggleModalWindow()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
