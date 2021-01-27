import React, {Component, useState, useEffect} from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MovieList from "../containers/MoviesList/MoviesList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { connect } from 'react-redux';
import { addMovie, getMovies }  from './../store/actions/movies';
import { toggleModalWindow }  from './../store/actions/app';

const newMovie = {
    id: '123123',
    title: "Movie4 from Redux",
    description: "Description Redux",
    rating: 3.3,
    releaseDate: 7777
};

const MovieListWithLoading = WithLoading(MovieList);

const App = (props) => {
    const { app, toggleModalWindow, movies } = props;
    const { isModalWindowOpen } = app;

    // const [application, setApplication] = useState(app);
    // const [isModalWindowOpen, toggleModalWindow] = useToggle(false);

   /* const openModal = (type, params) => { // types, params
        setApplication({...application, modalWindowType: type})
        toggleModalWindow();
    };

    const closeModal = () => {
        toggleModalWindow();
    };*/

        return (
            <div className="app-wrapper">
                <Header />
                <MovieList />
                {isModalWindowOpen &&  <ModalWindow />}
                {/*<p>Window open: {isModalWindowOpen.toString()}</p>*/}
                {/*<button onClick={() => props.addMovie(newMovie)}>AddMovie</button>*/}
                {/*<button onClick={toggleModalWindow}>Toggle button</button>*/}
                {/*<div>
                    <button onClick={props.onGetMovies}>GET MOVIES</button>
                </div>*/}
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
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

{/*<Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>*/}
{/*<ErrorBoundary>
    <MovieList />
</ErrorBoundary>*/}
{/*<ErrorBoundary>
    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} openModal={openModal}/>
</ErrorBoundary>*/}