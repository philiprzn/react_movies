import React, {Component, useState} from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MovieList from "../containers/MoviesList/MoviesList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { v4 as uuid } from 'uuid';
// import {ContextConsumer} from "./ModalContextProvider/ModalContextProvider";
import MovieDetails from "./MovieDetails/MovieDetails";
import { connect } from 'react-redux';
import { addMovie }  from './../store/actions/movies';
import { toggleModalWindow }  from './../store/actions/app';
import {INITIAL_STATE} from "../initialState";
import useToggle from "../customHooks/useToggle/useToggle";

/*const newMovie2 = {
    id: '55565656',
    title: "Movie4 from Redux",
    description: "Description Redux",
    rating: 3.3,
    releaseDate: 7777
};

store.dispatch(addMovie(newMovie2));*/

const newMovie = {
    id: '123123',
    title: "Movie4 from Redux",
    description: "Description Redux",
    rating: 3.3,
    releaseDate: 7777
};

const MovieListWithLoading = WithLoading(MovieList);

const App = (props) => {
    const { app, toggleModalWindow } = props;
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
                <h1>Hello world</h1>
                <br/>
                <Header />
                <MovieList />
                {isModalWindowOpen &&  <ModalWindow />}
                {/*<p>Window open: {isModalWindowOpen.toString()}</p>*/}
                {/*<button onClick={() => props.addMovie(newMovie)}>AddMovie</button>*/}
                {/*<button onClick={toggleModalWindow}>Toggle button</button>*/}
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
        );
};


function mapStateToProps(state) {
    // console.log("function mapStateToProps APP ====", state);

    const { movies, app } = state;

    return { movies, app };
    // return movies;
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (newMovieData) => dispatch(addMovie(newMovieData)),
        toggleModalWindow: () => dispatch(toggleModalWindow()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*<ContextConsumer>
    {({ isModalWindowOpen }) => {

        return (
            <div className="app-wrapper">
                <h1>Hello world</h1>
                {/!*<Header />*!/}
                {/!*<MovieDetails />
                        <MovieList />*!/}
                {/!*{isModalWindowOpen &&  <ModalWindow />}/!**!/!*!/}
                {/!*<Footer />*!/}
            </div>
        )}}
</ContextConsumer>*/

{/*<Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>*/}
{/*<ErrorBoundary>
    <MovieList />
</ErrorBoundary>*/}
{/*<ErrorBoundary>
    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} openModal={openModal}/>
</ErrorBoundary>*/}