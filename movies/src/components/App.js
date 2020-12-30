import React, { Component } from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import MovieList from "./MoviesList/MovieList";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import movies from './../../movies';
import ModalWindow from './../components/ModalWindow/ModalWindow'

export default class App extends Component {
   constructor(props){
       super(props);
       const { movies, app } = this.props;
       const { isModalOpen } = app;

       this.state = {
           movies,
           app
       };

       this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
   }

    openModal() {
        this.setState((state) => ({
            app: {
                isModalOpen: true
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

    render() {
        const { movies, app } = this.state;
        const { isModalOpen } = app;
        const { openModal, closeModal } = this;

        return (
            <div className="app-wrapper">
                <Header openModal={openModal}/>
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
                {isModalOpen ?  <ModalWindow closeModal={closeModal}/> : <h2>Modal Close</h2>}
                <MovieList movies={movies}/>
                <Footer />
            </div>
        );
    }
}