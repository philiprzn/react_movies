import React, { Component } from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import ModalWindow from './../components/ModalWindow/ModalWindow'
import MovieList from "../containers/MoviesList/MovieList";
import WithLoading from "../containers/WithLoading/WithLoading";
import { v4 as uuid } from 'uuid';
import {ContextConsumer} from "./ContextProvider/ContextProvider";

const MovieListWithLoading = WithLoading(MovieList);

export default class App extends Component {
   constructor(props){
       super(props);
       /*const { movies, app } = this.props;
       const { title , profileMenuData, isModalOpen } = app;*/

       /*this.state = {
           movies,
           app
       };*/

       /*this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
       this.createMovie = this.createMovie.bind(this);
       this.editMovie = this.editMovie.bind(this);
       this.deleteMovie = this.deleteMovie.bind(this);*/
   }

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
        console.log('editMovie',movieId)
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
        return (
            <ContextConsumer>
                {({ app }) => (
                    <div className="app-wrapper">
                        <Header />
                        <MovieList />
                        {app.isModalOpen &&  <ModalWindow />}
                        <Footer />
                    </div>
                )}
            </ContextConsumer>
        );
    }
};

{/*<Header openModal={openModal} app={app} profileMenuData={profileMenuData}/>*/}
{/*<ErrorBoundary>
    <MovieList />
</ErrorBoundary>*/}
{/*<ErrorBoundary>
    <MovieListWithLoading isLoading={false} movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} openModal={openModal}/>
</ErrorBoundary>*/}