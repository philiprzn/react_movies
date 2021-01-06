import React, { Component } from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MovieList from "../containers/MoviesList/MovieList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { v4 as uuid } from 'uuid';

const MovieListWithLoading = WithLoading(MovieList);

export default class App extends Component {
   constructor(props){
       super(props);
       const { movies, app } = this.props;
       const { title , profileMenuData, isModalOpen } = app;

       this.state = {
           movies,
           app
       };

       // console.log(movies);

       this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
       this.createMovie = this.createMovie.bind(this);
       this.editMovie = this.editMovie.bind(this);
       this.deleteMovie = this.deleteMovie.bind(this);
   }

    openModal(id) {
       console.log('openModal', id)
        this.setState((state) => ({
            app: {
                isModalOpen: true,
                calledMovieId: id
            }
        }));
    };

    closeModal() {
        this.setState((state) => ({
            app: {
                isModalOpen: false
            }
        }));
    };

    createMovie(e) {
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
        // console.log(movieId)
    }

    deleteMovie(movieId) {
        this.setState(({ movies }) => ({
            movies: movies.filter(movie => movie.id !== movieId),
            app: {
                isModalOpen: false
            } }));
        // console.log(movieId)
    }

    render() {
        const { movies, app } = this.state;
        const { isModalOpen, profileMenuData, calledMovieId } = app;
        const { openModal, closeModal, createMovie, editMovie, deleteMovie } = this;

        console.log("this.state.app", this.state.app)

        return (
            <div className="app-wrapper">
                <Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>
                {/*<ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>*/}
                <ErrorBoundary>
                    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} openModal={openModal}/>
                </ErrorBoundary>
                {isModalOpen &&  <ModalWindow calledMovieId={calledMovieId}
                                              closeModal={closeModal}
                                              createMovie={createMovie}
                                              editMovie={editMovie}
                                              deleteMovie={deleteMovie}
                />}
                <Footer />
            </div>
        );
    }
}