import React, { Component } from "react";
import './app.css';
import Header from "./../components/Header/Header"
import Footer from "./../components/Footer/Footer"
import MovieList from "./MoviesList/MovieList";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
                <MovieList />
                <Footer />
            </div>
        );
    }
}