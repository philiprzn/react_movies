import React, { Component } from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MovieList from "../containers/MoviesList/MovieList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { v4 as uuid } from 'uuid';
import {ContextConsumer} from "./ModalContextProvider/ModalContextProvider";
import MovieDetails from "./MovieDetails/MovieDetails";

const MovieListWithLoading = WithLoading(MovieList);

const App = () => {

    /*createMovie(e) {
        const { title, description } = e;

        this.setState(({movies}) => ({
            movies: [
                ...movies,
                {
                    id: uuid(),
                    title: title,
                    description: description,
                }
            ],
            app: {
                isModalOpen: false
            }
        }));
    }

    editMovie(movieId) {
        console.log('editMovie',movieId)
    }

    deleteMovie(movieId) {
        this.setState(({ movies }) => ({
            movies: movies.filter(movie => movie.id !== movieId),
            app: {
                isModalOpen: false
            } }));
    }*/

        return (
            <ContextConsumer>
                {({ app }) => (
                    <div className="app-wrapper">
                        {/*<Header />*/}
                        <MovieDetails />
                        <MovieList />
                        {app.isModalOpen &&  <ModalWindow />}
                        <Footer />
                    </div>
                )}
            </ContextConsumer>
        );
};

export default App;

{/*<Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>*/}
{/*<ErrorBoundary>
    <MovieList />
</ErrorBoundary>*/}
{/*<ErrorBoundary>
    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} openModal={openModal}/>
</ErrorBoundary>*/}